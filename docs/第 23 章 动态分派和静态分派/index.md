# 第 23 章 动态分派和静态分派

Rust 可以同时支持“静态分派”（static dispatch）和“动态分派”（dynamic dispatch）。

所谓“静态分派”，是指具体调用哪个函数，在编译阶段就确定下来了。Rust 中的“静态分派”靠泛型以及 impl trait 来完成。对于不同的泛型类型参数，编译器会生成不同版本的函数，在编译阶段就确定好了应该调用哪个函数。

所谓“动态分派”，是指具体调用哪个函数，在执行阶段才能确定。Rust 中的“动态分派”靠 Trait Object 来完成。`dyn Trait` 的具体类型信息被擦除，通常通过 `&dyn Trait` 或 `Box<dyn Trait>` 使用；指向的具体类型不同，调用的方法也就不同。

| 写法 | 如何确定调用目标 | 适用场景 |
| --- | --- | --- |
| `T: Bird` 或参数位 `impl Bird` | 通常按具体类型单态化，在编译期确定 | 类型已知，保留静态类型信息 |
| `&dyn Bird` 或 `Box<dyn Bird>` | 运行时通过对象关联的虚表调用 | 隐藏具体类型，或在集合中混放不同类型 |

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

首先，大家需要牢牢记住的一件事情是，trait 是约束，不是一个类型；`dyn Bird` 才是动态大小类型（DST）。这意味着下面这样的代码是无法编译通过的：

---

预期 E0782：在类型位置不能直接写 trait 名称 `Bird`。

```rust,compile_fail,no_run
trait Bird {}
fn test(_arg: Bird) {}
```

---

若按值传递，参数和返回值需要编译期可知的大小。可以传某个满足 `Bird` 的具体类型，也可以用 `&dyn Bird` 等有固定大小的指针。

这种时候我们有两种选择。一种是利用泛型：

---

```rust
# trait Bird { fn fly(&self); }
fn test<T: Bird>(arg: T) {
    arg.fly();
}
```

---

这样，test 函数的参数既可以是 Duck 类型，也可以是 Swan 类型。实际上，编译器会根据实际调用参数的类型不同，直接生成不同的函数版本，类似 C++中的 template：

---

```text
// 伪代码示意：单态化后的两个实例
fn test_Duck(arg: Duck) {
    arg.fly();
}
fn test_Swan(arg: Swan) {
    arg.fly();
}
```

---

所以，通过泛型函数实现的“多态”，是在编译阶段就已经确定好了调用哪个版本的函数，因此被称为“静态分派”。除了泛型之外，Rust 还提供了一种 impl Trait 语法，也能实现静态分派。

我们还可以通过指针使用 `dyn Bird`。`dyn Bird` 的大小在编译时未知，但指向它的指针大小已知，可以作为参数或返回值。

---

```rust
# trait Bird { fn fly(&self); }
// 根据不同需求，可以用不同的指针类型，如 Box/&/&mut 等
fn test(arg: Box<dyn Bird>) {
    arg.fly();
}
```

---

在这种方式下，test 函数的参数既可以是`Box<Duck>`类型，也可以是`Box<Swan>`类型，一样实现了“多态”。但在参数类型这里已经将“具体类型”信息抹掉了，我们只知道它可以调用 Bird trait 的方法。而具体调用的是哪个版本的方法，实际上是由这个指针的值来决定的。这就是“动态分派”。

```rust
trait Bird {
    fn sound(&self) -> &'static str;
}

struct Duck;
struct Swan;

impl Bird for Duck {
    fn sound(&self) -> &'static str { "鸭" }
}

impl Bird for Swan {
    fn sound(&self) -> &'static str { "天鹅" }
}

fn static_sound(bird: &impl Bird) -> &'static str {
    bird.sound()
}

fn dynamic_sound(bird: &dyn Bird) -> &'static str {
    bird.sound()
}

fn main() {
    assert_eq!(static_sound(&Duck), "鸭");
    let birds: [&dyn Bird; 2] = [&Duck, &Swan];
    assert_eq!(birds.map(dynamic_sound), ["鸭", "天鹅"]);
}
```
