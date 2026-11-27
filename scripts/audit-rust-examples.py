#!/usr/bin/env python3
import argparse
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
import json
from pathlib import Path
import re
import subprocess
from tempfile import TemporaryDirectory
from urllib.parse import quote


FENCE = re.compile(r"^([ \t]*)(`{3,}|~{3,})(.*)$")
RUST = re.compile(r"^rust(?=$|[ ,:{])")
CARGO = re.compile(r",\s*cargo(?:=([\w-]+(?:\+[\w-]+)*))?(?=\s*(?:,|$))")
MAIN = re.compile(r"\bfn\s+main\s*\(")
INNER_ATTR = re.compile(r"\s*#!\[(?:[^\[\]]|\[[^\[\]]*\])*\]\s*")
ROOT = Path(__file__).resolve().parents[1]


@dataclass(frozen=True)
class Example:
    path: Path
    line: int
    info: str
    code: str


def examples(path):
    opened = None
    lines = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        fence = FENCE.fullmatch(line)
        if opened is None:
            if fence:
                indent, marker, info = fence.groups()
                if not (marker[0] == "`" and "`" in info):
                    opened = (indent, marker, info.strip(), line_no)
            continue

        indent, marker, info, start = opened
        if fence and fence[2].startswith(marker) and not fence[3].strip():
            if RUST.match(info):
                yield Example(path.relative_to(ROOT), start, info, "\n".join(lines) + "\n")
            opened = None
            lines = []
        else:
            line = line.removeprefix(indent)
            if line == "#":
                line = ""
            elif line.startswith(("# ", "##")):
                line = line[2:] if line.startswith("# ") else line[1:]
            lines.append(line)


def verify(example, compiler, edition):
    if "nightly" in example.info:
        return "Nightly 配置", "代码块指定 Nightly，未用稳定版编译"
    if cargo := CARGO.search(example.info):
        message = "需要配套 Cargo 项目，未独立编译"
        if cargo[1]:
            message += "；依赖：" + "、".join(cargo[1].split("+"))
        return "Cargo 依赖", message
    if re.search(r"\bignore(?:-|\b)", example.info):
        return "显式忽略", "代码块标记为 ignore"

    explicit_edition = re.search(r"\bedition(?:\s*:\s*[\"']?)?(20\d\d)", example.info)
    expected_fail = "compile_fail" in example.info
    code = example.code
    with TemporaryDirectory() as tmp:
        source = Path(tmp) / "example.rs"

        def compile_source(content, crate_type):
            source.write_text(content, encoding="utf-8")
            return subprocess.run(
                [*compiler, "--edition", explicit_edition[1] if explicit_edition else edition,
                 "--crate-type", crate_type, "--emit=metadata", "--error-format=json",
                 "-A", "warnings", "--out-dir", tmp, str(source)],
                capture_output=True, check=False, text=True,
            )

        has_main = MAIN.search(code)
        result = compile_source(code, "bin" if has_main else "lib")
        if result.returncode and not has_main:
            end = 0
            while attr := INNER_ATTR.match(code, end):
                end = attr.end()
            wrapped = compile_source(code[:end] + "\nfn main() {\n" + code[end:] + "\n}\n", "bin")
            if not wrapped.returncode:
                result = wrapped

    if not result.returncode:
        return ("意外通过", "标记为 compile_fail") if expected_fail else ("通过", "")

    for line in result.stderr.splitlines():
        try:
            diagnostic = json.loads(line)
        except json.JSONDecodeError:
            continue
        if diagnostic.get("level") == "error":
            error_code = (diagnostic.get("code") or {}).get("code", "")
            message = " ".join(diagnostic["message"].split())
            return ("预期失败" if expected_fail else "失败", f"{error_code} {message}".strip())
    raise RuntimeError(result.stderr or f"rustc 退出码：{result.returncode}")


def chapter(path):
    parent = path.parts[1]
    number = re.match(r"第 (\d+) 章", parent)
    return (int(number[1]), parent) if number else (100, parent if path.parent.name != "docs" else "站点根目录")


def main():
    parser = argparse.ArgumentParser(description="分章节检查 Markdown 中的 Rust 代码块（只编译，不运行）")
    parser.add_argument("--toolchain", help="例如 1.100.0；默认使用当前工具链")
    parser.add_argument("--edition", default="2024", choices=("2015", "2018", "2021", "2024"))
    parser.add_argument("--jobs", type=int, default=8)
    args = parser.parse_args()

    compiler = ["rustc"] + (["+" + args.toolchain] if args.toolchain else [])
    version = subprocess.check_output([*compiler, "--version"], text=True).strip()
    pages = sorted((ROOT / "docs").rglob("*.md"))
    snippets = [snippet for page in pages for snippet in examples(page)]
    counts = Counter()
    grouped = defaultdict(list)
    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        results = pool.map(lambda item: verify(item, compiler, args.edition), snippets)
        for item, (status, message) in zip(snippets, results):
            counts[status] += 1
            if status != "通过":
                grouped[chapter(item.path)].append((item, status, message))

    print(f"# Rust 代码块编译清单\n\n工具链：`{version}`；默认 Edition {args.edition}。")
    print(f"扫描 {len(pages)} 篇 Markdown，提取 {len(snippets)} 个 Rust 代码块。")
    print("、".join(f"{status} {counts[status]} 个" for status in
                    ("通过", "失败", "预期失败", "意外通过", "Nightly 配置", "Cargo 依赖", "显式忽略")) + "。\n")
    print("先独立编译；没有 `fn main` 的片段先当库编译，失败后再尝试放进 `main`。仅检查编译，不链接、不运行、不安装依赖。")
    print("「失败」含有教学上刻意报错但未标注的例子、缺少上下文的片段、依赖其他 crate 的示例和真正需要更新的代码，不能直接视为缺陷。")
    for (_, name), entries in sorted(grouped.items()):
        print(f"\n## {name}\n\n| 文件与围栏行号 | 结果 | 首条诊断 |\n| --- | --- | --- |")
        for item, status, message in entries:
            link = quote(item.path.as_posix()) + f"#L{item.line}"
            name = item.path.name.replace("[", "\\[").replace("]", "\\]")
            message = message.replace("|", "\\|").replace("<", "&lt;").replace(">", "&gt;")
            print(f"| [{name}:{item.line}]({link}) | {status} | {message} |")


if __name__ == "__main__":
    main()
