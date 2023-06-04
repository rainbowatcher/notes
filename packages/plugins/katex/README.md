# vitepress-plugin-katex


## Install

### Node

Install the package

```shell
npm i -D @rainbowatcher/markdown-it-katex
```

Include the KaTeX stylesheet in your html:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
```

Or

```js
// theme/index.ts
import '@rainbowatcher/markdown-it-katex/src/katex.min.css'
```

### Vitepress

Install the package

```shell
npm i -D @rainbowatcher/markdown-it-katex
```



## Usage

```js
import katex from '@rainbowatcher/markdown-it-katex'

const md = new MarkdownIt().use(katex)
md.render('$x^2$')
// <span class="mord">
//   <span class="mord">2</span>
//   <span class="msupsub">
//     <span class="vlist-t">
//       <span class="vlist-r">
//         <span class="vlist" style="height: 0.8641em;">
//           <span style="top: -3.113em; margin-right: 0.05em;">
//             <span class="pstrut" style="height: 2.7em;"></span>
//             <span class="sizing reset-size6 size3 mtight">
//               <span class="mord mtight">2</span>
//             </span>
//           </span>
//         </span>
//       </span>
//     </span>
//   </span>
// </span>
```

## TODO

- [ ] test case