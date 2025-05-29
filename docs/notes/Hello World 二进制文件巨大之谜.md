## 如何优化编译大小呢？

- 发布模式：通过使用`cargo build --release`，你可以告诉 Rust 进行更多的优化，并去除调试信息。这通常会显著减小生成的二进制文件大小。

- 去除标准库：对于某些特定应用，如嵌入式系统编程，你可能不需要整个标准库。在这种情况下，你可以考虑使用`#![no_std]`属性来禁用标准库。

- 使用 strip 命令：strip 是一个可以移除二进制文件中符号信息的工具，进一步减小文件大小。

- 其他优化工具和策略：例如，使用 upx 可以进一步压缩生成的二进制文件。还有其他的 Cargo 插件和工具，如 cargo-bloat，可以帮助你识别和减小二进制文件大小。

社区也有人总结了如何优化编译文件大小：[min-sized-rust](https://github.com/johnthagen/min-sized-rust)

其中也提供了一些优化配置：

```toml
[package]
name = "min-sized-rust"
version = "0.1.0"
authors = ["johnthagen <johnthagen@gmail.com>"]
license-file = "LICENSE.txt"

[dependencies]

[profile.release]
opt-level = "z"     # Optimize for size.
lto = true          # Enable Link Time Optimization
codegen-units = 1   # Reduce number of codegen units to increase optimizations.
panic = "abort"     # Abort on panic
strip = true        # Automatically strip symbols from the binary.
```

> [【Rust 漫画】揭开 Hello World 二进制文件巨大之谜
> ](https://mp.weixin.qq.com/s/SsNzf9_8MyyP4oeHsZrauQ)
