# 第 5 章 trait

Rust 语言中的 trait 是非常重要的概念。在 Rust 中，trait 这一个概念承担了多种职责。在中文里，trait 可以翻译为“特征”“特点”“特性”等。由于这些词区分度并不明显，在本书中一律不翻译 trait 这个词，以避免歧义。

trait 中可以包含：函数、常量、类型等。


## 什么是 trait ?

trait 是 Rust 中定义共享行为的一种方式。

```rust
trait WithName {
    fn new(name: String) -> Self;

    fn get_name(&self) -> &str;

    fn print(&self) {
      println!("My name is {}", self.get_name())
    }
}
```

正如 [Rust by Example](https://doc.rust-lang.org/rust-by-example/trait.html) 所说：
> *trait* 是为未知类型 *Self* 定义的方法集合。它们可以访问在同一个 trait 中声明的其他方法。

当我们想要定义一个可以应用于任何类型的函数时，我们使用 trait。

首先，让我们看一些 trait 的基础知识，包括我们如何定义和实现它们，一些术语和语法糖，以及我们可以在 trait 上定义哪些方法类型。
