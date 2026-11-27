# Rust 文档审查记录

## 校对基线

- 最新稳定版：[Rust 1.100.0](https://doc.rust-lang.org/1.100.0/releases.html#version-11000-2026-11-12)；示例默认使用 Edition 2024。工具链版本和 Edition 是两件不同的事：同一个编译器可以构建不同 Edition 的 crate。
- 扫描 `docs/` 全部 219 篇 Markdown，提取 1022 个 Rust 代码块。1.100.0：504 个通过、517 个失败、1 个显式指定 Nightly；1.99.1：503 个通过、518 个失败、1 个显式指定 Nightly。
- [逐段编译清单](RUST-EXAMPLES.md)按章节列出 Rust 1.100.0 下未通过的代码块。1.99.1 额外失败的是「8.2 Never Type」第 106 行；Rust 1.100.0 [稳定了 `!` 类型](https://doc.rust-lang.org/1.100.0/releases.html#version-11000-2026-11-12)。
- 用例中混有编译输出、命令、教学反例、依赖 crate 或上下文的片段。相应的错误需要逐条归类，不等同于 517 个文档缺陷。脚本只编译，不链接、不执行，不代表外链、依赖、运行结果或 `unsafe` 的正确性经过验证。

## 初次审查发现的知识点

| 章节 | 发现 | 建议 |
| --- | --- | --- |
| 1.1 版本和发布策略、1.2 安装开发环境、32.1–32.2 Cargo 和项目配置 | 以 Nightly 为默认，安装与项目配置仍主要展示旧工具链。 | 默认使用 Stable，独立标注实验特性，演示 `cargo new` 的 Edition 2024 和 [升级流程](https://doc.rust-lang.org/edition-guide/editions/creating-a-new-project.html)。 |
| 5.7 trait 别名 | 未清晰区分实验性的 `trait_alias` 语法与稳定的 trait 加 blanket impl 模式。 | 给出两个最小对比例子，说明何时需要 Nightly。 |
| 7.3 if-let 和 while-let | “或模式尚未实现”的说法和同页示例冲突；缺少 `let … else` 与 let chains。 | 用对照示例区分分支匹配、提前返回与组合条件。[`let else`](https://blog.rust-lang.org/2022/11/03/Rust-1.65.0/) 从 1.65 起稳定；[let chains](https://doc.rust-lang.org/edition-guide/rust-2024/let-chains.html) 自 1.88 起可用于 Edition 2024。 |
| 8.2 Never Type | 用“将来”描述 `!` 在错误类型中的应用；同一完整示例在 1.99.1 失败、1.100.0 通过。 | 更新稳定状态，重新检查模式匹配和 Edition 2024 的 never type fallback，不把代码编译通过当成所有行为的证明。 |
| 9.5 宏的实践与哲学、25.1–25.6 协程与异步 | 9.5 将 `async` / `await` 误归因于宏；25.1 将 Edition 2024 保留 `gen` 关键字与 `gen` 块稳定混在一起。 | 区分编译器对 async 的转换、运行时入口的属性宏、Nightly `Coroutine` / [`gen_blocks`](https://doc.rust-lang.org/unstable-book/language-features/gen-blocks.html)，补充稳定版 `Iterator` 示例和 Future 的轮询图。 |
| 13.1 借用检查、14.1–14.3 NLL | 将生命周期描述成变量声明至最后使用的固定区间，且将循环引用和线程安全作为 NLL 的直接能力。 | 区分变量作用域、引用活跃区间和析构；用有分支的最小例子解释借用。[Rust 1.63 已对所有 Edition 完成 NLL 迁移](https://blog.rust-lang.org/2022/08/05/nll-by-default/)；旧检查器留作历史背景。 |
| 19.3 内置函数、19.5 协变 | 用已弃用的 `mem::uninitialized` 读入字节，且声称协变仅作用于生命周期泛型参数。 | 改用字节数组和 `from_*_bytes`，只在需讨论未初始化内存时介绍 `MaybeUninit`；用 [型变表](https://doc.rust-lang.org/reference/subtyping.html#variance) 解释 `Vec<T>`、`&mut T` 的区别。 |
| 21.5 关联类型、23.3 impl trait | 缺少 GAT；`conservative_impl_trait` 示例不适用 Stable，且将已稳定的参数位和 trait 返回位写成尚未实现。 | 补上从 1.65 稳定的 GAT，以及自 1.75 稳定的 [trait 返回位 `impl Trait` 和 `async fn`](https://blog.rust-lang.org/2023/12/21/async-fn-rpit-in-traits/)。与仍需 Nightly 的类型别名或关联类型写法分别介绍。 |
| 34.2–34.4 FFI | 旧 `#[no_mangle]` 和未标记的 `extern` 块不能用 Edition 2024 编译。 | 改成 [`#[unsafe(no_mangle)]`](https://doc.rust-lang.org/edition-guide/rust-2024/unsafe-attributes.html)、[`unsafe extern "C"`](https://doc.rust-lang.org/edition-guide/rust-2024/unsafe-extern.html) 并明确安全前提，再用完整 Cargo 与 C 示例做链接验证。 |

## 已修复

- 第 1–9 章：更新工具链与 Edition、let-else、let chains、`!` 类型和三类过程宏；保留可以跟着搭建的配套 Cargo 项目示例。
- 第 10–20 章：区分借用范围、作用域和析构；补齐内部可变性、泄漏与内存操作的安全前提，用不依赖布局的示例替换过时写法。
- 第 21–26 章：区分 GAT、trait 返回位 `impl Trait`、async trait 与 dyn 兼容性；补充 Pin 和 Future 轮询说明，Nightly 协程和 `gen` 与稳定方案分列。
- 第 27–31 章：补充 `Send`/`Sync`、锁、原子操作和通道的取舍；第三方并行库示例标记准确的 Cargo 依赖。
- 第 32–35 章、备忘录与词汇表：更新 Cargo、错误处理、Edition 2024 FFI 及测试示例。在 Linux 上实际编译、链接并运行 34.2–34.4，验证静态库调用和动态库加载。
- 合并后重新审计：219 篇 Markdown 共 835 个 Rust 围栏，679 个通过、**0 个失败**、111 个预期失败、0 个意外通过、15 个 Nightly、27 个 Cargo 依赖、3 个显式忽略。初次审计的未分类失败为 517；合并后补齐上下文，区分教学反例、历史伪代码、诊断输出与命令。补齐了 15 处未指定语言的围栏。
- 以合并前的 `20ffcf0` 为基线，最终涉及 173 篇文档，按物理行数衡量，没有单篇净删减超过 20%；最大为 33.5 节（70 行到 57 行，18.57%）。全站 Mermaid 围栏由 2 个增至 28 个，净增 26 个。
- 在构建产物的 220 个 HTML 中遍历 42,217 处站内链接和 244 处站内图片引用，未发现缺失文件或目标锚点；首页和 404 之外的页面均有侧边栏或导航入口。构建产物为 `dist/`，基路径为 `/rust_study/`。
- 修复了图片图注在段落内生成非法 `<p><figure>` 的问题，最终 HTML 有 12 个独立图注、0 处该嵌套。原有图示改为 Mermaid 的第 11.2 节以及保留图注的「详解所有权和借用」均已在浏览器复查。
- 生产预览实测 15.2、25.5、29.2 和 11.2 的 Mermaid 均生成 SVG，Playground 输出 `hello world!`，搜索「所有权」返回可打开的结果，390 px 下 Mutex 页面无横向溢出且导航可展开。所抽查页面未见 hydration 警告。

## 遗留

- Vite 仍报告 Playground 依赖的客户端工具模块导入 `node:vm`。该导入服务于客户端未使用的配置解析函数；最终客户端 JS 中未发现 `runInNewContext`，Playground 实测可运行。未修改第三方包或用全局别名压掉警告。
- Vite 仍报告部分 chunk 在最小化后超过 500 kB。最大的是约 6.46 MB 的预构建搜索数据，还有 Mermaid 图形与语法高亮相关的大资源；提高阈值不会减小实际资源。保留现有功能，后续可分片索引或更换索引实现，再测搜索和加载性能。
- 审计未执行 Nightly 围栏，也不安装 27 处 Cargo 依赖；3 处显式忽略的围栏需要同章所列的额外模块或文件。外部 URL 及第三方锚点未逐一联网复核。
- 按 UTF-8 字节另行统计，有 23 篇净缩减超过 20%；差异包括长诊断、重复说明与旧实现被替换，不能把行数通过等同于字节数通过。尤其 14.3 节仍是浓缩小结，保留了原书的交通规则类比和安全边界说明。
- 本轮未改部署 workflow，也未推送或发布 Pages。Pages 发布需等 Xu 手工提交的 workflow 补丁进入 `main`。

## 复现

```sh
rustup toolchain install 1.100.0 --profile minimal
python3 scripts/audit-rust-examples.py --toolchain 1.100.0 > RUST-EXAMPLES.md
```

确实需要 Cargo 依赖的示例，在围栏上使用 `rust,cargo=tokio,no_run`；多个依赖用 `+` 分隔，例如 `rust,cargo=serde+serde_json,no_run`，并在正文给出需要的 Cargo 配置。依赖本地配套项目时也可用 `rust,cargo,no_run`，正文应注明项目位置。审计将这类示例单列为「Cargo 依赖」，不计入失败，也不自动安装依赖或验证 Cargo 项目；未标记的未解析导入仍计为失败，避免把缺失的本地模块误判为外部依赖。
