# 文本标签

[MDN 官方教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)提供更详细的使用与说明，这里制作简单的标签使用描述。

文本标签属性基本不要使用属性，HTML5 中样式都推荐使用 CSS 来设置。

## 标题

在 HTML 中，共有 6 个级别的标题标签：h1、h2、h3、h4、h5、h6。其中 h 是 header 的缩写。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

效果：

<div class="code-preview">
  <h1>一级标题</h1>
  <h2>二级标题</h2>
  <h3>三级标题</h3>
  <h4>四级标题</h4>
  <h5>五级标题</h5>
  <h6>六级标题</h6>
</div>

## 段落

```html
<p>段落内容</p>
```

## 换行

`<br/>`是自闭合标签，br 是 break（换行）的缩写。

```html
<br />
```

## 缩写

在鼠标移动到缩写名称上时有提示信息。

```html
<p>
  You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
  <abbr title="HyperText Markup Language">HTML</abbr>.
</p>
```

效果：

<div class="code-preview">
<p>You can use <abbr title="层叠样式表">CSS</abbr> to style your <abbr title="超文本标记语言">HTML</abbr>.</p>
</div>

## 链接

```html
<a href="#链接">链接</a>
```

效果：

<div class="code-preview">
<a href="#链接">链接</a>
</div>

## 字体效果

```html
正常文本
<b>粗体</b>
<strong>strong和blod效果一样但是语义有区别</strong>
<em>斜体</em>
代码：<code>select count(\*) from dual;</code>、 <mark>高亮</mark>文本
双引号：<q>123</q>
<ruby>
  汉 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp></ruby
>
<del>删除线</del>
<small>小字体</small>
<samp>This is sample text.</samp>
上标<sup>2</sup> 下标<sub>2</sub> 时间：<time>2021-11-11 12:00:00</time>
<u>下划线</u>
<blockquote>引用</blockquote>
<dl>
  <dt>定义</dt>
  <dd>描述</dd>
</dl>
```

效果：

<div class="code-preview">
正常文本
<b>粗体</b>
<strong>strong和blod效果一样但是语义有区别</strong>
<em>斜体</em>
代码：<code>select count(\*) from dual;</code>、
<mark>高亮</mark>文本
双引号：<q>123</q>
<ruby> 汉 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp></ruby>
<del>删除线</del>
<small>小字体</small>
<samp>This is sample text.</samp>
上标<sup>2</sup>
下标<sub>2</sub>
时间：<time>2021-11-11 12:00:00</time>
<u>下划线</u>
<blockquote>引用</blockquote>
<dl>
  <dt>定义</dt>
  <dd>描述</dd>
</dl>
</div>

## 水平线

```html
<hr />
```

效果：

<hr/>

## 列表

### 有序列表

设置编号的类型：

- a 表示小写英文字母编号
- A 表示大写英文字母编号
- i 表示小写罗马数字编号
- I 表示大写罗马数字编号
- 1 表示数字编号（默认）

```html
<ol>
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ol>

<ol type="a">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ol>

<ol type="A">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ol>

<ol type="i">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ol>

<ol type="I">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ol>
```

<div class="code-preview">
  <ol>
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ol>
</div>

<div class="code-preview">
  <ol type="a">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ol>
</div>

<div class="code-preview">
  <ol type="A">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ol>
</div>
<div class="code-preview">
  <ol type="i">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ol>
</div>
<div class="code-preview">
  <ol type="I">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ol>
</div>

### 无序列表

```html
<ul class="ul-circle">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ul>

<ul class="ul-square">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ul>

<ul class="ul-disc">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ul>

<ul class="ul-none">
  <li>元素1</li>
  <li>元素2</li>
  <li>元素3</li>
  <li>元素4</li>
  <li>元素5</li>
</ul>

<style>
  .ul-circle {
    list-style: circle;
  }
  .ul-square {
    list-style: square;
  }
  .ul-disc {
    list-style: disc;
  }
  .ul-none {
    list-style: none;
  }
</style>
```

