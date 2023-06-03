# 第 34 章 FFI

Rust 有一个非常好的特性，就是它支持与 C 语言的 ABI 兼容。什么是 ABI 呢？维基百科是这么解释的：

---

In computer software，an application binary interface（ABI）is an interface between two program modules；often，one of these modules is a library or operating system facility，and the other is a program that is being run by a user.

An ABI defines how data structures or computational routines are accessed in machine code，which is a low-level，hardware-dependent format.
--:
—— Wikipedia
--:

---

所以，我们可以用 Rust 写一个库，然后直接把它当成 C 写的库来使用。或者反过来，用 C 写的库，可以直接在 Rust 中被调用。而且这个过程是没有额外性能损失的。C 语言的 ABI 是这个世界上最通用的 ABI，大部分编程语言都支持与 C 的 ABI 兼容。这也意味着，Rust 与其他语言之间的交互是没问题的，比如用 Rust 为 Python/Node.js/Ruby 写一个模块等。

本章主要讲解 Rust 如何与其他语言进行交互，为了让示例尽可能地简洁、清晰，本章主要关注的是 Rust 如何与 C 语言进行交互。至于其他语言，搞清楚它们如何与 C 语言交互就完全可以掌握它们与 Rust 的交互办法，所以无须一个个地分别讲解。
