## 第 6 章 数组和字符串

### 6.1 数组

数组是一个容器，它在一块连续空间内存中，存储了一系列的同样类型的数据。数组中元素的占用空间大小必须是编译期确定的。数组本身所容纳的元素个数也必须是编译期确定的，执行阶段不可变。如果需要使用变长的容器，可以使用标准库中的 Vec/LinkedList 等。数组类型的表示方式为 \[T；n\]。其中 T 代表元素类型；n 代表元素个数；它必须是编译期常量整数；中间用分号隔开。下面看一个基本的示例：

---

```rust
fn main() {
    // 定长数组
    let xs: [i32; 5] = [1, 2, 3, 4, 5];

    // 所有的元素，如果初始化为同样的数据，可以使用如下语法
    let ys: [i32; 500] = [0; 500];
}
```

---

在 Rust 中，对于两个数组类型，只有元素类型和元素个数都完全相同，这两个数组才是同类型的。数组与指针之间不能隐式转换。同类型的数组之间可以互相赋值。示例如下：

---

```rust
fn main() {

    let mut xs: [i32; 5] = [1, 2, 3, 4, 5];
    let     ys: [i32; 5] = [6, 7, 8, 9, 10];
    xs = ys;
    println!("new array {:?}", xs);
}
```

---

把数组 xs 作为参数传给一个函数，这个数组并不会退化成一个指针。而是会将这个数组完整复制进这个函数。函数体内对数组的改动不会影响到外面的数组。

对数组内部元素的访问，可以使用中括号索引的方式。Rust 支持 usize 类型的索引的数组，索引从 0 开始计数。

---

```rust
fn main() {
    let v : [i32; 5] = [1,2,3,4,5];
    let x = v[0] + v[1];        // 把第一个元素和第二个元素的值相加
    println!("sum is {}", x);
}
```

---

#### 6.1.1 内置方法

与其他所有类型一样，Rust 的数组类型拥有一些内置方法，可以很方便地完成一些任务。比如，我们可以直接实现数组的比较操作，只要它包含的元素是可以比较的：

---

```rust
fn main() {
    let v1 = [1, 2, 3];
    let v2 = [1, 2, 4];
    println!("{:?}", v1 < v2 );
}
```

---

我们也可以对数组执行遍历操作，如：

---

```rust
fn main() {

    let v = [0_i32; 10];

    for i in &v {
        println!("{:?}", i);
    }
}
```

---

在目前的标准库中，数组本身没有实现 IntoIterator trait，但是数组切片是实现了的。所以我们可以直接在 for in 循环中使用数组切片，而不能直接使用数组本身。更详细的内容请参阅后文中关于迭代器的解释。

#### 6.1.2 多维数组

既然 \[T；n\] 是一个合法的类型，那么它的元素 T 当然也可以是数组类型，因此 \[\[T；m\]；n\] 类型自然也是合法类型。示例如下：

---

```rust
fn main() {
    let v : [[i32; 2]; 3] = [[0, 0], [0, 0], [0, 0]];

    for i in &v {
        println!("{:?}", i);
    }
}
```

---

#### 6.1.3 数组切片

对数组取借用 borrow 操作，可以生成一个“数组切片”（Slice）。数组切片对数组没有“所有权”，我们可以把数组切片看作专门用于指向数组的指针，是对数组的另外一个“视图”。比如，我们有一个数组 \[T；n\]，它的借用指针的类型就是&\[T；n\]。它可以通过编译器内部魔法转换为数组切片类型&\[T\]。数组切片实质上还是指针，它不过是在类型系统中丢弃了编译阶段定长数组类型的长度信息，而将此长度信息存储为运行期的值。示例如下：

---

```rust
fn main() {
    fn mut_array(a : &mut [i32]) {
        a[2] = 5;
    }

    println!("size of &[i32; 3] : {:?}", std::mem::size_of::<&[i32; 3]>());
    println!("size of &[i32]    : {:?}", std::mem::size_of::<&[i32]>());

    let mut v :  [i32; 3] = [1,2,3];
    {
        let s : &mut [i32; 3] = &mut v;
        mut_array(s);
    }
    println!("{:?}", v);
}
```

---

