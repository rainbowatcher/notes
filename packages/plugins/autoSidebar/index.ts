import { writeFileSync } from 'node:fs'
import console from 'node:console'
import type { DefaultTheme } from 'vitepress/theme'
import { sync } from 'fast-glob'
import { hasSubDirs, parseMD } from './utils'
import type { BarOptions } from './types/bar'

function autoSidebarConfig(options?: BarOptions): DefaultTheme.Sidebar {
  const basePath = options?.basePath ?? 'docs'
  const sidebarConfig: DefaultTheme.SidebarMulti = {}

  const allDirs = sync(`${basePath}/**`, { onlyDirectories: true })
  const dirsWithoutSubdir = allDirs.filter(folder => !hasSubDirs(folder))
  dirsWithoutSubdir.forEach((dir) => {
    const files = sync(`${dir}/*`, { onlyFiles: true })

    const items = files
      .map((item) => {
        const { title, order } = parseMD(item)

        return {
          text: title || 'UnTitled',
          link: item
            .replace(`${basePath}`, '')
            .replace(/\.\w+|index(.md)?/, ''),
          order: order ?? 99,
        }
      }).sort((a, b) => a.order - b.order)
    // set text to empty, don't need to display
    sidebarConfig[`${dir.replace(`${basePath}/`, '')}`] = [
      { text: '', items },
    ]
  })

  // console.log(JSON.stringify(sidebarConfig, null, 4))
  const dest = `${process.cwd()}/docs/.vitepress/configs/sidebar.json`
  writeFileSync(dest, JSON.stringify(sidebarConfig, null, 4))
  console.log(`sidebar config has created in ${dest}`)
  return sidebarConfig
}

export default autoSidebarConfig
