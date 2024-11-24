# 第 20 章 Vec 源码分析

本节将通过一个比较完整的例子，把内存安全问题分析一遍。本节选择的例子是标准库中的基本数据结构`Vec<T>`源代码分析。之所以选择这个模块作为示例，其一是因为这个类型作为非常基础的数据结构，平时用得很多，大家都很熟悉；第二个原因是，恰好它的内部实现又完全展现了 Rust 内存安全的方方面面，深入剖析它的内部实现非常有利于加深我们对 Rust 内存安全的认识。

本章中用于分析的代码是 1.23 nightly 版本，Vec 的内部实现源码在此之前一直有所变化，以后也很可能还会有变化，请读者注意这一点。

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

编译，执行，从结果中可以看出，如果用`new`方法构造出来，一开始的时候是没有分配内存空间的，capacity 为`0`。我们也可以使用`with_capacity`来构造新的 Vec，可以自行指定预留空间大小，还可以对已有的 Vec 调用`reserve`方法扩展预留空间。在向容器内部插入数据的时候，如果当前容量不够用了，它会自动申请更多的空间。当变量生命周期结束的时候，它会自动释放它管理的内存空间。
