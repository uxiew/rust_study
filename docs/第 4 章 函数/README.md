## 第 4 章 函数

### 4.1 简介   

Rust 的函数使用关键字 fn 开头。函数可以有一系列的输入参数，还有一个返回类型。函数体包含一系列的语句（或者表达式）。函数返回可以使用 return 语句，也可以使用表达式。Rust 编写的可执行程序的入口就是 fn main()函数。以下是一个函数的示例：

---

```rust
fn add1(t : (i32,i32)) -> i32 {
    t.0 + t.1
}
```

---

这个函数有一个输入参数，其类型是 tuple（i32，i32）。它有一个返回值，返回类型是 i32。函数的参数列表与 let 语句一样，也是一个“模式解构”。模式结构的详细解释请参考第 7 章。上述函数也可以写成下面这样：

---

```rust
fn add2((x,y) : (i32,i32)) -> i32 {
    x + y
}
```

---

函数体内部是一个表达式，这个表达式的值就是函数的返回值。也可以写 return x+y；这样的语句作为返回值，效果是一样的。

函数也可以不写返回类型，在这种情况下，编译器会认为返回类型是 unit()。此处和表达式的规定是一致的。

函数可以当成头等公民（first class value）被复制到一个值中，这个值可以像函数一样被调用。示例如下：

---

```rust
fn main() {
    let p = (1, 3);

    // func 是一个局部变量
    let func = add2;
    // func 可以被当成普通函数一样被调用
    println!("evaluation output {}", func(p));
}
```

---

在 Rust 中，每一个函数都具有自己单独的类型，但是这个类型可以自动转换到 fn 类型。示例如下：

---

```rust
fn main() {
    // 先让 func 指向 add1
    let mut func = add1;
    // 再重新赋值，让 func 指向 add2
    func = add2;
}
```

---

编译，会出现编译错误，如下：

---

```rust
error[E0308]: mismatched types
  --> test.rs:11:12
   |
11 |     func = add2;
   |            ^^^^ expected fn item, found a different fn item
   |
   = note: expected type `fn((i32, i32)) -> i32 {add1}`
              found type `fn((i32, i32)) -> i32 {add2}`
```

---

虽然 add1 和 add2 有同样的参数类型和同样的返回值类型，但它们是不同类型，所以这里报错了。修复方案是让 func 的类型为通用的 fn 类型即可：

---

```rust
// 写法一，用 as 类型转换
let mut func = add1 as fn((i32,i32))->i32;
// 写法二，用显式类型标记
let mut func : fn((i32,i32))->i32 = add1;
```

---

以上两种写法都能修复上面的编译错误。但是，我们不能在参数、返回值类型不同的情况下作类型转换，比如：

---

```rust
fn add3(x: i32, y: i32) -> i32 {
    x + y
}

fn main() {
    let mut func : fn((i32,i32))->i32 = add1;
    func = add2;
    func = add3;
}
```

---

这里再加了一个 add3 函数，它接受两个 i32 参数，这就跟 add1 和 add2 有了本质区别。add1 和 add2 是一个参数，类型是 tuple 包含两个 i32 成员，而 add3 是两个 i32 参数。三者完全不一样，它们之间是无法进行类型转换的。

另外需要提示的就是，Rust 的函数体内也允许定义其他 item，包括静态变量、常量、函数、trait、类型、模块等。比如：

---

```rust
fn test_inner() {
    static INNER_STATIC: i64 = 42;

    // 函数内部定义的函数
    fn internal_incr(x: i64) -> i64 {
        x + 1
    }

    struct InnerTemp(i64);

    impl InnerTemp {
        fn incr(&mut self) {
            self.0 = internal_incr(self.0);
        }
    }

    // 函数体，执行语句
    let mut t = InnerTemp(INNER_STATIC);
    t.incr();
    println!("{}", t.0);
}
```

---

当你需要一些 item 仅在此函数内有用的时候，可以把它们直接定义到函数体内，以避免污染外部的命名空间。
