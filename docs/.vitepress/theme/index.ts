import { STheme } from '@rainbowatcher/theme-sika'

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// As the Vitepress team has not provided a better way to inject CSS code into the client
import '@rainbowatcher/markdown-it-katex/src/katex.min.css'
import 'uno.css'

const theme: Theme = {
  // ...STheme,
  ...DefaultTheme,
  // enhanceApp(ctx) {
  // ctx.app.
  // },
}

export default theme
