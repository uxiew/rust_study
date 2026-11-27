---
layout: home
hero:
  name: 深入 Rust
  text: 从入门到系统编程
  tagline: 按章节学习所有权、类型系统与并发。在可运行的示例中验证概念，用图解理解代码背后的机制。
  image:
    src: /rust-hero.svg
    alt: 从主函数输出你好，Rust 的终端示意图
  actions:
    - theme: brand
      text: 开始学习
      link: /前言
    - theme: alt
      text: 浏览学习路线
      link: "#学习路线"
features:
  - title: 从小例子入手
    details: 修改并运行有运行按钮的 Rust 示例，观察编译结果如何变化。
  - title: 看懂编译器的约束
    details: 用所有权、借用和生命周期理解 Rust 如何在编译时保证内存安全。
  - title: 把知识用到项目
    details: 串起 Cargo、错误处理、测试与并发，逐步构建完整的 Rust 程序。
---

## 学习路线

初学者可以从第一部分开始；已有经验也可以直接跳到关注的主题。

<div class="learning-path">

| 部分 | 学习入口 | 你将学到 |
| :--- | :--- | :--- |
| 01 基础知识 | [步入 Rust 的世界](./第%201%20章%20步入Rust的世界（第一部分%20基础知识）/index.md) | 工具链、变量、函数、Trait、模式匹配与宏 |
| 02 内存安全 | [内存管理基础](./第%2010%20章%20内存管理基础（第二部分%20内存安全）/index.md) | 所有权、借用和生命周期，以及何时需要 `unsafe` |
| 03 高级抽象 | [泛型](./第%2021%20章%20泛型（第三部分%20高级抽象）/index.md) | 关联类型、闭包、迭代器和异步编程 |
| 04 线程安全 | [线程安全](./第%2027%20章%20线程安全（第四部分%20线程安全）/index.md) | 线程、`Send` / `Sync`、共享状态与消息传递 |
| 05 实用设施 | [项目和模块](./第%2032%20章%20项目和模块（第五部分%20实用设施）/index.md) | Cargo、模块、错误处理、FFI 和测试 |

</div>

查阅 [备忘录](./notes/index.md) 或 [Rust 官方文档](https://doc.rust-lang.org/)。也可以在 [Rust 学习知识库](https://ima.qq.com/wiki/?shareId=57343fb8dd485b42520adf91183128d0bdb04c7a731f202507df44d360aec9fe) 提问；请以编译器和官方文档为准。