变量 v 是 \[i32；3\] 类型；变量 s 是&mut\[i32；3\] 类型，占用的空间大小与指针相同。它可以自动转换为&mut\[i32\] 数组切片类型传入函数 mut\_array，占用的空间大小等于两个指针的空间大小。通过这个指针，在函数内部，修改了外部的数组 v 的值。

#### 6.1.4 DST 和胖指针

从前面的示例中可以看到，数组切片是指向一个数组的指针，而它比指针又多了一点东西——它不止包含有一个指向数组的指针，切片本身还含带长度信息。

Slice 与普通的指针是不同的，它有一个非常形象的名字：胖指针（fat pointer）。与这个概念相对应的概念是“动态大小类型”（Dynamic Sized Type，DST）。所谓的 DST 指的是编译阶段无法确定占用空间大小的类型。为了安全性，指向 DST 的指针一般是胖指针。

比如：对于不定长数组类型 \[T\]，有对应的胖指针&\[T\] 类型；对于不定长字符串 str 类型，有对应的胖指针&str 类型；以及在后文中会出现的 Trait Object；等等。

由于不定长数组类型 \[T\] 在编译阶段是无法判断该类型占用空间的大小的，目前我们不能在栈上声明一个不定长大小数组的变量实例，也不能用它作为函数的参数、返回值。但是，指向不定长数组的胖指针的大小是确定的，&\[T\] 类型可以用做变量实例、函数参数、返回值。

通过前面的示例我们可以看到，&\[T\] 类型占用了两个指针大小的内存空间。我们可以利用 unsafe 代码把这个胖指针内部的数据打印出来看看：

---

```rust
fn raw_slice(arr: &[i32]) {
    unsafe {
        let (val1, val2) : (usize, usize) = std::mem::transmute(arr);
        println!("Value in raw pointer:");
        println!("value1: {:x}", val1);
        println!("value2: {:x}", val2);
    }
}

fn main() {
    let arr : [i32; 5] = [1, 2, 3, 4, 5];
    let address : &[i32; 5] = &arr;
    println!("Address of arr: {:p}", address);

    raw_slice(address as &[i32]);
}
```

---

在这个示例中，我们 arr 是长度为 5 的 i32 类型的数组。address 是一个普通的指向 arr 的借用指针。我们可以用 as 关键字把 address 转换为一个胖指针&\[i32\]，并传递给 raw\_slice 函数。在 raw\_slice 函数内部，我们利用了 unsafe 的 transmute 函数。我们可以把它看作一个强制类型转换，类似 reinterpret\_cast，通过这个函数，我们把胖指针的内部数据转换成了两个 usize 大小的整数来看待。编译，执行，结果为：

---

```rust
$ ./test
Address of arr: 0xe2e236f6cc
Value in raw pointer:
value1: e2e236f6cc
value2: 5
```

---

由此可见，胖指针内部的数据既包含了指向源数组的地址，又包含了该切片的长度。

对于 DST 类型，Rust 有如下限制：

·只能通过指针来间接创建和操作 DST 类型，&\[T\]Box<\[T\]>可以，\[T\] 不可以；

·局部变量和函数参数的类型不能是 DST 类型，因为局部变量和函数参数必须在编译阶段知道它的大小因为目前 unsized rvalue 功能还没有实现；

·enum 中不能包含 DST 类型，struct 中只有最后一个元素可以是 DST，其他地方不行，如果包含有 DST 类型，那么这个结构体也就成了 DST 类型。

Rust 设计出 DST 类型，使得类型暂时系统更完善，也有助于消除一些 C/C++中容易出现的 bug。这一设计的好处有：

·首先，DST 类型虽然有一些限制条件，但我们依然可以把它当成合法的类型看待，比如，可以为这样的类型实现 trait、添加方法、用在泛型参数中等；

·胖指针的设计，避免了数组类型作为参数传递时自动退化为裸指针类型，丢失了长度信息的问题，保证了类型安全；

·这一设计依然保持了与“所有权”“生命周期”等概念相容的特点。

数组切片不只是提供了“数组到指针”的安全转换，配合上 Range 功能，它还能提供数组的局部切片功能。

#### 6.1.5 Range

Rust 中的 Range 代表一个“区间”，一个“范围”，它有内置的语法支持，就是两个小数点..。示例如下：

---

