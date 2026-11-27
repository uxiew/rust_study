# 第 20 章 Vec 源码分析

本节将通过一个比较完整的例子，把内存安全问题分析一遍。本节选择的例子是标准库中的基本数据结构`Vec<T>`源代码分析。之所以选择这个模块作为示例，其一是因为这个类型作为非常基础的数据结构，平时用得很多，大家都很熟悉；第二个原因是，恰好它的内部实现又完全展现了 Rust 内存安全的方方面面，深入剖析它的内部实现非常有利于加深我们对 Rust 内存安全的认识。

本章使用 [Rust 1.100.0 稳定版源码](https://doc.rust-lang.org/1.100.0/src/alloc/vec/mod.rs.html)。在阅读时要区分 `len`、`capacity` 等公开契约与内部字段、扩容倍率等实现细节。

我们先从使用者的角度分析一下 Vec 是如何自动管理内存空间的：

```rust
fn main() {
    let mut v1 = Vec::<i32>::new();
    println!("Start: length {} capacity {}", v1.len(), v1.capacity());

    for i in 1..10 {
        v1.push(i);
        println!("[Pushed {}] length {} capacity {}", i, v1.len(), v1.capacity());
    }

    let mut v2 = Vec::<i32>::with_capacity(1);
    println!("Start: length {} capacity {}", v2.len(), v2.capacity());

    v2.reserve(10);
    for i in 1..10 {
        v2.push(i);
        println!("[Pushed {}] length {} capacity {}", i, v2.len(), v2.capacity());
    }
}
```

运行会看到 `Vec::<i32>::new()` 不预分配，起始容量为零；`with_capacity(n)` 则保证容量至少是 `n`。`reserve(additional)` 保证容得下当前长度加上新增元素数，空间足够时不会重新分配。这里打印的具体容量只反映当前实现；零大小类型是下一节介绍的例外。
