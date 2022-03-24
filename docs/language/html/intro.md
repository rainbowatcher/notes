# HTML 简介

## 官方文档

不管学什么，看[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML)总是一个好习惯， 也可也可以参考[HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。

## Tag 标签

### 结构示例

[基本结构示例](./demo/base.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

### 文档声明

`<!DOCTYPE html>`是一个文档声明，表示这是一个 HTML 页面。

### head 标签

`<head></head>`是网页的“头部”，用于定义一些特殊的内容，如页面标题、定时刷新、外部文件等。

一般来说，只有 6 个标签能放在 head 标签内。

- title 标签

    定义网页的标题
- meta 标签

    定义页面的特殊信息，如页面关键字、页面描述等。这些信息不是提供给用户看的，而是提供给搜索引擎蜘蛛（如百度蜘蛛、谷歌蜘蛛）看的。

```html
<meta charset="utf-8" />
<meta name="description" content="wolai大部分的编辑操作均支持使用快捷键。 " />
<meta name="apple-mobile-web-app-title" content="wolai" />
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
/>
```

    定时刷新

```html
<!-- 页面会在6秒之后自动跳转到百度 -->
<meta http-equiv="refresh" content="6;url=http://www.baidu.com" />
```
- link 标签

    引入外部样式文件
- style 标签

    style 标签用于定义元素的 CSS 样式，属于内部样式表
- script 标签

    定义页面的 JavaScript 代码
- base 标签

    知道有这么一个标签就行了

### body 标签

`<body></body>`是网页的“身体”。对于一个网页来说，大部分代码都是在这个标签内部编写的。

### 注释

注释语法同 `XML`

```html
<!-- 注释内容 -->
```
