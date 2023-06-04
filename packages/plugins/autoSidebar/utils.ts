import fs from 'node:fs'
import { sync } from 'fast-glob'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'

export function hasSubDirs(dir: string): boolean {
  return (
    sync(`${dir}/*`, {
      onlyDirectories: true,
      objectMode: true,
      stats: false,
    }).length > 0
  )
}

export function parseMD(file: string): { [key: string]: any } {
  if (!fs.existsSync(file))
    return {}

  let data: { [key: string]: any } = {}
  data = matter.read(file).data
  if (data.title)
    return data

  const mdFile = fs.readFileSync(file)
  const m = MarkdownIt().parse(mdFile.toString(), {})

  const h1Index = m.findIndex(val => val.tag === 'h1')
  if (h1Index !== -1) {
    const h1 = m.at(h1Index + 1)
    data.title = h1?.content.trim()
  }
  return data
}
