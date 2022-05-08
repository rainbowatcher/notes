import type { Plugin } from "@vuepress/core"
// import { path } from "@vuepress/utils"

// export interface Hooks {
//   onInitialized: LifeCycleHook
//   onPrepared: LifeCycleHook
//   onWatched: LifeCycleHook<[watchers: Closable[], restart: () => Promise<void>]>
//   onGenerated: LifeCycleHook
//   extendsMarkdownOptions: ExtendsHook<MarkdownOptions>
//   extendsMarkdown: ExtendsHook<Markdown>
//   extendsPageOptions: ExtendsHook<PageOptions>
//   extendsPage: ExtendsHook<Page>
//   extendsBundlerOptions: ExtendsHook<any>
//   clientAppEnhanceFiles: ClientFilesHook
//   clientAppRootComponentFiles: ClientFilesHook
//   clientAppSetupFiles: ClientFilesHook
//   alias: ReturnObjectHook
//   define: ReturnObjectHook
// }

// export const autoNavbarPlugin = (): Plugin => ({
//   name: "@with-rainbow/plugin-auto-navbar",
//   // onInitialized:
// })

import fs from "fs"
import path from "path"
import markdownIt from "markdown-it"

import {
  SidebarConfigObject,
  SidebarConfigArray,
} from "@vuepress/theme-default"
import { NavbarConfig } from "vuepress"
import { getMDFileTitles } from "../packages/plugin-auto-navbar/src/node/mdUtil"

const log = (...msg: any) => {
  console.log(...msg)
}

const DOCS_PATH = path.resolve(__dirname, "../docs")
const DEFAULT_IGNORED_DIRS = [".vuepress"]
const HOME_PAGE_NAME = ["index.md", "README.md"]
const DEFAULT_IGNORED_FILES = [".DS_Store", ...HOME_PAGE_NAME]

/**
 * 获取导航栏配置对象
 */
function getNavBarConfig(folders: string[]) {
  let navbar_object: NavbarConfig = folders.map(value => {
    const filePath = path.resolve(DOCS_PATH, value)
    const homePageFileName = getHomePageFileName(filePath)
    const homePageFilePath = path.resolve(filePath, homePageFileName)
    const title = getMDFileTitle(homePageFilePath)
    log(getConfigArray(value))
    return {
      text: title ?? value,
      link: `/${value}/`,
      children: getConfigArray(value),
    }
  })
  return navbar_object
}

/**
 * 根据给定配置初始化配置对象
 */
function initSidebarConfigObject(folders: string[]): SidebarConfigObject {
  let configObject: { [k: string]: SidebarConfigArray } = {}

  folders.map(val => {
    if (!val.startsWith("/")) {
      val = "/".concat(val)
    }

    configObject[val] = []
  })

  return configObject
}

/**
 * 获取侧边导航配置数组
 * @param dirPath docs下的相对目录名
 * @returns {SidebarConfigArray}
 */
function getConfigArray(dirPath: string): SidebarConfigArray {
  // 获取目录的绝对路径
  let absFilePath = path.join(DOCS_PATH, dirPath)
  // absFilePath = tryGetMDFileName(absFilePath);

  // 判断是否是文件夹 只有文件夹才有子节点
  if (fs.existsSync(absFilePath) && fs.statSync(absFilePath).isDirectory()) {
    return getChildren(dirPath, absFilePath)
  }
  return []
}

function getChildren(dirPath: string, absDirPath: string): SidebarConfigArray {
  // 获取目录下的所有文件
  const files = fs.readdirSync(absDirPath, { withFileTypes: true })
  // 过滤文件
  const filtered = files.filter(
    file =>
      !DEFAULT_IGNORED_FILES.find(
        val => val.toLowerCase() === file.name.toLowerCase()
      )
  )

  return filtered.map(file => {
    const relativeFilePath = path.join(dirPath, file.name)
    const absoluteFilePath = path.join(absDirPath, file.name)
    if (file.isDirectory()) {
      const homePageName = getHomePageFileName(absoluteFilePath)
      const homePageFilePath = path.resolve(absoluteFilePath, homePageName)
      const titles = getMDFileTitles(homePageFilePath)
      // const homePageHasContent = homePageName && titles.header2.length === 0;

      const text =
        homePageName && titles.header1[0]
          ? titles.header1[0].content
          : camelize(file.name)
      const link = homePageName ? path.resolve(dirPath, file.name) : undefined
      const collapsible = homePageName ? true : false
      const children = getChildren(relativeFilePath, absoluteFilePath)

      return {
        text,
        link,
        collapsible,
        children,
      }
    } else {
      return relativeFilePath
    }
  })
}

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, _index) {
      return word.toUpperCase()
    })
    .replace(/[\s-_]+/g, "")
}

/**
 * TODO 解析markdown文档返回xx对象
 * @param file 文件绝对地址
 * @returns markdown文件解析对象
 */
function getMDFileTitle(file: string): string {
  let md_file = fs.readFileSync(file)
  let m = markdownIt().parse(md_file.toString(), {})

  let h1_index = m.findIndex(val => val.tag === "h1")
  if (h1_index !== -1) {
    let h1 = m.at(h1_index + 1)
    return h1!.content
  }
  return ""
}

/**
 * 如果目录下存在主页文件，则返回主页文件名
 * eg: README.md
 * @param absDirPath 目录绝对路径
 * @returns 主页文件名
 */
function getHomePageFileName(absDirPath: string): string {
  let fileName = ""
  fs.readdirSync(absDirPath, { withFileTypes: true }).forEach(file => {
    const upperFileName = file.name.toUpperCase()
    if (
      -1 !==
      HOME_PAGE_NAME.findIndex(val => val.toUpperCase() === upperFileName)
    ) {
      fileName = file.name
    }
  })
  return fileName
}

const sidebarConfig = (folders: string[]) => {
  let sidebarConfig: SidebarConfigObject = initSidebarConfigObject(folders)
  Object.keys(sidebarConfig).map(
    item => (sidebarConfig[item] = getConfigArray(item))
  )
  return sidebarConfig
}

const navbarConfig = (folders: string[]) => {
  return getNavBarConfig(folders)
}

export { navbarConfig, sidebarConfig }

