import type { DefaultTheme } from 'vitepress/theme'

export type BarConfigObject = DefaultTheme.NavItem | DefaultTheme.Sidebar

export interface BarOptions {
  /**
   * base path of the docs
   *
   * @default "docs"
   */
  basePath?: string
  /**
   * include directories
   *
   */
  include?: string[]
  /**
   * exclude directories
   *
   * @default [".vuepress"]
   */
  exclude?: string[]
}
