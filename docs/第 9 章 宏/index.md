# 第 9 章 宏

在 Rust 中，宏（Macro）是生成另一段代码的一段代码。宏根据输入生成代码，简化重复的模式，并使代码更加简洁。这也被称为元编程（meta programming）。宏在 Rust 中被广泛使用。

一些常见的 Rust 宏是`println!` 、 `vec!` 和 `panic!` 。

元编程对于减少我们需要编写和维护的代码量来说很有用，同时它也充当了函数的角色，但宏具备函数所没有的一些额外能力。
在函数的定义中必须声明其参数的类型和数量，而宏的参数数量是可变的，譬如我们可以传递一个参数调用 `println!("hello")` 或传递两个参数调用 `println!("hello {}", name)`。

宏会在编译器解释代码之前“展开”，譬如为某个类型实现 trait。
而函数则做不到，因为函数在运行时才会被调用，而 trait 需要在编译时就被实现。

虽然宏很强大，但过度依赖宏可能导致代码难以理解和维护。


## 参考文献

1. [**The Rust Programming Language (Rust Book) - Macros**](https://doc.rust-lang.org/book/ch19-06-macros.html)
2. [**Rust 宏小册**](https://zjp-cn.github.io/tlborm/)
3. [**Rust Reference - Macros**](https://doc.rust-lang.org/reference/macros.html)
