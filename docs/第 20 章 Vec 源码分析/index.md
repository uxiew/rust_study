# 第 20 章 Vec 源码分析

本章以 [Rust 1.100.0 源码](https://doc.rust-lang.org/1.100.0/src/alloc/vec/mod.rs.html) 为参照。用稳定的公开 API 验证行为，另行解释内部的内存申请、扩容和析构；私有类型、分配策略和字段布局不属于公开契约。

```rust
let mut values = Vec::with_capacity(4);
assert_eq!(values.len(), 0);
assert!(values.capacity() >= 4);

values.push(10);
assert_eq!(values.as_slice(), &[10]);
```

观察这类容器时，先区分已经初始化的元素数（`len`）和可以容纳的元素数（`capacity`）。预留空间不会自动创建元素。
