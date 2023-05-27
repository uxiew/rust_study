## 第 22 章 闭包

闭包（closure）是一种匿名函数，具有“捕获”外部变量的能力。闭包有时候也被称作 lambda 表达式。它有两个特点：（1）可以像函数一样被调用；（2）可以捕获当前环境中的变量。Rust 中的闭包，基本语法如下：

---

```rust
fn main() {

    let add = | a :i32, b:i32 | -> i32 { return a + b; } ;

    let x = add(1,2);
    println!("result is {}", x);
}
```

---

可以看到，以上闭包有两个参数，以两个 | 包围。执行语句包含在{}中。闭包的参数和返回值类型的指定与普通函数的语法相同。闭包的参数和返回值类型都是可以省略的，因此以上闭包可省略为：

---

```rust
let add = |a , b| {return a + b;};
```

---

和普通函数一样，返回值也可以使用语句块表达式完成，与 return 语句的作用一样。因此以上闭包可省略为：

---

```rust
let add = |a, b| { a + b };
```

---

更进一步，如果闭包的语句体只包含一条语句，那么外层的大括号也可以省略；如果有多条语句则不能省略。因此以上闭包可以省略为：

---

```rust
let add = |a, b| a + b;
```

---

closure 看起来和普通函数很相似，但实际上它们有许多区别。最主要的区别是，closure 可以“捕获”外部环境变量，而 fn 不可以。示例如下：

---

```rust
fn main() {
    let x = 1_i32;

    fn inner_add() -> i32 {
        x + 1
    }

    let x2 = inner_add();
    println!("result is {}", x2);
}
```

---

编译，出现编译错误：

---

```rust
error: can't capture dynamic environment in a fn item; use the || { ... } closure form instead [E0434]
```

---

由此可见，函数 inner\_add 是不能访问变量 x 的。那么根据编译器的提示，我们改为闭包试试：

---

```rust
fn main() {
    let x = 1_i32;

    let inner_add = || x + 1;

    let x2 = inner_add();
    println!("result is {}", x2);
}
```

---

编译通过。

对于不需要捕获环境变量的场景，普通函数 fn 和 closure 是可以互换使用的：

---

```rust
fn main() {
    let option = Some(2);
    let new: Option<i32> = option.map(multiple2);
    println!("{:?}", new);

    fn multiple2(val: i32) -> i32{ val*2 }
}
```

---

在上面示例中，map 方法的签名是：

---

```rust
fn map<U, F>(self, f: F) -> Option<U>
    where F: FnOnce(T) -> U
```

---

这里的 FnOnce 在下文中会详细解释。它在此处的含义是：f 是一个闭包参数，类型为 FnOnce（T）->U，根据上下文类型推导，实际上是 FnOnce（i32）->i32。我们定义了一个普通函数，类型为 fn（i32）->i32，也可以用于该参数中。如果我们用闭包来写，下面这样写也可以：

---

```rust
let new: Option<i32> = option.map(|val| val * 2);
```

---

普通函数和闭包之间最大的区别是，普通函数不可以捕获环境变量。在上面的例子中，虽然我们的 multiple2 函数定义在 main 函数体内，但是它无权访问 main 函数内的局部变量。其次，fn 定义和调用的位置并不重要，Rust 中是不需要前向声明的。只要函数定义在当前范围内是可以观察到的，就可以直接调用，不管在源码内的相对位置如何。相对而言，closure 更像是一个的变量，它具有和变量同样的“生命周期”。