```rust
fn main() {
    let r = 1..10;   // r 是一个 Range<i32>,中间是两个点，代表 [1,10) 这个区间
    for i in r {
        print!("{:?}\t", i);
    }
}
```

---

编译，执行，结果为：

---

```rust
$ ./test
1       2       3       4       5       6       7       8       9
```

---

需要注意的是，在 begin..end 这个语法中，前面是闭区间，后面是开区间。这个语法实际上生成的是一个 std::ops::Range<\_>类型的变量。该类型在标准库中的定义如下：

---

```rust
pub struct Range<Idx> {
    /// The lower bound of the range (inclusive).
    pub start: Idx,
    /// The upper bound of the range (exclusive).
    pub end: Idx,
}
```

---

所以，上面那段示例代码实质上等同于下面这段代码：

---

```rust
use std::ops::Range;

fn main() {
    let r = Range {start: 1, end: 10};   // r 是一个 Range<i32>
    for i in r {
            print!("{:?}\t", i);
    }
}
```

---

两个小数点的语法仅仅是一个“语法糖”而已，用它构造出来的变量是 Range 类型。

这个类型本身实现了 Iterator trait，因此它可以直接应用到循环语句中。Range 具有迭代器的全部功能，因此它能调用迭代器的成员方法。比如，我们要实现从 100 递减到 10，中间间隔为 10 的序列，可以这么做（具体语法请参考后文中的迭代器、闭包等章节）：

---

```rust
fn main() {
    use std::iter::Iterator;
// 先用 rev 方法把这个区间反过来，然后用 map 方法把每个元素乘以 10
    let r = (1i32..11).rev().map(|i| i * 10);

    for i in r {
        print!("{:?}\t", i);
    }
}
```

---

执行结果为：

---

```rust
$ ./test
100     90      80      70      60      50      40      30      20      10
```

---

在 Rust 中，还有其他的几种 Range，包括

