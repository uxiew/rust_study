# marker trait 与 auto trait

> 原文：https://users.rust-lang.org/t/understanding-the-marker-traits/75625

在某种意义上，标记特征（marker trait）只是一个内部没有任何项的 trait。即使没有任何特殊的编译器支持，这有时也是有用的（例如 [sealed traits](https://rust-lang.github.io/api-guidelines/future-proofing.html)）。

从另一种意义上说，有一个不稳定的 `#[marker]` 属性，您可以将其放在 marker trait 上，以便选择加入 RFC 12684 的重叠实现（也是不稳定的）。

还有一种意思是 `std::marker` 中的东西。
其中大多数是标记特征，许多也是 [auto traits](https://github.com/rust-lang/rust/issues/13231)（另一个不稳定的特性），而且几乎所有这些 trait 都有特殊的编译器行为。

`Send`、 `Sync` 和 `Unpin` 都是自动特征（auto trait），这意味着如果某个结构包含了全部实现该 trait 的字段，则该结构也会自动实现该 trait。这就是检查的范围。
但是，您可以通过实现 `!Send`、 `!Sync` 或 `!Unpin` 来选择退出该 trait（opt out of the trait）。
您还可以通过将 `PhantomPinned` 放入您的结构中来选择退出 `Unpin`（因为它是 `!Unpin` ）。
auto traits 的概念可能有一天会变得不那么特别（即稳定）。另一方面，我看到一些人对实现这种稳定持怀疑态度；时间会证明一切（time will tell）。

`Copy` 不是自动特征，但是实现 `Copy` 的能力是类似的 —— 你的所有字段也必也是具有 `Copy` 特征的。
此外，您不能为实现 `Drop` 的类型实现 `Copy` 。它具有额外的特殊（语言级别）行为，因为 `Copy` 值的移动不是破坏性的（破坏性）（您仍然可以使用原始值）。

`Sized` 是编译器通过 trait 公开的类型的一个固有属性（intrinsic property）。您声明泛型参数的位置基本上都有一个隐式的 `Sized` 约束。
但是可以通过 `?Sized` 约束来移除该约束。 `Sized` 也用于表示“非动态特征”（non-dyn Trait），
尽管在我看来这是一种 hack，独特的编译器支持的标记特性将是更好的解决方案。

我相信所有其他实验标记特征都是实现细节机制，以实现语言功能，比如缩小大小（例如，从数组到切片，或从基本类型到 `dyn Trait`），模式匹配（例如，不能依赖于 `Eq trait` 的实现）等。
有时检查文档仍然可以帮助解释语言行为（例如，为什么你不能将深度嵌套的类型强制转换为 `dyn Trait`）。

还有其他不在 `std::marker` 模块中的自动/标记特征，比如 [UnwindSafe](https://doc.rust-lang.org/stable/std/panic/trait.UnwindSafe.html) 。

还有其他非标记特征在语言中具有特殊作用，例如 Drop。

[`PhantomData<T>`](https://doc.rust-lang.org/std/marker/struct.PhantomData.html) 是一种标记类型（marker type），具有特殊的编译器行为，“就像它拥有一个 `T` ”一样。
它是一个标记，因为它的大小为零，不影响对齐（alignment），通过重要的标准特征，所以你仍然可以 `derive` 它们，等等。

其实，还是有点取决于你的意思。没有 `Send` 能力的运行时检查；trait 的实现（或不实现）是编译时的决定。

但是，如果标记特征是 `dyn` 安全的（如果一个标记特征有一个 supertrait 是`dyn`不安全的，那么它可能是 `dyn` 不安全的 —— 例如 `Copy`），则没有规则可以将其转换为 `dyn Trait`。
这可能是你在运行时与之交互的东西，例如向下转换时。

事实上， auto traits 在这里也很特别，因为你不能有 `dyn NonAutoOne + NonAutoTwo`，但你可以有 `dyn NonAuto + Send + Sync + Unpin + AnyNumberOfAutoTraits`。
`dyn Error` 与 `dyn Error + Send + Sync` 是不同的类型。

此外，由于标记特征还可以具有 supertrait 或其他约束，它仍然可以作为一个指标，来调用某些方法[调用某些方法](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=e5020a79a405f32792bec51031efa586)：

```rust
pub fn f<T: Copy>(t: T) -> T{
    t.clone()
}
```

*(我猜这就是“编译之外的重要”的部分含义)*

当你有一个复杂的约束，又不想进行太多的重复操作时，就会很有用：

```rust
pub trait DoesALot: This + That + Clone + Send + Deref {}
impl<T: This + That + Clone + Send + Deref> DoesALot for T {}
```

还需要提一下的事情是，虽然 `Send` 和 `Sync` 作为自动特征具有特殊行为，但实际的线程安全部分主要由库代码处理。特别是 `std::thread::spawn` 具有约束：

```rust
pub fn spawn<F, T>(f: F) -> JoinHandle<T>
where
    F: FnOnce() -> T,
    F: Send + 'static,
    T: Send + 'static,
```

F（发送到新线程的函数）和 T（从线程返回的值）的这些 `Send` 约束实际上阻止了您向新线程发送值。
通常，任何线程创建或线程间通信工具都会对其携带的值进行 `Send` 约束。


许多其他线程安全规则也被表示为 trait 实现。例如，`Send` 和 `Sync` 之间的基本关系是[一个 impl 本身](https://doc.rust-lang.org/src/core/marker.rs.html#51)：

```rust
unsafe impl<T: Sync + ?Sized> Send for &T {}
```

有时它可能是偷偷摸摸的；例如，在 `std::sync::mpsc` 中，你可以完美地为任何类型使用一个通道（channel），即使是非 `Send` 类型，但如果消息类型不是 `Send`，你就不能发送通道的末端，因此整个通道无法离开单个线程。

在所有这些情况下，编译器的特殊功能根本不是确保线程安全所必需的；编译器所做的是通过在可能的情况下对由 `Send` 或 `Sync` 部分组成的数据结构实现 `Send` 和 `Sync` 来创造便利。
如果 `Send` 和 `Sync` 不是 auto traits，那么语言基本上是一样的；但是你会花费更多的时间来为这些 traits 添加 `derives` 或 `impls`（并且偶尔会对忘记它们的库提交错误）。
