# 语言

我们和英国人交流时要说英语；我们和法国人交流的时候要说法语；那当我们和计算机交流的时候，就需要说计算机的语言，然而计算机只认识 1 和 0，也就是二进制，本质上各种计算机语言，就是通过不同的方式，把人类能读懂的语言翻译给计算机。

> 一套用以编写计算机程序的数字、字符和语法规划，由这些字符和语法规则组成计算机各种指令（或各种语句）。这些就是计算机能接受的语言。 — [百科词条-计算机语言](https://baike.baidu.com/item/计算机语言)

计算机语言的种类非常的多，总的来说可以分成机器语言，汇编语言，高级语言三大类。

机器语言写的程序存在不便于阅读、难以记忆的问题。汇编语言本质上也是直接对硬件操作，由于采用了助记符，相比机器语言更加方便书写与阅读。在高级语言中，将多条汇编程序语句合并成更简洁的编程语句,同时自动完成一些如堆栈、寄存器分配管理等工作，更加方便程序员开发程序。

## 标记语言

标记语言通常用来描述页面，掌握常见用法即可。

- [HTML](./markup-lang/html/README.md)
- [CSS](./markup-lang/css/README.md)

Markdown 也是一门标记语言，主要用来做说明页面，或者笔记，是写简单页面的效率神器。

- [Markdown](./markup-lang/markdown/README.md)
- [Tex](./markup-lang/tex/README.md)

## 高级语言

JavaScript 是一门即时编译的语言，也是动态类型的语言。TypeScript 是 JavaScript 的超集，可以为开发人员提供完善的类型提示。

- [JavaScript](./dynamic/javascript/README.md)
- [TypeScript](./dynamic/typescript/README.md)
- [Python](./dynamic/python/README.md)

下面是基于 JVM(Java Virtual Machine)的静态类型语言。

- [Java](./static/java/README.md)
- [Kotlin](./static/kotlin/README.md)
- Scala :question:

由于 JVM 底层基于 C 和 C++，所以掌握 JVM 需要理解 C、C++、汇编等内容。

- [C](./static/c-lang/README.md) :construction:
- [C++](./static/cpp/README.md) :construction:
- [Rust](./static/rust/README.md)

## 导读

计算机语言产生的目的是把算法以易读且高效的方式表达给计算机，语言的本质是算法和结构设计，所以大多数语言之间的差异并不大，那么在概述一章会着重讲当前语言在**代码风格、数据类型、面向对象、模块化**四个方面方面的差异。
