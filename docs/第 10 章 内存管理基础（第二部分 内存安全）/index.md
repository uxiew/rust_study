# 第二部分 内存安全

不带自动内存回收（Garbage Collection）的内存安全是 Rust 语言最重要的创新，是它与其他语言最主要的区别所在，是 Rust 语言设计的核心。

Rust 希望通过语言的机制和编译器的功能，把程序员易犯错、不易检查的问题解决在编译期，避免运行时的内存错误。这一部分主要探讨 Rust 是如何达到内存安全特性的。

Languages shape the way we think，or don’t.

——Erik Naggum

## 第 10 章 内存管理基础

本章主要介绍没有垃圾回收机制下的内存管理基础知识。