<div class="code-preview">
  <ul class="ul-circle">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ul>
</div>

<div class="code-preview">
  <ul class="ul-square">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ul>
</div>

<div class="code-preview">
  <ul class="ul-disc">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ul>
</div>

<div class="code-preview">
  <ul class="ul-none">
    <li>元素1</li>
    <li>元素2</li>
    <li>元素3</li>
    <li>元素4</li>
    <li>元素5</li>
  </ul>
</div>

<style>
  .ul-circle {
    list-style: circle;
  }
  .ul-square {
    list-style: square;
  }
  .ul-disc {
    list-style: disc;
  }
  .ul-none {
    list-style: none;
  }
</style>

## 作品引用

```html
More information can be found in <cite>[ISO-0000]</cite>.
```

More information can be found in <cite>[ISO-0000]</cite>.

## 预留空白文本

```html
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  ___________________________
( I'm an expert in my field. )
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using
    preformatted text characters.
  </figcaption>
</figure>
```

<div class="code-preview">
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  ___________________________
( I'm an expert in my field.  )
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using preformatted text characters.
  </figcaption>
</figure>
</div>

<!-- <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="500"
    height="300"
    style="border: 0"
    hidden
    src="https://lbs.baidu.com/jsdemo/demo/aAsynLoadMap.htm">
    <p>Your browser does not support iframes.</p>
</iframe> -->

<!-- <div class="shadowbox">
  <p>Here's a very interesting note displayed in a
  lovely shadowed box.</p>
</div>

<style>
.shadowbox {
  width: 15em;
  /* border: 1px solid #dfd; */
  box-shadow: 3px 6px 8px #999;
  padding: 8px 12px;
  border-radius: 10px;
  background-image: linear-gradient(170deg, #dfd, #def 45%, #fed);
}
</style> -->

## 表格

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```

<table>
  <caption>Color names and values</caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>

```html
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <tbody>
    <colgroup>
      <col />
      <col span="2" class="batman" />
      <col span="2" class="flash" />
    </colgroup>
    <tr>
      <td></td>
      <th scope="col">Batman</th>
      <th scope="col">Robin</th>
      <th scope="col">The Flash</th>
      <th scope="col">Kid Flash</th>
    </tr>
    <tr>
      <th scope="row">Skill</th>
      <td>Smarts</td>
      <td>Dex, acrobat</td>
      <td>Super speed</td>
      <td>Super speed</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Foot</th>
      <td>foot1</td>
      <td>foot2</td>
      <td>foot3</td>
      <td>foot4</td>
    </tr>
  </tfoot>
</table>

<style>
  .batman {
    background-color: #ffeef2;
  }
  .flash {
    background-color: #ffe8d4;
  }
</style>
```

<table>
  <caption>Superheros and sidekicks</caption>
  <tbody>
    <colgroup>
      <col />
      <col span="2" class="batman" />
      <col span="2" class="flash" />
    </colgroup>
    <tr>
      <td></td>
      <th scope="col">Batman</th>
      <th scope="col">Robin</th>
      <th scope="col">The Flash</th>
      <th scope="col">Kid Flash</th>
    </tr>
    <tr>
      <th scope="row">Skill</th>
      <td>Smarts</td>
      <td>Dex, acrobat</td>
      <td>Super speed</td>
      <td>Super speed</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Foot</th>
      <td>foot1</td>
      <td>foot2</td>
      <td>foot3</td>
      <td>foot4</td>
    </tr>
  </tfoot>
</table>

<style>
  .batman {
    background-color: #ffeef2;
  }
  .flash {
    background-color: #ffe8d4;
  }
</style>

<style>
  .code-preview{
    padding: 0.8rem 0.8rem;
    border-radius: 0.2rem;
    background-color: rgb(220, 220, 220, 0.15);
    border-left: 5px solid green;
  }
</style>