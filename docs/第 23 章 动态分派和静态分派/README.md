## 第 23 章 动态分派和静态分派

Rust 可以同时支持“静态分派”（static dispatch）和“动态分派”（dynamic dispatch）。

所谓“静态分派”，是指具体调用哪个函数，在编译阶段就确定下来了。Rust 中的“静态分派”靠泛型以及 impl trait 来完成。对于不同的泛型类型参数，编译器会生成不同版本的函数，在编译阶段就确定好了应该调用哪个函数。

所谓“动态分派”，是指具体调用哪个函数，在执行阶段才能确定。Rust 中的“动态分派”靠 Trait Object 来完成。Trait Object 本质上是指针，它可以指向不同的类型；指向的具体类型不同，调用的方法也就不同。

我们用一个示例来说明。假设我们有一个 trait Bird，有另外两个类型都实现了这个 trait，我们要设计一个函数，既可以接受`Duck`作为参数，也可以接受`Swan`作为参数。

---

```rust
trait Bird {
    fn fly(&self);
}

struct Duck;
struct Swan;

impl Bird for Duck {
    fn fly(&self) { println!("duck duck"); }
}

impl Bird for Swan {
    fn fly(&self) { println!("swan swan");}
}
```

---

首先，大家需要牢牢记住的一件事情是，trait 是一种 DST 类型，它的大小在编译阶段是不固定的。这意味着下面这样的代码是无法编译通过的：

---

```rust
fn test(arg: Bird) {}
fn test() -> Bird  {}
```

---

因为 Bird 是一个 trait，而不是具体类型，它的 size 无法在编译阶段确定，所以编译器是不允许直接使用 trait 作为参数类型和返回类型的。这也是 trait 跟许多语言中的“interface”的一个区别。

这种时候我们有两种选择。一种是利用泛型：

---

```rust
fn test<T: Bird>(arg: T) {
    arg.fly();
}
```

---

这样，test 函数的参数既可以是 Duck 类型，也可以是 Swan 类型。实际上，编译器会根据实际调用参数的类型不同，直接生成不同的函数版本，类似 C++中的 template：

---

```rust
// 伪代码示意
fn test_Duck(arg: Duck) {
    arg.fly();
}
fn test_Swan(arg: Swan) {
    arg.fly();
}
```

---

所以，通过泛型函数实现的“多态”，是在编译阶段就已经确定好了调用哪个版本的函数，因此被称为“静态分派”。除了泛型之外，Rust 还提供了一种 impl Trait 语法，也能实现静态分派。

我们还有另外一种办法来实现“多态”，那就是通过指针。虽然 trait 是 DST 类型，但是指向 trait 的指针不是 DST。如果我们把 trait 隐藏到指针的后面，那它就是一个 trait object，而它是可以作为参数和返回类型的。

---

```rust
// 根据不同需求，可以用不同的指针类型，如 Box/&/&mut 等
fn test(arg: Box<dyn Bird>) {
    arg.fly();
}
```

---

在这种方式下，test 函数的参数既可以是`Box<Duck>`类型，也可以是`Box<Swan>`类型，一样实现了“多态”。但在参数类型这里已经将“具体类型”信息抹掉了，我们只知道它可以调用 Bird trait 的方法。而具体调用的是哪个版本的方法，实际上是由这个指针的值来决定的。这就是“动态分派”。
