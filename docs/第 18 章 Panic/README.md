## 第 18 章 Panic

### 18.1 什么是 panic

在 Rust 中，有一类错误叫作 panic。示例如下：

---

```rust
fn main() {
    let x : Option<i32> = None;
    x.unwrap();
}
```

---

编译，没有错误，执行这段程序，输出为：

---

```rust
thread '<main>' panicked at 'called `Option::unwrap()` on a `None` value', ../src/libcore/option.rs:326
note: Run with `RUST_BACKTRACE=1` for a backtrace.
```

---

这种情况就引发了一个 panic。在这段代码中，我们调用了`Option::unwrap()`方法，正是这个方法有可能导致 panic。根据提示，我们设置一个环境变量`RUST_BACKTRACE=1`之后再执行这个程序，可以看到这个程序在发生 panic 时候的函数调用栈。

执行`RUST_BACKTRACE=1 ./test`，结果为：

---

```rust
thread 'main' panicked at 'called `Option::unwrap()` on a `None` value', ../src/libcore/option.rs:323
stack backtrace:
1: 0x10af488f8 - std::sys::backtrace::tracing::imp::write::h6f1d53a70916b90d
2: 0x10af4a3af - std::panicking::default_hook::{{closure}}::h137e876f7d3b5850
3: 0x10af49945 - std::panicking::default_hook::h0ac3811ec7cee78c
4: 0x10af49e96 - std::panicking::rust_panic_with_hook::hc303199e04562edf
5: 0x10af49d34 - std::panicking::begin_panic::h6ed03353807cf54d
6: 0x10af49c52 - std::panicking::begin_panic_fmt::hc321cece241bb2f5
7: 0x10af49bb7 - rust_begin_unwind
8: 0x10af6f0b0 - core::panicking::panic_fmt::h27224b181f9f037f
9: 0x10af6efb4 - core::panicking::panic::h53676c30b3bd95eb
10: 0x10af44804 - <core::option::Option<T>>::unwrap::h3478e42c3c27faa3
11: 0x10af44880 - test::main::h8a7a35fa594c0174
12: 0x10af4a96a - __rust_maybe_catch_panic
13: 0x10af49486 - std::rt::lang_start::h538f8960e7644c80
14: 0x10af448b9 - main
```

---

我们去查一下 Option::unwrap()的文档，其中是这么说的：

---

```rust
Moves the value v out of the Option<T> if it is Some(v).
Panics
    Panics if the self value equals None.
Safety note
    In general, because this function may panic, its use is discouraged.
    Instead, prefer to use pattern matching and handle the None case explicitly.
```

---

当 Option 内部的数据是 Some 时，它可以成功地将内部的数据 move 出来返回。

当 Option 内部的数据是 None 时，它会发生 panic。panic 如果没有被处理，它会导致整个程序崩溃。

在 Rust 中，正常的错误处理应该尽量使用 Result 类型。Panic 则是作为一种“fail fast”机制，处理那种万不得已的情况。

比如，上面例子中的`unwrap`方法，试图把`Option<i32>`转换为 i32 类型，当参数是 None 的时候，这个转换是没办法做到的，这种时候就只能使用 panic。所以，一般情况下，用户应该使用`unwrap_or`等不会制造 panic 的方法。
