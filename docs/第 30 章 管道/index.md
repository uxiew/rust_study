# 第 30 章 管道

在上一章中，我们主要讲述了如何在多线程中共享变量。Rust 标准库中还提供了另外一种线程之间的通信方式：mpsc。
mpsc 为多生产者单消费者（multiple producer, single consumer）的缩写。

这部分的库存储在 `std::sync::mpsc` 这个模块中，代表的是 Multi-producer，single-consumer FIFO queue，即多生产者单消费者先进先出队列。
这种线程之间的通信方式是在不同线程之间建立一个通信“管道”（channel），一边发送消息，一边接收消息，完成信息交流。

> Do not communicate by sharing memory；instead，share memory by communicating.
> --:
> —— Effective Go
> --:

既然共享数据存在很多麻烦，那在某些场景下，用发消息的方式完成线程之间的通信是更合适的选择。
