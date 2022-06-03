import { NavbarConfig, SidebarConfig } from "vuepress";

export type BarConfigObject = NavbarConfig | SidebarConfig;

export interface BarOptions {
  /**
   * base path of the docs
   *
   * @default "docs"
   */
  base?: string;
  /**
   * include directories
   *
   */
  include?: string[];
  /**
   * exclude directories
   *
   * @default [".vuepress"]
   */
  exclude?: string[];
}