·std::ops::RangeFrom 代表只有起始没有结束的范围，语法为 start..，含义是 \[start，+∞）；

·std::ops::RangeTo 代表没有起始只有结束的范围，语法为..end，对有符号数的含义是（-∞，end），对无符号数的含义是 \[0，end）；

·std::ops::RangeFull 代表没有上下限制的范围，语法为..，对有符号数的含义是（-∞，+∞），对无符号数的含义是 \[0，+∞）。

数组和 Range 之间最常用的配合就是使用 Range 进行索引操作。示例如下：

---

```rust
fn print_slice(arr: &[i32]) {
    println!("Length: {}", arr.len());

    for item in arr {
        print!("{}\t", item);
    }
    println!("");
}

fn main() {
    let arr : [i32; 5] = [1, 2, 3, 4, 5];
    print_slice(&arr[..]);    // full range

    let slice = &arr[2..];    // RangeFrom
    print_slice(slice);

    let slice2 = &slice[..2]; // RangeTo
    print_slice(slice2);
}
```

---

编译，执行，结果为：

---

```rust
Length: 5
1       2       3       4       5
Length: 3
3       4       5
Length: 2
3       4
```

---

第一次打印，内容为整个 arr 的所有区间。第二次打印，是从 arr 的 index 为 2 的元素开始算起，一直到最后。注意数组是从 index 为 0 开始计算的。第三次打印，是从 slice 的头部开始，长度为 2，因此只打印出了 3、4 两个数字。

在许多时候，使用数组的一部分切片作为被操作对象在函数间传递，既保证了效率（避免直接复制大数组），又能保证将所需要执行的操作限制在一个可控制的范围内（有长度信息，有越界检查），还能控制其读写权限，非常有用。

虽然左闭右开区间是最常用的写法，然而，在有些情况下，这种语法不足以处理边界问题。比如，我们希望产生一个 i32 类型的从 0 到 i32::MAX 的范围，就无法表示。因为按语法，我们应该写 0..（i32::MAX+1），然而（i32::MAX+1）已经溢出了。所以，Rust 还提供了一种左闭右闭区间的语法，它使用这种语法来表示..=。

闭区间对应的标准库中的类型是：

·std::ops::RangeInclusive，语法为 start..=end，含义是 \[start，end\]。

·std::ops::RangeToInclusive，语法为..=end，对有符号数的含义是（-∞，end\]，对无符号数的含义是 \[0，end\]

#### 6.1.6 边界检查

在前面的示例中，我们的“索引”都是一个合法的值，没有超过数组的长度。如果我们给“索引”一个非法的值会怎样呢：

---

```rust
fn main() {
    let v = [10i32, 20, 30, 40, 50];
    let index : usize =std :: env :: args(). nth(1). map(|x|x.parse().unwrap_or(0)).unwrap_or(0);
    println!("{:?}", v[index]);
}
```

---

编译通过，执行 thread'main'panicked at'index out of bounds：the len is 5 but the index is 10'。可以看出，如果用/test 10，则会出现数组越界，Rust 目前还无法任意索引执行编译阶段边界检查，但是在运行阶段执行了边界检查。下面我们分析一下边界检查背后的故事。

在 Rust 中，“索引”操作也是一个通用的运算符，是可以自行扩展的。如果希望某个类型可以执行“索引”读操作，就需要该类型实现 std::ops::Index trait，如果希望某个类型可以执行“索引”写操作，就需要该类型实现 std::ops::IndexMut trait。

对于数组类型，如果使用 usize 作为索引类型执行读取操作，实际执行的是标准库中的以下代码：

---

```rust
impl<T> ops::Index<usize> for [T] {
    type Output = T;

    fn index(&self, index: usize) -> &T {
        assert!(index < self.len());
        unsafe { self.get_unchecked(index) }
    }
}
```

---

代码中使用的 assert！宏定义在`libcore/macros.rs`中，源码是这样的：

---

```rust
macro_rules! assert {
    ($cond:expr) => (
        if !$cond {
            panic!(concat!("assertion failed: ", stringify!($cond)))
        }
    );
    ($cond:expr, $($arg:tt)+) => (
        if !$cond {
            panic!($($arg)+)
        }
    );
}
```

---

也就是说，如果 index 超过了数组的真实长度范围，会执行 panic！操作，导致线程 abort。使用 Range 等类型做 Index 操作的执行流程与此类似。

为了防止索引操作导致程序崩溃，如果我们不确定使用的“索引”是否合法，应该使用`get()`方法调用来获取数组中的元素，这个方法不会引起 panic！，它的返回类型是`Option<T>`，示例如下：

---

```rust
fn main() {
    let v = [10i32, 20, 30, 40, 50];
    let first = v.get(0);
    let tenth = v.get(10);
    println!("{:?} {:?}", first, tenth);
}
```

---

输出结果为：“Some（10）None”。

Rust 宣称的优点是“无 GC 的内存安全”，那么数组越界会直接导致程序崩溃这件事情是否意味着 Rust 不够安全呢？不能这么理解。Rust 保证的“内存安全”，并非意味着“永不崩溃”。Rust 中关于数组越界的行为，定义得非常清晰。相比于 C/C++，Rust 消除的是“未定义行为”（Undefined Behaviour）。

对于明显的数组越界行为，在 Rust 中可以通过 lint 检查来发现。大家可以参考“clippy”这个项目，它可以检查出这种明显的常量索引越界的现象。然而，总体来说，在 Rust 里面，靠编译阶段静态检查是无法消除数组越界的行为的。

一般情况下，Rust 不鼓励大量使用“索引”操作。正常的“索引”操作都会执行一次“边界检查”。从执行效率上来说，Rust 比 C/C++的数组索引效率低一点，因为 C/C++的索引操作是不执行任何安全性检查的，它们对应的 Rust 代码相当于调用 get\_unchecked()函数。在 Rust 中，更加地道的做法是尽量使用“迭代器”方法。“迭代器”非常重要，本书将在第 24 章专门详细分析，下面是使用迭代器操作数组的一些简单示例：

---

```rust
fn main() {
    use std::iter::Iterator;

    let v = &[10i32, 20, 30, 40, 50];

    // 如果我们同时需要 index 和内部元素的值，调用 enumerate() 方法
    for (index, value) in v.iter().enumerate() {
        println!("{} {}", index, value);
    }

    // filter 方法可以执行过滤，nth 函数可以获取第 n 个元素
    let item = v.iter().filter(|&x| *x % 2 == 0).nth(2);
    println!("{:?}", item);
}
```

---

Iterator 还有许多有用的方法，合理地组合使用它们，能使程序表达能力强，可读性好，安全高效，可以满足我们绝大多数的需求。
