# Dive Into Rust!

<script setup>
import { ref } from 'vue'
import { REPO_URL } from '@vp/const'
import { gHLink2JSON } from '@vp/utils'

const repo = ref(gHLink2JSON(REPO_URL))
</script>

> 项目地址：<a :href=repo.url target="_blank">{{repo.label}}</a>
>
> 随着作者的学习，持续更新中...
>
> 如果你对 Rust 有疑问，可以到我的 [Rust 知识库](https://ima.qq.com/wiki/?shareId=57343fb8dd485b42520adf91183128d0bdb04c7a731f202507df44d360aec9fe) 提问，与 AI 一起学习。
> <img src="/rust-ima.png" alt="rust 知识库" width="200" >

**Rust 是一种低级静态类型的多范式编程语言，专注于安全性和性能**。

- **低级编程语言**允许对机器代码进行精确的手动控制，这在微控制器或 FPGA 等硬件编码中很有价值。例如，在高级语言中，指令会自动编译为代码 —— 您无法修改低级细节。

- 作为一种静态类型语言，Rust 使用特定的数据类型进行操作。程序员必须为 Rust 定义所有变量才能知道如何使用该数据。否则无法完成编译。

- Rust 合并了许多来自 C 和 C++ 语言的关键字和命令。所以对于熟悉 C 编程范式的程序员来说更容易。然而，它具有独特的方法，需要一种新的思维方法。

自 1979 年以来，C 一直是编写内核的主要语言。每个人都已经习惯了它可预测的性能和直截了当的语法。然而，内存管理的持续问题仍然需要解决。

## Rust 设计哲学

1. 内存安全
   - 类型安全
   - 所有权系统
   - 借用和生命周期
2. 零成本抽象
3. 实用性

## Rust 语言架构

1. 混合编程范式：面向对象 + 函数式
2. 语义：所有权 + MOVE + COPY + 借用 + 生命周期 + DROP
3. 类型系统：泛型 + Trait + 一切皆类型 + 多态 + 类型推断
4. 安全内存管理 + 栈 + RAII + 堆

## Rust 代码如何执行

Rust 代码 -> AST 抽象语法树 ->
HIR(High-level IR) -> MIR(Middle IR) -> LLVM IR ->
LLVM -> Machine Code

未来的互联网：安全 + 高性能

## Rust 语言的基本构成

1. 语言规范

   1. Rust 语言参考（The Rust Reference
   2. RFC 文档

2. 编译器
   rustc 是用 Rust 语言开发的（从 Rust 实现自举之后）

3. 核心库

   1. Rust 的语法由核心库和标准库共同提供，其中 Rust 核心库是标准库的基础
   2. 核心库定义的是 Rust 的核心，不依赖于操作系统和网络相关的库，甚至不知道堆分配，也不提供并发和 I/O
   3. 做嵌入式开发时核心库是必须的

4. 标准库
   标准库提供应用程序开发所需要的基础和跨平台支持，包含内容如下：

   - 与核心库一样的基本 trait、原始数据类型、功能数据类型和常用宏等，以及与核心库几乎完全一致的 API
   - 并发、I/O 和运行时，例如线程模块、通道、Sync trait 等并发模块，以及文件、TCP、UDP、pipe、socket 等常见 I/O
   - 平台抽象，包括程序参数、环境变量、目录导航
   - 底层操作接口，如`std::mem`，`std::ptr`，`std::intrinsics`等，操作内存、指针、调用编译器函数
   - 可选和错误处理类型 Option, Result，以及 iterator 等

5. 包管理器（cargo）
