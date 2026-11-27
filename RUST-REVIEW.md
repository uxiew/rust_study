# Rust 文档审查记录

## 校对基线

- 最新稳定版：[Rust 1.100.0](https://doc.rust-lang.org/1.100.0/releases.html#version-11000-2026-11-12)；示例默认使用 Edition 2024。工具链版本和 Edition 是两件不同的事：同一个编译器可以构建不同 Edition 的 crate。
- 扫描 `docs/` 全部 219 篇 Markdown，提取 1022 个 Rust 代码块。1.100.0：504 个通过、517 个失败、1 个显式指定 Nightly；1.99.1：503 个通过、518 个失败、1 个显式指定 Nightly。
- [逐段编译清单](RUST-EXAMPLES.md)按章节列出 Rust 1.100.0 下未通过的代码块。1.99.1 额外失败的是「8.2 Never Type」第 106 行；Rust 1.100.0 [稳定了 `!` 类型](https://doc.rust-lang.org/1.100.0/releases.html#version-11000-2026-11-12)。
- 用例中混有编译输出、命令、教学反例、依赖 crate 或上下文的片段。相应的错误需要逐条归类，不等同于 517 个文档缺陷。脚本只编译，不链接、不执行，不代表外链、依赖、运行结果或 `unsafe` 的正确性经过验证。

## 需要更新的知识点

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

## 站点检查发现

- 已修复一个阻断构建的 Markdown 链接、备忘录首页的占位链接和章节排序问题。Pages 构建产物为 `dist/`，站点基路径为 `/rust_study/`。
- 构建仍提示依赖中的 `node:vm` 被浏览器打包外部化、部分压缩后的资源大于 500 kB；本地预览中，搜索能打开结果，Mermaid 能生成图，Playground 能运行 Hello World。
- 访问「11.2 移动语义」时曾记录到 Vue hydration mismatch 警告；章节仍能显示，根因未确认。后续应比较原版的运行情况，再定位产生差异的组件。

## 复现

```sh
rustup toolchain install 1.100.0 --profile minimal
python3 scripts/audit-rust-examples.py --toolchain 1.100.0 > RUST-EXAMPLES.md
```
