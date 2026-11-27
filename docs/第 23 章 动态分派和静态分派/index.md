# 第 23 章 动态分派和静态分派

Rust 支持静态分派和动态分派。两者都可以用同一个 trait 接收不同的具体类型，区别在于何时确定调用哪个实现。

| 写法 | 如何确定调用目标 | 适用场景 |
| --- | --- | --- |
| `T: Bird` 或参数位 `impl Bird` | 通常按具体类型单态化，在编译期确定 | 类型已知，保留静态类型信息 |
| `&dyn Bird` 或 `Box<dyn Bird>` | 运行时通过对象关联的虚表调用 | 隐藏具体类型，或在集合中混放不同类型 |

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

`Bird` 是 trait，不是类型；`dyn Bird` 才是动态大小类型。上例借用 trait object，不需要堆分配。若需要取得所有权，可以用 `Box<dyn Bird>`。
