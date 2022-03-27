# 标签共有属性

这里从[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)中挑选几个常用的属性展示

## class

一个以空格分隔的元素的类名（classes ）列表，它允许 CSS 和 Javascript 通过类选择器 (class selectors) 或DOM方法( `document.getElementsByClassName`)来选择和访问特定的元素。

```html
<button class="btn"></button>
```

## **draggable**

一种枚举属性，指示是否可以 使用 [Drag and Drop API (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) 拖动元素。它可以有以下的值：

- `true`, 这表明元素可能被拖动
- `false`, 这表明元素可能不会被拖动

```html
<div draggable>可以拖拽的元素</div>
```

## **hidden**

它可用于隐藏在登录过程完成之前无法使用的页面元素。浏览器不会呈现此类元素。

## **style**

含要应用于元素的CSS样式声明。 请注意，建议在单独的文件中定义样式。 该属性和`<style>`元素主要用于快速样式化，例如用于测试目的。

