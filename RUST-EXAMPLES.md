# Rust 代码块编译清单

工具链：`rustc 1.100.0 (0ef1bc386 2026-11-09)`；默认 Edition 2024。
扫描 219 篇 Markdown，提取 835 个 Rust 代码块。
通过 679 个、失败 0 个、预期失败 111 个、意外通过 0 个、Nightly 配置 15 个、Cargo 依赖 27 个、显式忽略 3 个。

先独立编译；没有 `fn main` 的片段先当库编译，失败后再尝试放进 `main`。仅检查编译，不链接、不运行、不安装依赖。
「失败」含有教学上刻意报错但未标注的例子、缺少上下文的片段、依赖其他 crate 的示例和真正需要更新的代码，不能直接视为缺陷。

## 第 2 章 变量和类型

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [2.1 变量声明.md:32](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L32) | 预期失败 | E0384 cannot assign twice to immutable variable `x` |
| [2.1 变量声明.md:69](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L69) | 预期失败 | E0381 used binding `x` isn't initialized |
| [2.1 变量声明.md:107](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L107) | 预期失败 | in expressions, `_` can only be used on the left-hand side of an assignment |
| [2.1 变量声明.md:289](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.1%20%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.md#L289) | 预期失败 | E0658 cannot call conditionally-const method `Vec::&lt;i32&gt;::push` in statics |
| [2.2 基本数据类型.md:268](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L268) | 预期失败 | E0308 mismatched types |
| [2.2 基本数据类型.md:516](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L516) | 预期失败 | E0308 mismatched types |
| [2.2 基本数据类型.md:541](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.2%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L541) | 预期失败 | E0606 casting `&str` as `u32` is invalid |
| [2.3 复合数据类型.md:252](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L252) | 预期失败 | E0308 mismatched types |
| [2.3 复合数据类型.md:354](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L354) | 预期失败 | E0370 enum discriminant overflowed |
| [2.3 复合数据类型.md:496](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L496) | 预期失败 | E0308 mismatched types |
| [2.3 复合数据类型.md:550](docs/%E7%AC%AC%202%20%E7%AB%A0%20%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/2.3%20%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md#L550) | 预期失败 | E0072 recursive type `Recursive` has infinite size |

## 第 3 章 语句和表达式

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [3.2 表达式.md:30](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.2%20%E8%A1%A8%E8%BE%BE%E5%BC%8F.md#L30) | 预期失败 | comparison operators cannot be chained |
| [3.3 if-else.md:64](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L64) | 预期失败 | E0317 `if` may be missing an `else` clause |
| [3.3 if-else.md:234](docs/%E7%AC%AC%203%20%E7%AB%A0%20%E8%AF%AD%E5%8F%A5%E5%92%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F/3.3%20if-else.md#L234) | 预期失败 | E0381 used binding `x` is possibly-uninitialized |

## 第 4 章 函数

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [4.1 简介.md:46](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L46) | 预期失败 | E0308 mismatched types |
| [4.1 简介.md:90](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.1%20%E7%AE%80%E4%BB%8B.md#L90) | 预期失败 | E0308 mismatched types |
| [4.4 const fn.md:29](docs/%E7%AC%AC%204%20%E7%AB%A0%20%E5%87%BD%E6%95%B0/4.4%20const%20fn.md#L29) | 预期失败 | E0015 cannot call non-const method `&lt;T as Into&lt;i32&gt;&gt;::into` in constant functions |

## 第 5 章 trait

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [5.3 扩展方法.md:49](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.3%20%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95.md#L49) | 预期失败 | E0782 expected a type, found a trait |
| [5.4 完整函数调用语法.md:11](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.4%20%E5%AE%8C%E6%95%B4%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E8%AF%AD%E6%B3%95.md#L11) | 预期失败 | E0034 multiple applicable items in scope |
| [5.5 trait 约束和继承.md:110](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.5%20trait%20%E7%BA%A6%E6%9D%9F%E5%92%8C%E7%BB%A7%E6%89%BF.md#L110) | 预期失败 | E0277 the trait bound `T: Base` is not satisfied |
| [5.7 trait 别名.md:30](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.7%20trait%20%E5%88%AB%E5%90%8D.md#L30) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [5.8 标准库中常见的 trait 简介.md:98](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.8%20%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%20trait%20%E7%AE%80%E4%BB%8B.md#L98) | 预期失败 | E0277 the trait bound `f32: Ord` is not satisfied |
| [5.9 supertrait.md:59](docs/%E7%AC%AC%205%20%E7%AB%A0%20trait/5.9%20supertrait.md#L59) | 预期失败 | E0277 `Point` doesn't implement `std::fmt::Display` |

## 第 6 章 数组和字符串

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [6.1 数组.md:13](docs/%E7%AC%AC%206%20%E7%AB%A0%20%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2/6.1%20%E6%95%B0%E7%BB%84.md#L13) | 预期失败 | E0308 mismatched types |

## 第 7 章 模式解构

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [7.2 match.md:45](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L45) | 预期失败 | E0004 non-exhaustive patterns: `Direction::North` not covered |
| [7.2 match.md:153](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L153) | 预期失败 | in expressions, `_` can only be used on the left-hand side of an assignment |
| [7.2 match.md:183](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L183) | 预期失败 | E0308 mismatched types |
| [7.2 match.md:334](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L334) | 预期失败 | E0004 non-exhaustive patterns: `i32::MIN..=i32::MAX` not covered |
| [7.2 match.md:459](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L459) | 预期失败 | E0308 mismatched types |
| [7.2 match.md:518](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L518) | 预期失败 | E0384 cannot assign twice to immutable variable `x` |
| [7.2 match.md:535](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L535) | 预期失败 | E0308 mismatched types |
| [7.2 match.md:570](docs/%E7%AC%AC%207%20%E7%AB%A0%20%E6%A8%A1%E5%BC%8F%E8%A7%A3%E6%9E%84/7.2%20match.md#L570) | 预期失败 | E0596 cannot borrow `i` as mutable, as it is not declared as mutable |

## 第 9 章 宏

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [9.1 简介 macro.md:21](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.1%20%E7%AE%80%E4%BB%8B%20macro.md#L21) | 预期失败 | 2 positional arguments in format string, but no arguments were given |
| [9.3 过程宏.md:67](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L67) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译 |
| [9.3 过程宏.md:89](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L89) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：macro-lib |
| [9.3 过程宏.md:122](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L122) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译 |
| [9.3 过程宏.md:136](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L136) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：macro-lib |
| [9.3 过程宏.md:186](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L186) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：quote、syn |
| [9.3 过程宏.md:216](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.3%20%E8%BF%87%E7%A8%8B%E5%AE%8F.md#L216) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：macro-lib |
| [9.4 常用的宏开发库.md:31](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L31) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：proc-macro2、quote |
| [9.4 常用的宏开发库.md:70](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L70) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：macro-lib |
| [9.4 常用的宏开发库.md:86](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L86) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：quote、syn |
| [9.4 常用的宏开发库.md:119](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L119) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：macro-lib |
| [9.4 常用的宏开发库.md:138](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.4%20%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F%E5%BC%80%E5%8F%91%E5%BA%93.md#L138) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：quote |
| [9.5 宏的实践与哲学.md:50](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L50) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [9.5 宏的实践与哲学.md:291](docs/%E7%AC%AC%209%20%E7%AB%A0%20%E5%AE%8F/9.5%20%E5%AE%8F%E7%9A%84%E5%AE%9E%E8%B7%B5%E4%B8%8E%E5%93%B2%E5%AD%A6.md#L291) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：serde、serde_json |

## 第 11 章 所有权和移动语义

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [11.1 什么是所有权.md:53](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.1%20%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%80%E6%9C%89%E6%9D%83.md#L53) | 预期失败 | E0382 borrow of moved value: `s` |
| [11.3 复制语义.md:28](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.3%20%E5%A4%8D%E5%88%B6%E8%AF%AD%E4%B9%89.md#L28) | 预期失败 | E0277 the trait bound `Foo: Clone` is not satisfied |
| [11.5 Clone VS Copy.md:33](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.5%20Clone%20VS%20Copy.md#L33) | 预期失败 | E0382 borrow of moved value: `t1` |
| [11.6 析构函数.md:97](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L97) | 预期失败 | E0040 explicit use of destructor method |
| [11.6 析构函数.md:119](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L119) | 预期失败 | E0382 borrow of moved value: `v` |
| [11.6 析构函数.md:229](docs/%E7%AC%AC%2011%20%E7%AB%A0%20%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/11.6%20%E6%9E%90%E6%9E%84%E5%87%BD%E6%95%B0.md#L229) | 预期失败 | E0184 the trait `Copy` cannot be implemented for this type; the type has a destructor |

## 第 12 章 借用和生命周期

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [12.2 借用.md:26](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.2%20%E5%80%9F%E7%94%A8.md#L26) | 预期失败 | E0596 cannot borrow `*v` as mutable, as it is behind a `&` reference |
| [12.3 借用规则.md:94](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.3%20%E5%80%9F%E7%94%A8%E8%A7%84%E5%88%99.md#L94) | 预期失败 | E0506 cannot assign to `x` because it is borrowed |
| [12.4 生命周期标记.md:44](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L44) | 预期失败 | lifetime may not live long enough |
| [12.4 生命周期标记.md:148](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.4%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L148) | 预期失败 | E0597 `n` does not live long enough |
| [12.5 省略生命周期标记.md:25](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L25) | 预期失败 | E0597 `c` does not live long enough |
| [12.5 省略生命周期标记.md:83](docs/%E7%AC%AC%2012%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E5%92%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/12.5%20%E7%9C%81%E7%95%A5%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%A0%87%E8%AE%B0.md#L83) | 预期失败 | E0106 missing lifetime specifier |

## 第 13 章 借用检查

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [13.1 编译错误示例.md:27](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L27) | 预期失败 | E0506 cannot assign to `i` because it is borrowed |
| [13.1 编译错误示例.md:64](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L64) | 预期失败 | E0503 cannot use `i` because it was mutably borrowed |
| [13.1 编译错误示例.md:84](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L84) | 预期失败 | E0506 cannot assign to `i` because it is borrowed |
| [13.1 编译错误示例.md:106](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L106) | 预期失败 | E0499 cannot borrow `i` as mutable more than once at a time |
| [13.1 编译错误示例.md:135](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.1%20%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF%E7%A4%BA%E4%BE%8B.md#L135) | 预期失败 | E0502 cannot borrow `s` as mutable because it is also borrowed as immutable |
| [13.2 内存不安全示例：修改枚举.md:22](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.2%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E4%BF%AE%E6%94%B9%E6%9E%9A%E4%B8%BE.md#L22) | 预期失败 | E0506 cannot assign to `x` because it is borrowed |
| [13.3 内存不安全示例：迭代器失效.md:27](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.3%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%A4%B1%E6%95%88.md#L27) | 预期失败 | E0502 cannot borrow `arr` as mutable because it is also borrowed as immutable |
| [13.4 内存不安全示例：悬空指针.md:13](docs/%E7%AC%AC%2013%20%E7%AB%A0%20%E5%80%9F%E7%94%A8%E6%A3%80%E6%9F%A5/13.4%20%E5%86%85%E5%AD%98%E4%B8%8D%E5%AE%89%E5%85%A8%E7%A4%BA%E4%BE%8B%EF%BC%9A%E6%82%AC%E7%A9%BA%E6%8C%87%E9%92%88.md#L13) | 预期失败 | E0515 cannot return reference to local variable `s` |

## 第 14 章 NLL

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [14.1 NLL 要解决的问题.md:124](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.1%20NLL%20%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98.md#L124) | 预期失败 | E0502 cannot borrow `text` as mutable because it is also borrowed as immutable |
| [14.2 NLL 的原理.md:9](docs/%E7%AC%AC%2014%20%E7%AB%A0%20NLL/14.2%20NLL%20%E7%9A%84%E5%8E%9F%E7%90%86.md#L9) | 预期失败 | E0499 cannot borrow `data` as mutable more than once at a time |

## 第 15 章 内部可变性

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [15.3 UnsafeCell.md:9](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L9) | 预期失败 | E0594 cannot assign to `self.value`, which is behind a `&` reference |
| [15.3 UnsafeCell.md:36](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L36) | 预期失败 | invalid_reference_casting assigning to `&T` is undefined behavior, consider using an `UnsafeCell` |
| [15.3 UnsafeCell.md:67](docs/%E7%AC%AC%2015%20%E7%AB%A0%20%E5%86%85%E9%83%A8%E5%8F%AF%E5%8F%98%E6%80%A7/15.3%20UnsafeCell.md#L67) | 预期失败 | lifetime may not live long enough |

## 第 16 章 解引用

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [16.3 自动解引用的用处.md:85](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.3%20%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%BC%95%E7%94%A8%E7%9A%84%E7%94%A8%E5%A4%84.md#L85) | 预期失败 | E0382 borrow of moved value: `s` |
| [16.4 有时候需要手动处理.md:30](docs/%E7%AC%AC%2016%20%E7%AB%A0%20%E8%A7%A3%E5%BC%95%E7%94%A8/16.4%20%E6%9C%89%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%A4%84%E7%90%86.md#L30) | 预期失败 | E0308 mismatched types |

## 第 17 章 泄漏

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [17.1 内存泄漏.md:35](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L35) | 预期失败 | E0382 assign to part of moved value: `*node2` |
| [17.1 内存泄漏.md:57](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L57) | 预期失败 | E0382 use of partially moved value: `node1` |
| [17.1 内存泄漏.md:83](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L83) | 预期失败 | E0382 assign of moved value: `node2` |
| [17.1 内存泄漏.md:115](docs/%E7%AC%AC%2017%20%E7%AB%A0%20%E6%B3%84%E6%BC%8F/17.1%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.md#L115) | 预期失败 | E0594 cannot assign to data in an `Rc` |

## 第 18 章 Panic

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [18.3 Panic Safety.md:81](docs/%E7%AC%AC%2018%20%E7%AB%A0%20Panic/18.3%20Panic%20Safety.md#L81) | 预期失败 | E0277 the type `&mut Vec&lt;i32&gt;` may not be safely transferred across an unwind boundary |

## 第 19 章 Unsafe

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [19.3 内置函数.md:69](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.3%20%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.md#L69) | 预期失败 | E0507 cannot move out of `*x` which is behind a mutable reference |
| [19.4 分割借用.md:34](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.4%20%E5%88%86%E5%89%B2%E5%80%9F%E7%94%A8.md#L34) | 预期失败 | E0499 cannot borrow `x[_]` as mutable more than once at a time |
| [19.5 协变.md:76](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L76) | 预期失败 | lifetime may not live long enough |
| [19.5 协变.md:104](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L104) | 预期失败 | lifetime may not live long enough |
| [19.5 协变.md:130](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L130) | 预期失败 | lifetime may not live long enough |
| [19.5 协变.md:144](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L144) | 预期失败 | lifetime may not live long enough |
| [19.5 协变.md:160](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L160) | 预期失败 | E0392 lifetime parameter `'a` is never used |
| [19.5 协变.md:225](docs/%E7%AC%AC%2019%20%E7%AB%A0%20Unsafe/19.5%20%E5%8D%8F%E5%8F%98.md#L225) | 预期失败 | E0597 `local` does not live long enough |

## 第 20 章 Vec 源码分析

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [20.3 内存释放.md:134](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L134) | 预期失败 | E0597 `data` does not live long enough |
| [20.3 内存释放.md:180](docs/%E7%AC%AC%2020%20%E7%AB%A0%20Vec%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/20.3%20%E5%86%85%E5%AD%98%E9%87%8A%E6%94%BE.md#L180) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |

## 第 21 章 泛型（第三部分 高级抽象）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [21.1 数据结构中的泛型.md:57](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.1%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L57) | 预期失败 | E0392 type parameter `T` is never used |
| [21.2 函数中的泛型.md:26](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.2%20%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B.md#L26) | 预期失败 | E0308 mismatched types |
| [21.4 泛型参数约束.md:46](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L46) | 预期失败 | E0369 binary operation `&lt;` cannot be applied to type `T` |
| [21.4 泛型参数约束.md:112](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.4%20%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F.md#L112) | 预期失败 | E0277 can't compare `T` with `T` |
| [21.6 何时使用关联类型.md:14](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.6%20%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8%E5%85%B3%E8%81%94%E7%B1%BB%E5%9E%8B.md#L14) | 预期失败 | E0283 type annotations needed |
| [21.7 泛型特化.md:11](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L11) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [21.7 泛型特化.md:234](docs/%E7%AC%AC%2021%20%E7%AB%A0%20%E6%B3%9B%E5%9E%8B%EF%BC%88%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86%20%E9%AB%98%E7%BA%A7%E6%8A%BD%E8%B1%A1%EF%BC%89/21.7%20%E6%B3%9B%E5%9E%8B%E7%89%B9%E5%8C%96.md#L234) | 预期失败 | E0119 conflicting implementations of trait `Foo` |

## 第 22 章 闭包

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [22.2 move 关键字.md:7](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.2%20move%20%E5%85%B3%E9%94%AE%E5%AD%97.md#L7) | 预期失败 | E0373 closure may outlive the current function, but it borrows `x`, which is owned by the current function |
| [22.3 Fn_FnMut_FnOnce.md:67](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.3%20Fn_FnMut_FnOnce.md#L67) | 预期失败 | E0382 use of moved value: `c` |
| [22.4 闭包与泛型.md:31](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L31) | 预期失败 | E0308 mismatched types |
| [22.4 闭包与泛型.md:103](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.4%20%E9%97%AD%E5%8C%85%E4%B8%8E%E6%B3%9B%E5%9E%8B.md#L103) | 预期失败 | E0308 mismatched types |
| [22.5 闭包与生命周期.md:23](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/22.5%20%E9%97%AD%E5%8C%85%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md#L23) | 预期失败 | E0597 `local` does not live long enough |
| [index.md:58](docs/%E7%AC%AC%2022%20%E7%AB%A0%20%E9%97%AD%E5%8C%85/index.md#L58) | 预期失败 | E0434 can't capture dynamic environment in a fn item |

## 第 23 章 动态分派和静态分派

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [23.2 object safe.md:59](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L59) | 预期失败 | the `foo2` method cannot be invoked on a trait object |
| [23.2 object safe.md:117](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L117) | 预期失败 | E0038 the trait `Clone` is not dyn compatible |
| [23.2 object safe.md:144](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L144) | 预期失败 | E0038 the trait `Double` is not dyn compatible |
| [23.2 object safe.md:221](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.2%20object%20safe.md#L221) | 预期失败 | E0038 the trait `SomeTrait` is not dyn compatible |
| [23.3 impl trait.md:53](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L53) | 预期失败 | E0782 expected a type, found a trait |
| [23.3 impl trait.md:99](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L99) | 预期失败 | E0308 mismatched types |
| [23.3 impl trait.md:196](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L196) | 预期失败 | E0308 `if` and `else` have incompatible types |
| [23.3 impl trait.md:225](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/23.3%20impl%20trait.md#L225) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [index.md:43](docs/%E7%AC%AC%2023%20%E7%AB%A0%20%E5%8A%A8%E6%80%81%E5%88%86%E6%B4%BE%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E6%B4%BE/index.md#L43) | 预期失败 | E0782 expected a type, found a trait |

## 第 25 章 协程

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [25.1 基础简介.md:33](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L33) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.1 基础简介.md:68](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L68) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.1 基础简介.md:99](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L99) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.1 基础简介.md:187](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.1%20%E5%9F%BA%E7%A1%80%E7%AE%80%E4%BB%8B.md#L187) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.4 协程.md:47](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L47) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.4 协程.md:169](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L169) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [25.4 协程.md:246](docs/%E7%AC%AC%2025%20%E7%AB%A0%20%E5%8D%8F%E7%A8%8B/25.4%20%E5%8D%8F%E7%A8%8B.md#L246) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |

## 第 27 章 线程安全（第四部分 线程安全）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [27.3 免数据竞争.md:13](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L13) | 预期失败 | E0373 closure may outlive the current function, but it borrows `health`, which is owned by the current function |
| [27.3 免数据竞争.md:48](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L48) | 预期失败 | E0373 closure may outlive the current function, but it borrows `values`, which is owned by the current function |
| [27.3 免数据竞争.md:59](docs/%E7%AC%AC%2027%20%E7%AB%A0%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%88%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%EF%BC%89/27.3%20%E5%85%8D%E6%95%B0%E6%8D%AE%E7%AB%9E%E4%BA%89.md#L59) | 预期失败 | E0382 borrow of moved value: `values` |

## 第 28 章 详解 Send 和 Sync

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [28.1 什么是 Send.md:23](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.1%20%E4%BB%80%E4%B9%88%E6%98%AF%20Send.md#L23) | 预期失败 | E0277 `Rc&lt;i32&gt;` cannot be sent between threads safely |
| [28.3 自动推理.md:39](docs/%E7%AC%AC%2028%20%E7%AB%A0%20%E8%AF%A6%E8%A7%A3%20Send%20%E5%92%8C%20Sync/28.3%20%E8%87%AA%E5%8A%A8%E6%8E%A8%E7%90%86.md#L39) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |

## 第 29 章 状态共享

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [29.8 全局变量.md:5](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.8%20%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F.md#L5) | 预期失败 | E0133 use of mutable static is unsafe and requires unsafe function or block |
| [29.8 全局变量.md:27](docs/%E7%AC%AC%2029%20%E7%AB%A0%20%E7%8A%B6%E6%80%81%E5%85%B1%E4%BA%AB/29.8%20%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F.md#L27) | 预期失败 | E0277 `Cell&lt;i32&gt;` cannot be shared between threads safely |

## 第 31 章 第三方并行开发库

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [31.1 threadpool.md:11](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.1%20threadpool.md#L11) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：threadpool |
| [31.2 scoped-threadpool.md:33](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.2%20scoped-threadpool.md#L33) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：scoped_threadpool |
| [31.3 parking_lot.md:11](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.3%20parking_lot.md#L11) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：parking_lot |
| [31.4 crossbeam.md:11](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.4%20crossbeam.md#L11) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：crossbeam-channel |
| [31.4 crossbeam.md:36](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.4%20crossbeam.md#L36) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：crossbeam-channel |
| [31.5 rayon.md:42](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L42) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：rayon |
| [31.5 rayon.md:61](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L61) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：rayon |
| [31.5 rayon.md:111](docs/%E7%AC%AC%2031%20%E7%AB%A0%20%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91%E5%BA%93/31.5%20rayon.md#L111) | 预期失败 | E0499 cannot borrow `values` as mutable more than once at a time |

## 第 32 章 项目和模块（第五部分 实用设施）

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [32.1 cargo.md:79](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.1%20cargo.md#L79) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：good_bye |
| [32.2 项目配置.md:294](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L294) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：chrono |
| [32.2 项目配置.md:368](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.2%20%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE.md#L368) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译 |
| [32.3 模块管理.md:64](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L64) | 显式忽略 | 代码块标记为 ignore |
| [32.3 模块管理.md:84](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L84) | 显式忽略 | 代码块标记为 ignore |
| [32.3 模块管理.md:204](docs/%E7%AC%AC%2032%20%E7%AB%A0%20%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%A8%A1%E5%9D%97%EF%BC%88%E7%AC%AC%E4%BA%94%E9%83%A8%E5%88%86%20%E5%AE%9E%E7%94%A8%E8%AE%BE%E6%96%BD%EF%BC%89/32.3%20%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86.md#L204) | 预期失败 | E0603 module `plants` is private |

## 第 33 章 错误处理

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [33.3 问号运算符.md:164](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.3%20%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L164) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [33.4 main 函数中使用问号运算符.md:5](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.4%20main%20%E5%87%BD%E6%95%B0%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%97%AE%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6.md#L5) | 预期失败 | E0277 the `?` operator can only be used in a function that returns `Result` or `Option` (or another type that implements `FromResidual`) |
| [33.5 新的 Failure 库.md:31](docs/%E7%AC%AC%2033%20%E7%AB%A0%20%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/33.5%20%E6%96%B0%E7%9A%84%20Failure%20%E5%BA%93.md#L31) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：thiserror |

## 第 35 章 文档和测试

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [35.1 文档.md:58](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.1%20%E6%96%87%E6%A1%A3.md#L58) | 显式忽略 | 代码块标记为 ignore |
| [35.2 测试.md:125](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L125) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：gcd |
| [35.2 测试.md:141](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L141) | Nightly 配置 | 代码块指定 Nightly，未用稳定版编译 |
| [35.2 测试.md:203](docs/%E7%AC%AC%2035%20%E7%AB%A0%20%E6%96%87%E6%A1%A3%E5%92%8C%E6%B5%8B%E8%AF%95/35.2%20%E6%B5%8B%E8%AF%95.md#L203) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：gcd |

## notes

| 文件与围栏行号 | 结果 | 首条诊断 |
| --- | --- | --- |
| [关于类型的简短说明.md:39](docs/notes/%E5%85%B3%E4%BA%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%AE%80%E7%9F%AD%E8%AF%B4%E6%98%8E.md#L39) | 预期失败 | E0277 the size for values of type `str` cannot be known at compilation time |
| [关于类型的简短说明.md:126](docs/notes/%E5%85%B3%E4%BA%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%AE%80%E7%9F%AD%E8%AF%B4%E6%98%8E.md#L126) | 预期失败 | E0382 borrow of moved value: `a` |
| [详解所有权和借用.md:274](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L274) | 预期失败 | E0382 borrow of moved value: `v` |
| [详解所有权和借用.md:443](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L443) | 预期失败 | E0382 borrow of moved value: `s1` |
| [详解所有权和借用.md:525](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L525) | 预期失败 | E0382 borrow of moved value: `s1` |
| [详解所有权和借用.md:655](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L655) | 预期失败 | E0382 borrow of moved value: `v` |
| [详解所有权和借用.md:761](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L761) | 预期失败 | E0596 cannot borrow `x` as mutable, as it is not declared as mutable |
| [详解所有权和借用.md:806](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L806) | 预期失败 | E0597 `y` does not live long enough |
| [详解所有权和借用.md:829](docs/notes/%E8%AF%A6%E8%A7%A3%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E5%80%9F%E7%94%A8.md#L829) | 预期失败 | E0499 cannot borrow `s` as mutable more than once at a time |
| [错误处理的多种方式.md:280](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L280) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：thiserror |
| [错误处理的多种方式.md:295](docs/notes/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F.md#L295) | Cargo 依赖 | 需要配套 Cargo 项目，未独立编译；依赖：anyhow、serde_json |
