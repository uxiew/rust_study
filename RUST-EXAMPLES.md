# Rust 代码块编译清单

工具链：`rustc 1.100.0 (0ef1bc386 2026-11-09)`；默认 Edition 2024。
扫描 219 篇 Markdown，提取 1022 个 Rust 代码块。
通过 504 个、失败 517 个、预期失败 0 个、意外通过 0 个、Nightly 配置 1 个、显式忽略 0 个。

先独立编译；没有 `fn main` 的片段先当库编译，失败后再尝试放进 `main`。仅检查编译，不链接、不运行、不安装依赖。
「失败」含有教学上刻意报错但未标注的例子、缺少上下文的片段、依赖其他 crate 的示例和真正需要更新的代码，不能直接视为缺陷。

## 第 1 章 步入Rust的世界（第一部分 基础知识）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [1.3 Hello World.md:21](docs/%E7%AC%AC%201%20%E7%AB%A0%20%E6%AD%A5%E5%85%A5Rust%E7%9A%84%E4%B8%96%E7%95%8C%EF%BC%88%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86%20%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%EF%BC%89/1.3%20Hello%20World.md#L21) | 失败 | expected one of `!` or `::`, found `hello_world` |
| [1.3 Hello World.md:41](docs/%E7%AC%AC%201%20%E7%AB%A0%20%E6%AD%A5%E5%85%A5Rust%E7%9A%84%E4%B8%96%E7%95%8C%EF%BC%88%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86%20%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%EF%BC%89/1.3%20Hello%20World.md#L41) | 失败 | unexpected token: `...` |

## 第 2 章 变量和类型

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [2.1 变量声明.md:30](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L30) | 失败 | E0384 cannot assign twice to immutable variable `x` |
| [2.1 变量声明.md:52](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L52) | 失败 | expected item, found keyword `let` |
| [2.1 变量声明.md:63](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L63) | 失败 | E0381 used binding `x` isn't initialized |
| [2.1 变量声明.md:100](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L100) | 失败 | in expressions, `_` can only be used on the left-hand side of an assignment |
| [2.1 变量声明.md:265](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L265) | 失败 | static_mut_refs creating a shared reference to mutable static |
| [2.1 变量声明.md:291](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L291) | 失败 | E0658 cannot call conditionally-const method `Vec::&lt;i32&gt;::push` in statics |
| [2.1 变量声明.md:313](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L313) | 失败 | E0463 can't find crate for `lazy_static` |
| [2.2 基本数据类型.md:107](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L107) | 失败 | expected item, found keyword `if` |
| [2.2 基本数据类型.md:265](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L265) | 失败 | expected item, found keyword `let` |
| [2.2 基本数据类型.md:509](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L509) | 失败 | E0308 mismatched types |
| [2.2 基本数据类型.md:532](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L532) | 失败 | expected item, found keyword `let` |
| [2.3 复合数据类型.md:59](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L59) | 失败 | expected one of `!` or `::`, found `Empty` |
| [2.3 复合数据类型.md:79](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L79) | 失败 | E0422 cannot find struct, variant or union type `Point` in this scope |
| [2.3 复合数据类型.md:88](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L88) | 失败 | E0422 cannot find struct, variant or union type `Point` in this scope |
| [2.3 复合数据类型.md:101](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L101) | 失败 | E0422 cannot find struct, variant or union type `Point` in this scope |
| [2.3 复合数据类型.md:199](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L199) | 失败 | expected identifier, found `0` |
| [2.3 复合数据类型.md:247](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L247) | 失败 | E0308 mismatched types |
| [2.3 复合数据类型.md:348](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L348) | 失败 | E0370 enum discriminant overflowed |
| [2.3 复合数据类型.md:385](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L385) | 失败 | expected one of `!` or `[`, found `include` |
| [2.3 复合数据类型.md:432](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L432) | 失败 | E0425 cannot find type `Number` in this scope |
| [2.3 复合数据类型.md:487](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L487) | 失败 | E0308 mismatched types |
| [2.3 复合数据类型.md:539](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L539) | 失败 | E0072 recursive type `Recursive` has infinite size |
| [2.3 复合数据类型.md:564](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L564) | 失败 | expected identifier, found `&lt;` |

## 第 3 章 语句和表达式

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [3.2 表达式.md:28](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.2%20%E8%A1%A8%E8%BE%BE%E5%BC%8F.md#L28) | 失败 | comparison operators cannot be chained |
| [3.2 表达式.md:36](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.2%20%E8%A1%A8%E8%BE%BE%E5%BC%8F.md#L36) | 失败 | expected item, found `$` |
| [3.2 表达式.md:181](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.2%20%E8%A1%A8%E8%BE%BE%E5%BC%8F.md#L181) | 失败 | expected one of `!` or `[`, found `include` |
| [3.3 if-else.md:27](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L27) | 失败 | expected item, found keyword `if` |
| [3.3 if-else.md:47](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L47) | 失败 | expected item, found keyword `let` |
| [3.3 if-else.md:61](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L61) | 失败 | E0317 `if` may be missing an `else` clause |
| [3.3 if-else.md:75](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L75) | 失败 | unknown start of token: ` |
| [3.3 if-else.md:230](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L230) | 失败 | expected item, found keyword `let` |

## 第 4 章 函数

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [4.1 简介.md:26](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L26) | 失败 | E0425 cannot find value `add2` in this scope |
| [4.1 简介.md:43](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L43) | 失败 | E0425 cannot find value `add1` in this scope |
| [4.1 简介.md:58](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L58) | 失败 | unknown start of token: ` |
| [4.1 简介.md:71](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L71) | 失败 | expected item, found keyword `let` |
| [4.1 简介.md:80](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L80) | 失败 | E0425 cannot find value `add1` in this scope |
| [4.2 发散函数.md:13](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.2%20%E5%8F%91%E6%95%A3%E5%87%BD%E6%95%B0.md#L13) | 失败 | expected item, found keyword `let` |
| [4.2 发散函数.md:20](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.2%20%E5%8F%91%E6%95%A3%E5%87%BD%E6%95%B0.md#L20) | 失败 | expected item, found keyword `let` |
| [4.3 main 函数.md:5](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.3%20main%20%E5%87%BD%E6%95%B0.md#L5) | 失败 | expected one of `!` or `::`, found `main` |
| [4.4 const fn.md:27](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.4%20const%20fn.md#L27) | 失败 | E0015 cannot call non-const method `&lt;T as Into&lt;i32&gt;&gt;::into` in constant functions |

## 第 5 章 trait

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [5.1 成员方法.md:29](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.1%20%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95.md#L29) | 失败 | E0428 the name `T` is defined multiple times |
| [5.1 成员方法.md:55](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.1%20%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95.md#L55) | 失败 | E0405 cannot find trait `Shape` in this scope |
| [5.1 成员方法.md:80](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.1%20%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95.md#L80) | 失败 | E0425 cannot find type `Circle` in this scope |
| [5.1 成员方法.md:125](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.1%20%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95.md#L125) | 失败 | E0782 expected a type, found a trait |
| [5.12 trait 常量.md:17](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.12%20trait%20%E5%B8%B8%E9%87%8F.md#L17) | 失败 | E0405 cannot find trait `ConstTrait` in this scope |
| [5.2 静态方法.md:38](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.2%20%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95.md#L38) | 失败 | E0117 only traits defined in the current crate can be implemented for types defined outside of the crate |
| [5.3 扩展方法.md:32](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.3%20%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95.md#L32) | 失败 | expected one of `!` or `::`, found `-` |
| [5.3 扩展方法.md:47](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.3%20%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95.md#L47) | 失败 | expected item, found keyword `let` |
| [5.4 完整函数调用语法.md:9](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.4%20%E5%AE%8C%E6%95%B4%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E8%AF%AD%E6%B3%95.md#L9) | 失败 | E0034 multiple applicable items in scope |
| [5.4 完整函数调用语法.md:40](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.4%20%E5%AE%8C%E6%95%B4%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E8%AF%AD%E6%B3%95.md#L40) | 失败 | E0425 cannot find value `Chef` in this scope |
| [5.5 trait 约束和继承.md:50](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L50) | 失败 | E0405 cannot find trait `Summary` in this scope |
| [5.5 trait 约束和继承.md:57](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L57) | 失败 | E0405 cannot find trait `Summary` in this scope |
| [5.5 trait 约束和继承.md:63](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L63) | 失败 | E0405 cannot find trait `Summary` in this scope |
| [5.5 trait 约束和继承.md:69](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L69) | 失败 | E0405 cannot find trait `Summary` in this scope |
| [5.5 trait 约束和继承.md:83](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L83) | 失败 | E0404 cannot find trait `Debug` in this scope |
| [5.5 trait 约束和继承.md:93](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L93) | 失败 | non-item in item list |
| [5.5 trait 约束和继承.md:101](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L101) | 失败 | E0277 the trait bound `T: Base` is not satisfied |
| [5.5 trait 约束和继承.md:116](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L116) | 失败 | unknown start of token: ` |
| [5.5 trait 约束和继承.md:123](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L123) | 失败 | E0405 cannot find trait `Base` in this scope |
| [5.5 trait 约束和继承.md:134](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L134) | 失败 | E0658 the precise format of `Fn`-family traits' type parameters is subject to change |
| [5.5 trait 约束和继承.md:176](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L176) | 失败 | E0405 cannot find trait `Display` in this scope |
| [5.6 Derive.md:19](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.6%20Derive.md#L19) | 失败 | non-item in item list |
| [5.6 Derive.md:33](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.6%20Derive.md#L33) | 失败 | expected one of `!` or `::`, found `Debug` |
| [5.7 trait 别名.md:5](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.7%20trait%20%E5%88%AB%E5%90%8D.md#L5) | 失败 | E0220 associated type `Item` not found for `Future` |
| [5.7 trait 别名.md:17](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.7%20trait%20%E5%88%AB%E5%90%8D.md#L17) | 失败 | E0405 cannot find trait `Service` in this scope |
| [5.8 标准库中常见的 trait 简介.md:9](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L9) | 失败 | E0425 cannot find type `Formatter` in this scope |
| [5.8 标准库中常见的 trait 简介.md:83](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L83) | 失败 | this file contains an unclosed delimiter |
| [5.8 标准库中常见的 trait 简介.md:100](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L100) | 失败 | expected item, found keyword `let` |
| [5.8 标准库中常见的 trait 简介.md:110](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L110) | 失败 | prefix `Ord` is unknown |
| [5.8 标准库中常见的 trait 简介.md:116](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L116) | 失败 | expected one of `!` or `::`, found `3.4` |
| [5.8 标准库中常见的 trait 简介.md:138](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L138) | 失败 | E0152 found duplicate lang item `sized` |
| [5.8 标准库中常见的 trait 简介.md:161](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L161) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found keyword `fn` |
| [5.9 supertrait.md:57](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.9%20supertrait.md#L57) | 失败 | E0405 cannot find trait `OutlinePrint` in this scope |

## 第 6 章 数组和字符串

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [6.1 数组.md:11](docs/%E7%AC%AC%206%20%E7%AB%A0%20%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2/6.1%20%E6%95%B0%E7%BB%84.md#L11) | 失败 | E0308 mismatched types |
| [6.1 数组.md:343](docs/%E7%AC%AC%206%20%E7%AB%A0%20%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2/6.1%20%E6%95%B0%E7%BB%84.md#L343) | 失败 | E0433 cannot find module or crate `ops` in this scope |
| [6.2 字符串.md:39](docs/%E7%AC%AC%206%20%E7%AB%A0%20%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2/6.2%20%E5%AD%97%E7%AC%A6%E4%B8%B2.md#L39) | 失败 | expected one of `!` or `::`, found keyword `as` |
| [6.2 字符串.md:47](docs/%E7%AC%AC%206%20%E7%AB%A0%20%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2/6.2%20%E5%AD%97%E7%AC%A6%E4%B8%B2.md#L47) | 失败 | expected one of `!` or `::`, found `.` |

## 第 7 章 模式解构

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [7.2 match.md:43](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L43) | 失败 | expected item, found keyword `match` |
| [7.2 match.md:69](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L69) | 失败 | expected item, found keyword `match` |
| [7.2 match.md:148](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L148) | 失败 | in expressions, `_` can only be used on the left-hand side of an assignment |
| [7.2 match.md:162](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L162) | 失败 | unknown start of token: ` |
| [7.2 match.md:182](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L182) | 失败 | E0308 mismatched types |
| [7.2 match.md:194](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L194) | 失败 | expected item, found keyword `let` |
| [7.2 match.md:204](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L204) | 失败 | expected item, found keyword `let` |
| [7.2 match.md:328](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L328) | 失败 | E0004 non-exhaustive patterns: `i32::MIN..=i32::MAX` not covered |
| [7.2 match.md:343](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L343) | 失败 | expected item, found reserved identifier `_` |
| [7.2 match.md:383](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L383) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [7.2 match.md:454](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L454) | 失败 | E0308 mismatched types |
| [7.2 match.md:471](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L471) | 失败 | unknown start of token: ` |
| [7.2 match.md:490](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L490) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [7.2 match.md:519](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L519) | 失败 | E0384 cannot assign twice to immutable variable `x` |
| [7.2 match.md:534](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L534) | 失败 | E0308 mismatched types |
| [7.2 match.md:567](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L567) | 失败 | E0596 cannot borrow `i` as mutable, as it is not declared as mutable |
| [7.3 if-let 和 while-let.md:9](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L9) | 失败 | expected item, found keyword `match` |
| [7.3 if-let 和 while-let.md:24](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L24) | 失败 | expected item, found keyword `if` |
| [7.3 if-let 和 while-let.md:37](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L37) | 失败 | expected item, found keyword `if` |
| [7.3 if-let 和 while-let.md:63](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L63) | 失败 | expected item, found keyword `let` |
| [7.3 if-let 和 while-let.md:73](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L73) | 失败 | expected item, found keyword `let` |
| [7.3 if-let 和 while-let.md:86](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L86) | 失败 | expected item, found keyword `if` |
| [7.3 if-let 和 while-let.md:98](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.3%20if-let%20%E5%92%8C%20while-let.md#L98) | 失败 | expected item, found keyword `match` |

## 第 8 章 深入类型系统

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [8.1 代数类型系统.md:5](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L5) | 失败 | expected one of `!` or `::`, found `+` |
| [8.1 代数类型系统.md:12](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L12) | 失败 | expected item, found `0` |
| [8.1 代数类型系统.md:49](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L49) | 失败 | missing `fn` or `struct` for function or struct definition |
| [8.1 代数类型系统.md:64](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L64) | 失败 | missing `fn` or `struct` for function or struct definition |
| [8.1 代数类型系统.md:84](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L84) | 失败 | missing `fn` or `struct` for function or struct definition |
| [8.1 代数类型系统.md:118](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L118) | 失败 | missing `fn` or `struct` for function or struct definition |
| [8.1 代数类型系统.md:146](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.1%20%E4%BB%A3%E6%95%B0%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F.md#L146) | 失败 | missing `fn` or `struct` for function or struct definition |
| [8.2 Never Type.md:9](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.2%20Never%20Type.md#L9) | 失败 | E0425 cannot find type `RandomState` in this scope |
| [8.2 Never Type.md:42](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.2%20Never%20Type.md#L42) | 失败 | expected item, found keyword `loop` |
| [8.2 Never Type.md:83](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.2%20Never%20Type.md#L83) | 失败 | E0277 the size for values of type `Self` cannot be known at compilation time |
| [8.2 Never Type.md:92](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.2%20Never%20Type.md#L92) | 失败 | E0405 cannot find trait `FromStr` in this scope |
| [8.3 再谈 Option 类型.md:105](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.3%20%E5%86%8D%E8%B0%88%20Option%20%E7%B1%BB%E5%9E%8B.md#L105) | 失败 | expected one of `!` or `::`, found `of` |
| [8.3 再谈 Option 类型.md:124](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.3%20%E5%86%8D%E8%B0%88%20Option%20%E7%B1%BB%E5%9E%8B.md#L124) | 失败 | E0405 cannot find trait `Zeroable` in this scope |
| [8.3 再谈 Option 类型.md:136](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.3%20%E5%86%8D%E8%B0%88%20Option%20%E7%B1%BB%E5%9E%8B.md#L136) | 失败 | E0425 cannot find type `Unique` in this scope |
| [8.3 再谈 Option 类型.md:145](docs/%E7%AC%AC%208%20%E7%AB%A0%20%E6%B7%B1%E5%85%A5%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/8.3%20%E5%86%8D%E8%B0%88%20Option%20%E7%B1%BB%E5%9E%8B.md#L145) | 失败 | E0425 cannot find type `NonZero` in this scope |

## 第 9 章 宏

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [9.1 简介 macro.md:19](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.1%20%E7%AE%80%E4%BB%8B%20macro.md#L19) | 失败 | 2 positional arguments in format string, but no arguments were given |
| [9.1 简介 macro.md:49](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.1%20%E7%AE%80%E4%BB%8B%20macro.md#L49) | 失败 | cannot find macro `add_impl` in this scope |
| [9.2 声明式宏.md:18](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.2%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E5%AE%8F.md#L18) | 失败 | expected item, found keyword `let` |
| [9.2 声明式宏.md:32](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.2%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E5%AE%8F.md#L32) | 失败 | macros must contain at least one rule |
| [9.2 声明式宏.md:143](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.2%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E5%AE%8F.md#L143) | 失败 | E0433 cannot find type `HashMap` in this scope |
| [9.2 声明式宏.md:214](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.2%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E5%AE%8F.md#L214) | 失败 | no rules expected `;` |
| [9.2 声明式宏.md:253](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.2%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E5%AE%8F.md#L253) | 失败 | no rules expected `*` |
| [9.3 过程宏.md:29](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L29) | 失败 | cannot find macro `sql` in this scope |
| [9.3 过程宏.md:35](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L35) | 失败 | unexpected token: `...` |
| [9.3 过程宏.md:73](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L73) | 失败 | the `proc_macro` attribute is only usable with crates of the `proc-macro` crate type |
| [9.3 过程宏.md:96](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L96) | 失败 | E0432 unresolved import `macro_lib` |
| [9.3 过程宏.md:130](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L130) | 失败 | the `proc_macro_attribute` attribute is only usable with crates of the `proc-macro` crate type |
| [9.3 过程宏.md:144](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L144) | 失败 | E0463 can't find crate for `macro_lib` |
| [9.3 过程宏.md:195](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L195) | 失败 | E0463 can't find crate for `hello_world_derive` |
| [9.3 过程宏.md:217](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L217) | 失败 | the `proc_macro_derive` attribute is only usable with crates of the `proc-macro` crate type |
| [9.3 过程宏.md:234](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L234) | 失败 | expected item, found keyword `let` |
| [9.3 过程宏.md:252](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L252) | 失败 | E0433 cannot find type `Regex` in this scope |
| [9.3 过程宏.md:269](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L269) | 失败 | the `proc_macro_derive` attribute is only usable with crates of the `proc-macro` crate type |
| [9.4 常用的宏开发库.md:17](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L17) | 失败 | the `proc_macro` attribute is only usable with crates of the `proc-macro` crate type |
| [9.4 常用的宏开发库.md:42](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L42) | 失败 | expected identifier, found reserved keyword `gen` |
| [9.4 常用的宏开发库.md:96](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L96) | 失败 | E0432 unresolved import `quote` |
| [9.5 宏的实践与哲学.md:30](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L30) | 失败 | expected one of `!`, `+`, `,`, `-&gt;`, `::`, or `&gt;`, found `;` |
| [9.5 宏的实践与哲学.md:52](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L52) | 失败 | expected one of `!` or `::`, found `(` |
| [9.5 宏的实践与哲学.md:197](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L197) | 失败 | cannot find attribute `get` in this scope |
| [9.5 宏的实践与哲学.md:296](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L296) | 失败 | E0432 unresolved import `serde` |
| [9.5 宏的实践与哲学.md:322](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L322) | 失败 | E0433 cannot find module or crate `tokio` in this scope |
| [9.5 宏的实践与哲学.md:362](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L362) | 失败 | macros must contain at least one rule |

## 第 11 章 所有权和移动语义

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [11.1 什么是所有权.md:5](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L5) | 失败 | expected one of `!` or `::`, found `*` |
| [11.1 什么是所有权.md:11](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L11) | 失败 | missing `fn` or `struct` for function or struct definition |
| [11.1 什么是所有权.md:51](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L51) | 失败 | E0382 borrow of moved value: `s` |
| [11.1 什么是所有权.md:61](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L61) | 失败 | unknown start of token: ` |
| [11.1 什么是所有权.md:81](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L81) | 失败 | expected one of `!` or `[`, found `include` |
| [11.2 移动语义.md:57](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.2%20%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89.md#L57) | 失败 | unknown start of token: \u{2026} |
| [11.2 移动语义.md:67](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.2%20%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89.md#L67) | 失败 | unknown start of token: \u{2026} |
| [11.3 复制语义.md:26](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.3%20%E5%A4%8D%E5%88%B6%E8%AF%AD%E4%B9%89.md#L26) | 失败 | E0277 the trait bound `Foo: Clone` is not satisfied |
| [11.5 Clone VS Copy.md:31](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.5%20Clone%20VS%20Copy.md#L31) | 失败 | E0382 borrow of moved value: `t1` |
| [11.6 析构函数.md:95](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L95) | 失败 | E0040 explicit use of destructor method |
| [11.6 析构函数.md:115](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L115) | 失败 | E0382 borrow of moved value: `v` |
| [11.6 析构函数.md:223](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L223) | 失败 | E0184 the trait `Copy` cannot be implemented for this type; the type has a destructor |
| [11.6 析构函数.md:305](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L305) | 失败 | E0425 cannot find function, tuple struct or tuple variant `D` in this scope |

## 第 12 章 借用和生命周期

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [12.2 借用.md:24](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.2%20%E5%80%9F%E7%94%A8.md#L24) | 失败 | E0596 cannot borrow `*v` as mutable, as it is behind a `&` reference |
| [12.2 借用.md:40](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.2%20%E5%80%9F%E7%94%A8.md#L40) | 失败 | expected one of `-&gt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [12.3 借用规则.md:92](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.3%20%E5%80%9F%E7%94%A8%E8%A7%84%E5%88%99.md#L92) | 失败 | E0506 cannot assign to `x` because it is borrowed |
| [12.4 生命周期标记.md:47](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L47) | 失败 | E0425 cannot find type `T` in this scope |
| [12.4 生命周期标记.md:58](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L58) | 失败 | E0425 cannot find type `T` in this scope |
| [12.4 生命周期标记.md:71](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L71) | 失败 | expected one of `!`, `(`, `::`, `&lt;`, `where`, or `{`, found keyword `fn` |
| [12.4 生命周期标记.md:124](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L124) | 失败 | E0425 cannot find type `Test` in this scope |
| [12.4 生命周期标记.md:146](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L146) | 失败 | E0597 `n` does not live long enough |
| [12.5 省略生命周期标记.md:23](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L23) | 失败 | E0597 `c` does not live long enough |
| [12.5 省略生命周期标记.md:60](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L60) | 失败 | E0425 cannot find type `ImportantExcerpt` in this scope |
| [12.5 省略生命周期标记.md:77](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L77) | 失败 | E0106 missing lifetime specifier |
| [12.5 省略生命周期标记.md:99](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L99) | 失败 | this file contains an unclosed delimiter |
| [12.5 省略生命周期标记.md:131](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L131) | 失败 | expected item, found keyword `let` |

## 第 13 章 借用检查

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [13.1 编译错误示例.md:25](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L25) | 失败 | E0506 cannot assign to `i` because it is borrowed |
| [13.1 编译错误示例.md:60](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L60) | 失败 | E0503 cannot use `i` because it was mutably borrowed |
| [13.1 编译错误示例.md:78](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L78) | 失败 | E0506 cannot assign to `i` because it is borrowed |
| [13.1 编译错误示例.md:98](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L98) | 失败 | E0499 cannot borrow `i` as mutable more than once at a time |
| [13.1 编译错误示例.md:125](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L125) | 失败 | E0502 cannot borrow `s` as mutable because it is also borrowed as immutable |
| [13.2 内存不安全示例：修改枚举.md:20](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.2%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E4%BF%AE%E6%94%B9%E6%9E%9A%E4%B8%BE.md#L20) | 失败 | E0506 cannot assign to `x` because it is borrowed |
| [13.3 内存不安全示例：迭代器失效.md:25](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.3%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%A4%B1%E6%95%88.md#L25) | 失败 | E0502 cannot borrow `arr` as mutable because it is also borrowed as immutable |
| [13.3 内存不安全示例：迭代器失效.md:36](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.3%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%A4%B1%E6%95%88.md#L36) | 失败 | expected item, found `{` |
| [13.4 内存不安全示例：悬空指针.md:11](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.4%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E6%82%AC%E7%A9%BA%E6%8C%87%E9%92%88.md#L11) | 失败 | E0106 missing lifetime specifier |

## 第 14 章 NLL

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [14.1 NLL 要解决的问题.md:33](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L33) | 失败 | E0425 cannot find function `capitalize` in this scope |
| [14.1 NLL 要解决的问题.md:49](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L49) | 失败 | E0425 cannot find function `capitalize` in this scope |
| [14.1 NLL 要解决的问题.md:69](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L69) | 失败 | E0425 cannot find type `HashMap` in this scope |
| [14.1 NLL 要解决的问题.md:90](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L90) | 失败 | E0425 cannot find type `HashMap` in this scope |
| [14.1 NLL 要解决的问题.md:109](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L109) | 失败 | expected item, found keyword `match` |
| [14.2 NLL 的原理.md:7](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.2%20NLL%20%E7%9A%84%E5%8E%9F%E7%90%86.md#L7) | 失败 | E0425 cannot find function `capitalize` in this scope |
| [14.2 NLL 的原理.md:27](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.2%20NLL%20%E7%9A%84%E5%8E%9F%E7%90%86.md#L27) | 失败 | expected one of `!` or `::`, found `-` |
| [14.2 NLL 的原理.md:33](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.2%20NLL%20%E7%9A%84%E5%8E%9F%E7%90%86.md#L33) | 失败 | E0425 cannot find type `Data` in this scope |

## 第 15 章 内部可变性

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [15.1 Cell.md:63](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.1%20Cell.md#L63) | 失败 | E0425 cannot find type `Cell` in this scope |
| [15.2 RefCell.md:5](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.2%20RefCell.md#L5) | 失败 | E0425 cannot find type `RefCell` in this scope |
| [15.3 UnsafeCell.md:7](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L7) | 失败 | E0594 cannot assign to `self.value`, which is behind a `&` reference |
| [15.3 UnsafeCell.md:34](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L34) | 失败 | invalid_reference_casting assigning to `&T` is undefined behavior, consider using an `UnsafeCell` |
| [15.3 UnsafeCell.md:61](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L61) | 失败 | E0433 cannot find type `CellV2` in this scope |
| [15.3 UnsafeCell.md:74](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L74) | 失败 | E0425 cannot find type `CellV2` in this scope |
| [15.3 UnsafeCell.md:112](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L112) | 失败 | expected item, found keyword `let` |
| [15.3 UnsafeCell.md:150](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L150) | 失败 | E0152 found duplicate lang item `unsafe_cell` |

## 第 16 章 解引用

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [16.1 自定义解引用.md:22](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.1%20%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E5%BC%95%E7%94%A8.md#L22) | 失败 | E0433 cannot find module or crate `ops` in this scope |
| [16.2 Deref coercion与自动解引用.md:66](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.2%20Deref%20coercion%E4%B8%8E%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%BC%95%E7%94%A8.md#L66) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [16.2 Deref coercion与自动解引用.md:72](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.2%20Deref%20coercion%E4%B8%8E%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%BC%95%E7%94%A8.md#L72) | 失败 | macro expansion ignores `{` and any tokens following |
| [16.3 自动解引用的用处.md:5](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.3%20%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%BC%95%E7%94%A8%E7%9A%84%E7%94%A8%E5%A4%84.md#L5) | 失败 | E0405 cannot find trait `Deref` in this scope |
| [16.3 自动解引用的用处.md:69](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.3%20%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%BC%95%E7%94%A8%E7%9A%84%E7%94%A8%E5%A4%84.md#L69) | 失败 | E0382 borrow of moved value: `s` |
| [16.4 有时候需要手动处理.md:28](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.4%20%E6%9C%89%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%A4%84%E7%90%86.md#L28) | 失败 | E0308 mismatched types |
| [16.4 有时候需要手动处理.md:40](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.4%20%E6%9C%89%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%A4%84%E7%90%86.md#L40) | 失败 | unknown start of token: ` |
| [16.5 智能指针.md:55](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L55) | 失败 | E0405 cannot find trait `Deref` in this scope |
| [16.5 智能指针.md:70](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L70) | 失败 | E0425 cannot find type `Shared` in this scope |
| [16.5 智能指针.md:78](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L78) | 失败 | E0425 cannot find type `Cell` in this scope |
| [16.5 智能指针.md:90](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L90) | 失败 | `self` parameter is only allowed in associated functions |
| [16.5 智能指针.md:108](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L108) | 失败 | E0425 cannot find type `Rc` in this scope |
| [16.5 智能指针.md:136](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.5%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.md#L136) | 失败 | `self` parameter is only allowed in associated functions |

## 第 17 章 泄漏

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [17.1 内存泄漏.md:19](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L19) | 失败 | unexpected token: `...` |
| [17.1 内存泄漏.md:33](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L33) | 失败 | E0382 assign to part of moved value: `*node2` |
| [17.1 内存泄漏.md:55](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L55) | 失败 | E0422 cannot find struct, variant or union type `Node` in this scope |
| [17.1 内存泄漏.md:78](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L78) | 失败 | E0382 assign of moved value: `node2` |
| [17.1 内存泄漏.md:108](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L108) | 失败 | E0594 cannot assign to data in an `Rc` |
| [17.3 析构函数泄漏.md:31](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.3%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0%E6%B3%84%E6%BC%8F.md#L31) | 失败 | E0423 cannot find function `scoped` in module `thread` |
| [17.3 析构函数泄漏.md:66](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.3%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0%E6%B3%84%E6%BC%8F.md#L66) | 失败 | E0463 can't find crate for `scoped_threadpool` |
| [17.3 析构函数泄漏.md:95](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.3%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0%E6%B3%84%E6%BC%8F.md#L95) | 失败 | `self` parameter is only allowed in associated functions |

## 第 18 章 Panic

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [18.1 什么是 panic.md:15](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.1%20%E4%BB%80%E4%B9%88%E6%98%AF%20panic.md#L15) | 失败 | character literal may only contain one codepoint |
| [18.2 Panic 实现机制.md:15](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.2%20Panic%20%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6.md#L15) | 失败 | expected one of `!` or `::`, found `-` |
| [18.3 Panic Safety.md:23](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.3%20Panic%20Safety.md#L23) | 失败 | E0433 cannot find module or crate `ptr` in this scope |
| [18.3 Panic Safety.md:97](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.3%20Panic%20Safety.md#L97) | 失败 | E0277 the type `&mut Vec&lt;i32&gt;` may not be safely transferred across an unwind boundary |
| [18.3 Panic Safety.md:129](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.3%20Panic%20Safety.md#L129) | 失败 | expected one of `!`, `+`, `::`, `where`, or `{`, found `&lt;eof&gt;` |

## 第 19 章 Unsafe

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [19.1 unsafe 关键字.md:19](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.1%20unsafe%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L19) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [19.1 unsafe 关键字.md:29](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.1%20unsafe%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L29) | 失败 | expected item, found keyword `let` |
| [19.2 裸指针.md:19](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.2%20%E8%A3%B8%E6%8C%87%E9%92%88.md#L19) | 失败 | invalid_reference_casting casting references to a bigger memory layout than the backing allocation is undefined behavior, even if the reference is unused |
| [19.2 裸指针.md:40](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.2%20%E8%A3%B8%E6%8C%87%E9%92%88.md#L40) | 失败 | expected one of `!` or `::`, found `FFFFFFFF` |
| [19.3 内置函数.md:38](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.3%20%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.md#L38) | 失败 | expected item, found `6393920` |
| [19.3 内置函数.md:96](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.3%20%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.md#L96) | 失败 | E0507 cannot move out of `*x` which is behind a mutable reference |
| [19.3 内置函数.md:110](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.3%20%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.md#L110) | 失败 | E0433 cannot find module or crate `mem` in this scope |
| [19.4 分割借用.md:32](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.4%20%E5%88%86%E5%89%B2%E5%80%9F%E7%94%A8.md#L32) | 失败 | E0499 cannot borrow `x[_]` as mutable more than once at a time |
| [19.4 分割借用.md:51](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.4%20%E5%88%86%E5%89%B2%E5%80%9F%E7%94%A8.md#L51) | 失败 | unknown start of token: ` |
| [19.4 分割借用.md:92](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.4%20%E5%88%86%E5%89%B2%E5%80%9F%E7%94%A8.md#L92) | 失败 | expected item, found `[` |
| [19.4 分割借用.md:105](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.4%20%E5%88%86%E5%89%B2%E5%80%9F%E7%94%A8.md#L105) | 失败 | `self` parameter is only allowed in associated functions |
| [19.5 协变.md:71](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L71) | 失败 | lifetime may not live long enough |
| [19.5 协变.md:91](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L91) | 失败 | lifetime may not live long enough |
| [19.5 协变.md:119](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L119) | 失败 | lifetime may not live long enough |
| [19.5 协变.md:131](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L131) | 失败 | lifetime may not live long enough |
| [19.5 协变.md:145](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L145) | 失败 | E0392 lifetime parameter `'a` is never used |
| [19.5 协变.md:158](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L158) | 失败 | E0152 found duplicate lang item `phantom_data` |
| [19.5 协变.md:168](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L168) | 失败 | E0425 cannot find type `NonZero` in this scope |
| [19.5 协变.md:179](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L179) | 失败 | E0425 cannot find type `PhantomData` in this scope |
| [19.5 协变.md:202](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L202) | 失败 | E0422 cannot find struct, variant or union type `R` in this scope |
| [19.5 协变.md:215](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L215) | 失败 | E0597 `local` does not live long enough |

## 第 20 章 Vec 源码分析

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [20.1 内存申请.md:12](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L12) | 失败 | E0405 cannot find trait `Allocator` in this scope |
| [20.1 内存申请.md:22](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L22) | 失败 | E0425 cannot find type `T` in this scope |
| [20.1 内存申请.md:40](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L40) | 失败 | expected item, found `...` |
| [20.1 内存申请.md:67](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L67) | 失败 | E0658 stability attributes may not be used outside of the standard library |
| [20.1 内存申请.md:78](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L78) | 失败 | E0425 cannot find type `A` in this scope |
| [20.1 内存申请.md:96](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L96) | 失败 | E0428 the name `allocate_in` is defined multiple times |
| [20.1 内存申请.md:175](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.1%20%E5%86%85%E5%AD%98%E7%94%B3%E8%AF%B7.md#L175) | 失败 | E0425 cannot find type `NonZero` in this scope |
| [20.2 内存扩容.md:7](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.2%20%E5%86%85%E5%AD%98%E6%89%A9%E5%AE%B9.md#L7) | 失败 | `self` parameter is only allowed in associated functions |
| [20.2 内存扩容.md:26](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.2%20%E5%86%85%E5%AD%98%E6%89%A9%E5%AE%B9.md#L26) | 失败 | `self` parameter is only allowed in associated functions |
| [20.2 内存扩容.md:65](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.2%20%E5%86%85%E5%AD%98%E6%89%A9%E5%AE%B9.md#L65) | 失败 | `self` parameter is only allowed in associated functions |
| [20.3 内存释放.md:9](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L9) | 失败 | E0433 cannot find module or crate `ptr` in this scope |
| [20.3 内存释放.md:27](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L27) | 失败 | E0658 lang items are subject to change |
| [20.3 内存释放.md:47](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L47) | 失败 | E0425 cannot find type `RawVec` in this scope |
| [20.3 内存释放.md:62](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L62) | 失败 | E0425 cannot find type `RawVec` in this scope |
| [20.3 内存释放.md:91](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L91) | 失败 | expected item, found keyword `let` |
| [20.3 内存释放.md:104](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L104) | 失败 | expected item, found keyword `let` |
| [20.3 内存释放.md:137](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L137) | 失败 | E0597 `b` does not live long enough |
| [20.3 内存释放.md:191](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L191) | 失败 | unknown start of token: ` |
| [20.3 内存释放.md:205](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L205) | 失败 | E0425 cannot find type `R` in this scope |
| [20.3 内存释放.md:218](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L218) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [20.4 不安全的边界.md:7](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.4%20%E4%B8%8D%E5%AE%89%E5%85%A8%E7%9A%84%E8%BE%B9%E7%95%8C.md#L7) | 失败 | `self` parameter is only allowed in associated functions |
| [20.4 不安全的边界.md:55](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.4%20%E4%B8%8D%E5%AE%89%E5%85%A8%E7%9A%84%E8%BE%B9%E7%95%8C.md#L55) | 失败 | expected item, found keyword `if` |
| [20.5 自定义解引用.md:7](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.5%20%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E5%BC%95%E7%94%A8.md#L7) | 失败 | E0433 cannot find module or crate `ops` in this scope |
| [20.5 自定义解引用.md:31](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.5%20%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E5%BC%95%E7%94%A8.md#L31) | 失败 | E0433 cannot find module or crate `ops` in this scope |
| [20.5 自定义解引用.md:50](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.5%20%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E5%BC%95%E7%94%A8.md#L50) | 失败 | E0405 cannot find trait `Index` in this scope |
| [20.6 迭代器.md:46](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.6%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L46) | 失败 | `self` parameter is only allowed in associated functions |
| [20.7 panic safety.md:11](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.7%20panic%20safety.md#L11) | 失败 | `self` parameter is only allowed in associated functions |
| [20.7 panic safety.md:32](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.7%20panic%20safety.md#L32) | 失败 | E0405 cannot find trait `ExtendWith` in this scope |

## 第 21 章 泛型（第三部分 高级抽象）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [21.1 数据结构中的泛型.md:57](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.1%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L57) | 失败 | E0392 type parameter `T` is never used |
| [21.2 函数中的泛型.md:24](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.2%20%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L24) | 失败 | E0425 cannot find function `compare_option` in this scope |
| [21.2 函数中的泛型.md:39](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.2%20%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L39) | 失败 | unexpected token: `...` |
| [21.2 函数中的泛型.md:49](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.2%20%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L49) | 失败 | expected identifier, found `&lt;` |
| [21.2 函数中的泛型.md:75](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.2%20%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L75) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [21.3 impl 块中的泛型.md:11](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.3%20impl%20%E5%9D%97%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L11) | 失败 | E0210 type parameter `T` must be used as an argument to some local type (e.g., `MyStruct&lt;T&gt;`) |
| [21.4 泛型参数约束.md:5](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L5) | 失败 | missing `fn` or `struct` for function or struct definition |
| [21.4 泛型参数约束.md:44](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L44) | 失败 | E0369 binary operation `&lt;` cannot be applied to type `T` |
| [21.4 泛型参数约束.md:79](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L79) | 失败 | this file contains an unclosed delimiter |
| [21.4 泛型参数约束.md:92](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L92) | 失败 | unexpected token: `...` |
| [21.4 泛型参数约束.md:110](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L110) | 失败 | E0425 cannot find function `max` in this scope |
| [21.4 泛型参数约束.md:124](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L124) | 失败 | unknown start of token: ` |
| [21.5 关联类型.md:72](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.5%20%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L72) | 失败 | expected one of `:`, `@`, or `\|`, found `,` |
| [21.5 关联类型.md:81](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.5%20%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L81) | 失败 | unexpected token: `...` |
| [21.5 关联类型.md:91](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.5%20%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L91) | 失败 | expected one of `:`, `@`, or `\|`, found `,` |
| [21.5 关联类型.md:103](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.5%20%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L103) | 失败 | unexpected token: `...` |
| [21.5 关联类型.md:127](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.5%20%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L127) | 失败 | E0658 associated type defaults are unstable |
| [21.6 何时使用关联类型.md:14](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.6%20%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L14) | 失败 | E0283 type annotations needed |
| [21.6 何时使用关联类型.md:48](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.6%20%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L48) | 失败 | expected item, found keyword `let` |
| [21.7 泛型特化.md:9](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L9) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [21.7 泛型特化.md:94](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L94) | 失败 | E0433 cannot find module or crate `fmt` in this scope |
| [21.7 泛型特化.md:128](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L128) | 失败 | unexpected token: `...` |
| [21.7 泛型特化.md:168](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L168) | 失败 | E0405 cannot find trait `Example` in this scope |
| [21.7 泛型特化.md:181](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L181) | 失败 | E0433 cannot find type `Example` in this scope |
| [21.7 泛型特化.md:193](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L193) | 失败 | E0405 cannot find trait `Example` in this scope |
| [21.7 泛型特化.md:206](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L206) | 失败 | E0405 cannot find trait `Example` in this scope |
| [21.7 泛型特化.md:233](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L233) | 失败 | E0119 conflicting implementations of trait `Foo` |
| [21.7 泛型特化.md:252](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L252) | 失败 | E0405 cannot find trait `Foo` in this scope |
| [21.7 泛型特化.md:267](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L267) | 失败 | E0405 cannot find trait `Display` in this scope |
| [21.7 泛型特化.md:280](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L280) | 失败 | E0405 cannot find trait `RichDisplay` in this scope |
| [21.7 泛型特化.md:294](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L294) | 失败 | E0405 cannot find trait `Display` in this scope |

## 第 22 章 闭包

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [22.1 变量捕获.md:85](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.1%20%E5%8F%98%E9%87%8F%E6%8D%95%E8%8E%B7.md#L85) | 失败 | E0425 cannot find type `T` in this scope |
| [22.2 move 关键字.md:7](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.2%20move%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L7) | 失败 | E0782 expected a type, found a trait |
| [22.2 move 关键字.md:28](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.2%20move%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L28) | 失败 | unknown start of token: ` |
| [22.2 move 关键字.md:40](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.2%20move%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L40) | 失败 | E0782 expected a type, found a trait |
| [22.2 move 关键字.md:53](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.2%20move%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L53) | 失败 | E0425 cannot find type `TYPE1` in this scope |
| [22.3 Fn_FnMut_FnOnce.md:9](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.3%20Fn_FnMut_FnOnce.md#L9) | 失败 | E0658 the extern "rust-call" ABI is experimental and subject to change |
| [22.3 Fn_FnMut_FnOnce.md:52](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.3%20Fn_FnMut_FnOnce.md#L52) | 失败 | E0425 cannot find type `ClosureEnvironment` in this scope |
| [22.3 Fn_FnMut_FnOnce.md:64](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.3%20Fn_FnMut_FnOnce.md#L64) | 失败 | E0382 use of moved value: `c` |
| [22.3 Fn_FnMut_FnOnce.md:76](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.3%20Fn_FnMut_FnOnce.md#L76) | 失败 | E0599 the method `call_once` exists for struct `ClosureEnvironment`, but its trait bounds were not satisfied |
| [22.4 闭包与泛型.md:29](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L29) | 失败 | E0308 mismatched types |
| [22.4 闭包与泛型.md:44](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L44) | 失败 | unknown start of token: ` |
| [22.4 闭包与泛型.md:66](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L66) | 失败 | E0782 expected a type, found a trait |
| [22.4 闭包与泛型.md:99](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L99) | 失败 | E0308 mismatched types |
| [22.5 闭包与生命周期.md:21](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.5%20%E9%97%AD%E5%8C%85%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md#L21) | 失败 | expected item, found keyword `let` |
| [index.md:23](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L23) | 失败 | expected item, found keyword `let` |
| [index.md:33](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L33) | 失败 | expected item, found keyword `let` |
| [index.md:43](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L43) | 失败 | expected item, found keyword `let` |
| [index.md:53](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L53) | 失败 | E0434 can't capture dynamic environment in a fn item |
| [index.md:72](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L72) | 失败 | prefix `can` is unknown |
| [index.md:117](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L117) | 失败 | expected one of `!`, `(`, `+`, `,`, `::`, `&lt;`, or `{`, found `&lt;eof&gt;` |
| [index.md:128](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L128) | 失败 | expected item, found keyword `let` |

## 第 23 章 动态分派和静态分派

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [23.2 object safe.md:13](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L13) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [23.2 object safe.md:37](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L37) | 失败 | unknown start of token: ` |
| [23.2 object safe.md:49](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L49) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [23.2 object safe.md:79](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L79) | 失败 | unexpected token: `...` |
| [23.2 object safe.md:92](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L92) | 失败 | expected item, found keyword `let` |
| [23.2 object safe.md:106](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L106) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [23.2 object safe.md:120](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L120) | 失败 | unknown start of token: ` |
| [23.2 object safe.md:132](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L132) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [23.2 object safe.md:159](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L159) | 失败 | free function without a body |
| [23.2 object safe.md:191](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L191) | 失败 | E0405 cannot find trait `SomeTrait` in this scope |
| [23.3 impl trait.md:21](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L21) | 失败 | expected one of `-&gt;`, `where`, or `{`, found keyword `fn` |
| [23.3 impl trait.md:34](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L34) | 失败 | expected one of `!`, `+`, `::`, `where`, or `{`, found `&lt;eof&gt;` |
| [23.3 impl trait.md:44](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L44) | 失败 | expected one of `!`, `+`, `::`, `where`, or `{`, found `&lt;eof&gt;` |
| [23.3 impl trait.md:56](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L56) | 失败 | missing `fn` or `struct` for function or struct definition |
| [23.3 impl trait.md:85](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L85) | 失败 | E0308 mismatched types |
| [23.3 impl trait.md:102](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L102) | 失败 | unknown start of token: ` |
| [23.3 impl trait.md:113](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L113) | 失败 | expected item, found keyword `let` |
| [23.3 impl trait.md:132](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L132) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [23.3 impl trait.md:167](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L167) | 失败 | E0658 `impl Trait` in type aliases is unstable |
| [23.3 impl trait.md:177](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L177) | 失败 | E0405 cannot find trait `MyTrait` in this scope |
| [23.3 impl trait.md:189](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L189) | 失败 | E0405 cannot find trait `MyTrait` in this scope |
| [23.3 impl trait.md:203](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L203) | 失败 | unexpected token: `...` |
| [23.3 impl trait.md:213](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L213) | 失败 | expected one of `+`, `::`, `where`, or `{`, found `&lt;eof&gt;` |
| [23.3 impl trait.md:223](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L223) | 失败 | expected one of `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [23.3 impl trait.md:233](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L233) | 失败 | expected one of `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [index.md:36](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/index.md#L36) | 失败 | E0428 the name `test` is defined multiple times |
| [index.md:49](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/index.md#L49) | 失败 | E0405 cannot find trait `Bird` in this scope |
| [index.md:61](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/index.md#L61) | 失败 | E0425 cannot find type `Duck` in this scope |
| [index.md:79](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/index.md#L79) | 失败 | E0405 cannot find trait `Bird` in this scope |

## 第 24 章 集合与迭代器

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [24.1 集合.md:137](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L137) | 失败 | non-item in item list |
| [24.1 集合.md:154](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L154) | 失败 | E0404 cannot find trait `Hash` in this scope |
| [24.1 集合.md:224](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L224) | 失败 | expected item, found keyword `if` |
| [24.1 集合.md:232](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L232) | 失败 | expected one of `!` or `::`, found `.` |
| [24.1 集合.md:281](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L281) | 失败 | E0425 cannot find type `RandomState` in this scope |
| [24.1 集合.md:362](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.1%20%E9%9B%86%E5%90%88.md#L362) | 失败 | E0425 cannot find type `BTreeMap` in this scope |
| [24.2 迭代器.md:5](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L5) | 失败 | non-item in item list |
| [24.2 迭代器.md:139](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L139) | 失败 | expected item, found keyword `let` |
| [24.2 迭代器.md:187](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L187) | 失败 | E0425 cannot find type `BTreeMap` in this scope |
| [24.2 迭代器.md:222](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L222) | 失败 | expected one of `!` or `::`, found `-` |
| [24.2 迭代器.md:228](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L228) | 失败 | E0658 the `prelude_import` attribute is for use by rustc only |
| [24.2 迭代器.md:262](docs/%E7%AC%AC%2024%20%E7%AB%A0%20%E9%9B%86%E5%90%88%E4%B8%8E%E8%BF%AD%E4%BB%A3%E5%99%A8/24.2%20%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L262) | 失败 | expected item, found keyword `for` |

## 第 25 章 协程

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [25.1 基础简介.md:33](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L33) | 失败 | expected item, found keyword `let` |
| [25.1 基础简介.md:62](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L62) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.1 基础简介.md:92](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L92) | 失败 | E0658 yield syntax is experimental |
| [25.1 基础简介.md:111](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L111) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [25.1 基础简介.md:132](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L132) | 失败 | expected item, found keyword `async` |
| [25.1 基础简介.md:156](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L156) | 失败 | E0425 cannot find function `download_file` in this scope |
| [25.1 基础简介.md:211](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L211) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [25.2 对比迭代器.md:5](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.2%20%E5%AF%B9%E6%AF%94%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L5) | 失败 | non-item in item list |
| [25.2 对比迭代器.md:16](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.2%20%E5%AF%B9%E6%AF%94%E8%BF%AD%E4%BB%A3%E5%99%A8.md#L16) | 失败 | expected item, found keyword `while` |
| [25.4 协程.md:26](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L26) | 失败 | E0425 cannot find type `Pin` in this scope |
| [25.4 协程.md:47](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L47) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [25.4 协程.md:120](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L120) | 失败 | expected item, found keyword `let` |
| [25.4 协程.md:143](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L143) | 失败 | expected item, found keyword `let` |
| [25.4 协程.md:154](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L154) | 失败 | E0405 cannot find trait `Coroutine` in this scope |
| [25.4 协程.md:220](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L220) | 失败 | expected item, found keyword `let` |
| [25.4 协程.md:256](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L256) | 失败 | expected one of `-&gt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [25.5 异步.md:15](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.5%20%E5%BC%82%E6%AD%A5.md#L15) | 失败 | E0432 unresolved import `crate::ops` |
| [25.5 异步.md:96](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.5%20%E5%BC%82%E6%AD%A5.md#L96) | 失败 | incorrect use of `await` |
| [25.5 异步.md:114](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.5%20%E5%BC%82%E6%AD%A5.md#L114) | 失败 | expected identifier, found keyword `await` |
| [25.5 异步.md:137](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.5%20%E5%BC%82%E6%AD%A5.md#L137) | 失败 | E0425 cannot find function `fetch` in this scope |
| [25.5 异步.md:176](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.5%20%E5%BC%82%E6%AD%A5.md#L176) | 失败 | E0277 `()` is not a future |
| [25.6 Coroutine 与 Future.md:30](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.6%20Coroutine%20%E4%B8%8E%20Future.md#L30) | 失败 | E0425 cannot find function `some_other_future` in this scope |
| [25.6 Coroutine 与 Future.md:53](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.6%20Coroutine%20%E4%B8%8E%20Future.md#L53) | 失败 | E0405 cannot find trait `Coroutine` in this scope |

## 第 26 章 标准库简介

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [26.1 类型转换.md:35](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L35) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found keyword `impl` |
| [26.1 类型转换.md:86](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L86) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [26.1 类型转换.md:96](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L96) | 失败 | E0425 cannot find type `HashMap` in this scope |
| [26.1 类型转换.md:111](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L111) | 失败 | E0425 cannot find type `BTreeMap` in this scope |
| [26.1 类型转换.md:130](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L130) | 失败 | expected one of `:`, `@`, or `\|`, found `)` |
| [26.1 类型转换.md:146](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L146) | 失败 | E0210 type parameter `T` must be used as an argument to some local type (e.g., `MyStruct&lt;T&gt;`) |
| [26.1 类型转换.md:165](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L165) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [26.1 类型转换.md:197](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L197) | 失败 | E0210 type parameter `T` must be used as an argument to some local type (e.g., `MyStruct&lt;T&gt;`) |
| [26.1 类型转换.md:218](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L218) | 失败 | E0117 only traits defined in the current crate can be implemented for arbitrary types |
| [26.1 类型转换.md:263](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L263) | 失败 | E0433 cannot find module or crate `fmt` in this scope |
| [26.1 类型转换.md:285](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L285) | 失败 | E0277 the size for values of type `Self` cannot be known at compilation time |
| [26.1 类型转换.md:300](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.1%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.md#L300) | 失败 | unknown start of token: \u{2026} |
| [26.2 运算符重载.md:24](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.2%20%E8%BF%90%E7%AE%97%E7%AC%A6%E9%87%8D%E8%BD%BD.md#L24) | 失败 | E0405 cannot find trait `Add` in this scope |
| [26.2 运算符重载.md:36](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.2%20%E8%BF%90%E7%AE%97%E7%AC%A6%E9%87%8D%E8%BD%BD.md#L36) | 失败 | expected one of `!`, `(`, `::`, `&lt;`, `where`, or `{`, found keyword `type` |
| [26.2 运算符重载.md:86](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.2%20%E8%BF%90%E7%AE%97%E7%AC%A6%E9%87%8D%E8%BD%BD.md#L86) | 失败 | E0405 cannot find trait `Add` in this scope |
| [26.3 I_O.md:40](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.3%20I_O.md#L40) | 失败 | expected one of `-&gt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [26.3 I_O.md:50](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.3%20I_O.md#L50) | 失败 | expected one of `!`, `(`, `+`, `::`, `&lt;`, `where`, or `{`, found `&lt;eof&gt;` |
| [26.4 Any.md:11](docs/%E7%AC%AC%2026%20%E7%AB%A0%20%E6%A0%87%E5%87%86%E5%BA%93%E7%AE%80%E4%BB%8B/26.4%20Any.md#L11) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |

## 第 27 章 线程安全（第四部分 线程安全）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [27.3 免数据竞争.md:11](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L11) | 失败 | E0373 closure may outlive the current function, but it borrows `health`, which is owned by the current function |
| [27.3 免数据竞争.md:37](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L37) | 失败 | E0373 closure may outlive the current function, but it borrows `v`, which is owned by the current function |
| [27.3 免数据竞争.md:56](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L56) | 失败 | expected one of `!` or `::`, found `:` |
| [27.4 Send & Sync.md:20](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.4%20Send%20%26%20Sync.md#L20) | 失败 | expected one of `+`, `,`, or `{`, found `&lt;eof&gt;` |

## 第 28 章 详解 Send 和 Sync

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [28.3 自动推理.md:30](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.3%20%E8%87%AA%E5%8A%A8%E6%8E%A8%E7%90%86.md#L30) | 失败 | E0658 auto traits are experimental and possibly buggy |
| [28.3 自动推理.md:41](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.3%20%E8%87%AA%E5%8A%A8%E6%8E%A8%E7%90%86.md#L41) | 失败 | E0198 negative impls cannot be unsafe |
| [28.3 自动推理.md:56](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.3%20%E8%87%AA%E5%8A%A8%E6%8E%A8%E7%90%86.md#L56) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [28.3 自动推理.md:86](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.3%20%E8%87%AA%E5%8A%A8%E6%8E%A8%E7%90%86.md#L86) | 失败 | E0198 negative impls cannot be unsafe |

## 第 29 章 状态共享

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [29.1 Arc.md:46](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.1%20Arc.md#L46) | 失败 | E0425 cannot find type `Arc` in this scope |
| [29.2 Mutex.md:54](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.2%20Mutex.md#L54) | 失败 | E0425 cannot find type `Mutex` in this scope |
| [29.2 Mutex.md:64](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.2%20Mutex.md#L64) | 失败 | expected one of `!`, `+`, `::`, `where`, or `{`, found `&lt;eof&gt;` |
| [29.2 Mutex.md:72](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.2%20Mutex.md#L72) | 失败 | E0425 cannot find type `PoisonError` in this scope |
| [29.8 全局变量.md:5](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.8%20%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F.md#L5) | 失败 | E0133 use of mutable static is unsafe and requires unsafe function or block |
| [29.8 全局变量.md:25](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.8%20%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F.md#L25) | 失败 | E0277 `Cell&lt;i32&gt;` cannot be shared between threads safely |
| [29.9 线程局部存储.md:52](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.9%20%E7%BA%BF%E7%A8%8B%E5%B1%80%E9%83%A8%E5%AD%98%E5%82%A8.md#L52) | 失败 | expected one of `!` or `::`, found `thread` |

## 第 30 章 管道

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [30.1 异步管道.md:27](docs/%E7%AC%AC%2030%20%E7%AB%A0%20%E7%AE%A1%E9%81%93/30.1%20%E5%BC%82%E6%AD%A5%E7%AE%A1%E9%81%93.md#L27) | 失败 | expected one of `where` or `{`, found `&lt;eof&gt;` |

## 第 31 章 第三方并行开发库

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [31.1 threadpool.md:7](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.1%20threadpool.md#L7) | 失败 | this file contains an unclosed delimiter |
| [31.2 scoped-threadpool.md:9](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.2%20scoped-threadpool.md#L9) | 失败 | expected one of `+`, `,`, or `{`, found `&lt;eof&gt;` |
| [31.2 scoped-threadpool.md:20](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.2%20scoped-threadpool.md#L20) | 失败 | E0463 can't find crate for `scoped_threadpool` |
| [31.2 scoped-threadpool.md:47](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.2%20scoped-threadpool.md#L47) | 失败 | expected one of `!`, `(`, `+`, `,`, `::`, `&lt;`, or `{`, found `&lt;eof&gt;` |
| [31.3 parking_lot.md:7](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.3%20parking_lot.md#L7) | 失败 | E0432 unresolved import `parking_lot` |
| [31.4 crossbeam.md:9](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.4%20crossbeam.md#L9) | 失败 | E0463 can't find crate for `crossbeam` |
| [31.5 rayon.md:7](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L7) | 失败 | expected one of `!` or `::`, found `[` |
| [31.5 rayon.md:19](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L19) | 失败 | expected one of `!` or `::`, found `(` |
| [31.5 rayon.md:41](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L41) | 失败 | E0433 cannot find module or crate `rayon` in this scope |
| [31.5 rayon.md:58](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L58) | 失败 | E0433 cannot find module or crate `rayon` in this scope |
| [31.5 rayon.md:72](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L72) | 失败 | E0433 cannot find module or crate `rayon` in this scope |
| [31.5 rayon.md:113](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L113) | 失败 | E0433 cannot find module or crate `rayon` in this scope |

## 第 32 章 项目和模块（第五部分 实用设施）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [32.1 cargo.md:84](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.1%20cargo.md#L84) | 失败 | E0432 unresolved import `good_bye` |
| [32.2 项目配置.md:106](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L106) | 失败 | E0463 can't find crate for `hello` |
| [32.2 项目配置.md:277](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L277) | 失败 | environment variable `GIT_VERSION` not defined at compile time |
| [32.2 项目配置.md:299](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L299) | 失败 | E0432 unresolved import `chrono` |
| [32.2 项目配置.md:350](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L350) | 失败 | unknown start of token: \u{2013} |
| [32.2 项目配置.md:358](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L358) | 失败 | unknown start of token: \u{2019} |
| [32.2 项目配置.md:394](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L394) | 失败 | environment variable `OUT_DIR` not defined at compile time |
| [32.3 模块管理.md:34](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L34) | 失败 | unknown start of token: \u{2026} |
| [32.3 模块管理.md:46](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L46) | 失败 | expected item, found `...` |
| [32.3 模块管理.md:89](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L89) | 失败 | E0583 file not found for module `caller` |
| [32.3 模块管理.md:107](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L107) | 失败 | E0583 file not found for module `caller` |
| [32.3 模块管理.md:145](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L145) | 失败 | E0433 cannot find `top_mod1` in the list of imported crates |
| [32.3 模块管理.md:177](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L177) | 失败 | E0433 cannot find `top_mod1` in the list of imported crates |
| [32.3 模块管理.md:206](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L206) | 失败 | visibility `pub(crate)` is not followed by an item |
| [32.3 模块管理.md:251](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L251) | 失败 | expected one of `!` or `::`, found `(` |
| [32.3 模块管理.md:309](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L309) | 失败 | E0433 cannot find module or crate `a` in this scope |
| [32.3 模块管理.md:340](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L340) | 失败 | expected one of `::`, `;`, or `as`, found `-` |
| [32.3 模块管理.md:345](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L345) | 失败 | E0432 unresolved import `my_lib` |
| [32.3 模块管理.md:360](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L360) | 失败 | E0432 unresolved import `my_lib` |

## 第 33 章 错误处理

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [33.1 基本错误处理.md:5](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L5) | 失败 | E0405 cannot find trait `Pattern` in this scope |
| [33.1 基本错误处理.md:13](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L13) | 失败 | expected one of `!` or `::`, found `*` |
| [33.1 基本错误处理.md:21](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L21) | 失败 | expected one of `!` or `::`, found `*` |
| [33.1 基本错误处理.md:27](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L27) | 失败 | expected one of `!` or `::`, found `fopen_s` |
| [33.1 基本错误处理.md:37](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L37) | 失败 | E0425 cannot find type `File` in this scope |
| [33.1 基本错误处理.md:45](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L45) | 失败 | E0433 cannot find module or crate `result` in this scope |
| [33.1 基本错误处理.md:62](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.1%20%E5%9F%BA%E6%9C%AC%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.md#L62) | 失败 | E0405 cannot find trait `FromStr` in this scope |
| [33.2 组合错误类型.md:7](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.2%20%E7%BB%84%E5%90%88%E9%94%99%E8%AF%AF%E7%B1%BB%E5%9E%8B.md#L7) | 失败 | expected one of `!`, `(`, `+`, `,`, `::`, `&lt;`, or `{`, found keyword `fn` |
| [33.3 问号运算符.md:40](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L40) | 失败 | E0425 cannot find type `Path` in this scope |
| [33.3 问号运算符.md:113](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L113) | 失败 | expected item, found keyword `match` |
| [33.3 问号运算符.md:125](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L125) | 失败 | E0433 cannot find module or crate `ops` in this scope |
| [33.3 问号运算符.md:166](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L166) | 失败 | found removed `do catch` syntax |
| [33.3 问号运算符.md:192](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L192) | 失败 | unexpected token: `...` |
| [33.4 main 函数中使用问号运算符.md:21](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.4%20main%20%E5%87%BD%E6%95%B0%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L21) | 失败 | E0433 cannot find `termination` in the list of imported crates |
| [33.5 新的 Failure 库.md:23](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.5%20%E6%96%B0%E7%9A%84%20Failure%20%E5%BA%93.md#L23) | 失败 | E0463 can't find crate for `failure` |

## 第 34 章 FFI

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [34.1 什么是 FFI.md:18](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.1%20%E4%BB%80%E4%B9%88%E6%98%AF%20FFI.md#L18) | 失败 | expected item, found `-` |
| [34.1 什么是 FFI.md:36](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.1%20%E4%BB%80%E4%B9%88%E6%98%AF%20FFI.md#L36) | 失败 | expected one of `!` or `::`, found `host` |
| [34.1 什么是 FFI.md:46](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.1%20%E4%BB%80%E4%B9%88%E6%98%AF%20FFI.md#L46) | 失败 | expected one of `!` or `::`, found `target` |
| [34.2 从 C 调用 Rust 库.md:7](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.2%20%E4%BB%8E%20C%20%E8%B0%83%E7%94%A8%20Rust%20%E5%BA%93.md#L7) | 失败 | E0425 cannot find type `c_char` in this scope |
| [34.2 从 C 调用 Rust 库.md:35](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.2%20%E4%BB%8E%20C%20%E8%B0%83%E7%94%A8%20Rust%20%E5%BA%93.md#L35) | 失败 | expected one of `!` or `::`, found `-` |
| [34.2 从 C 调用 Rust 库.md:45](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.2%20%E4%BB%8E%20C%20%E8%B0%83%E7%94%A8%20Rust%20%E5%BA%93.md#L45) | 失败 | expected one of `!` or `[`, found `include` |
| [34.2 从 C 调用 Rust 库.md:66](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.2%20%E4%BB%8E%20C%20%E8%B0%83%E7%94%A8%20Rust%20%E5%BA%93.md#L66) | 失败 | expected one of `!` or `::`, found `-` |
| [34.3 从 Rust 调用 C 库.md:7](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.3%20%E4%BB%8E%20Rust%20%E8%B0%83%E7%94%A8%20C%20%E5%BA%93.md#L7) | 失败 | expected one of `!` or `::`, found `add_square` |
| [34.3 从 Rust 调用 C 库.md:20](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.3%20%E4%BB%8E%20Rust%20%E8%B0%83%E7%94%A8%20C%20%E5%BA%93.md#L20) | 失败 | expected one of `!` or `::`, found `-` |
| [34.3 从 Rust 调用 C 库.md:31](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.3%20%E4%BB%8E%20Rust%20%E8%B0%83%E7%94%A8%20C%20%E5%BA%93.md#L31) | 失败 | extern blocks must be unsafe |
| [34.3 从 Rust 调用 C 库.md:51](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.3%20%E4%BB%8E%20Rust%20%E8%B0%83%E7%94%A8%20C%20%E5%BA%93.md#L51) | 失败 | expected one of `!` or `::`, found `-` |
| [34.4 更复杂的数据类型.md:12](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.4%20%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L12) | 失败 | expected item, found `[` |
| [34.4 更复杂的数据类型.md:32](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.4%20%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L32) | 失败 | unsafe attribute used without unsafe |
| [34.4 更复杂的数据类型.md:63](docs/%E7%AC%AC%2034%20%E7%AB%A0%20FFI/34.4%20%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L63) | 失败 | expected one of `!` or `[`, found `include` |

## 第 35 章 文档和测试

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [35.1 文档.md:31](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.1%20%E6%96%87%E6%A1%A3.md#L31) | 失败 | expected item after doc comment |
| [35.1 文档.md:40](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.1%20%E6%96%87%E6%A1%A3.md#L40) | 失败 | expected item after doc comment |
| [35.1 文档.md:53](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.1%20%E6%96%87%E6%A1%A3.md#L53) | 失败 | E0557 feature has been removed |
| [35.2 测试.md:21](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L21) | 失败 | expected item after attributes |
| [35.2 测试.md:146](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L146) | 失败 | E0554 `#![feature]` may not be used on the stable release channel |
| [35.2 测试.md:170](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L170) | 失败 | unknown start of token: \u{2026} |
| [35.2 测试.md:244](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L244) | 失败 | E0583 file not found for module `common` |

## notes

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [marker trait.md:128](docs/notes/marker%20trait.md#L128) | 失败 | expected one of `#`, `{`, lifetime, or type, found `&lt;eof&gt;` |
| [marker trait.md:158](docs/notes/marker%20trait.md#L158) | 失败 | expected item, found keyword `let` |
| [关于类型的简短说明.md:37](docs/notes/%E5%85%B3%E4%BA%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%AE%80%E7%9F%AD%E8%AF%B4%E6%98%8E.md#L37) | 失败 | E0308 mismatched types |
| [关于类型的简短说明.md:122](docs/notes/%E5%85%B3%E4%BA%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%AE%80%E7%9F%AD%E8%AF%B4%E6%98%8E.md#L122) | 失败 | E0382 borrow of moved value: `a` |
| [基础知识.md:150](docs/notes/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#L150) | 失败 | expected item, found keyword `let` |
| [基础知识.md:273](docs/notes/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#L273) | 失败 | character constant must be escaped: `'` |
| [基础知识.md:335](docs/notes/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#L335) | 失败 | character constant must be escaped: `'` |
| [基础知识.md:431](docs/notes/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md#L431) | 失败 | E0277 the size for values of type `[i32]` cannot be known at compilation time |
| [详解内存布局.md:1386](docs/notes/%E8%AF%A6%E8%A7%A3%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80.md#L1386) | 失败 | macro expansion ignores `{` and any tokens following |
| [详解所有权和借用.md:270](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L270) | 失败 | E0382 borrow of moved value: `v` |
| [详解所有权和借用.md:387](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L387) | 失败 | expected item, found keyword `let` |
| [详解所有权和借用.md:437](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L437) | 失败 | E0382 borrow of moved value: `s1` |
| [详解所有权和借用.md:519](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L519) | 失败 | E0382 borrow of moved value: `s1` |
| [详解所有权和借用.md:649](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L649) | 失败 | E0382 borrow of moved value: `v` |
| [详解所有权和借用.md:744](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L744) | 失败 | E0596 cannot borrow `x` as mutable, as it is not declared as mutable |
| [详解所有权和借用.md:789](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L789) | 失败 | E0597 `y` does not live long enough |
| [详解所有权和借用.md:812](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L812) | 失败 | E0499 cannot borrow `s` as mutable more than once at a time |
| [错误处理的多种方式.md:9](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L9) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:24](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L24) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:46](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L46) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:59](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L59) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:75](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L75) | 失败 | expected item, found keyword `if` |
| [错误处理的多种方式.md:92](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L92) | 失败 | E0433 cannot find module or crate `io` in this scope |
| [错误处理的多种方式.md:107](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L107) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:123](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L123) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:140](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L140) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:154](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L154) | 失败 | E0277 `?` couldn't convert the error to `AppError` |
| [错误处理的多种方式.md:199](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L199) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:223](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L223) | 失败 | expected item, found keyword `let` |
| [错误处理的多种方式.md:238](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L238) | 失败 | E0432 unresolved import `thiserror` |
| [错误处理的多种方式.md:252](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L252) | 失败 | E0432 unresolved import `anyhow` |
