import markdownIt from "markdown-it"
import Token from "markdown-it/lib/token"
import fs from "fs"

interface HeaderTokens {
  header1: HeaderToken[]
  header2: HeaderToken[]
}

interface HeaderToken {
  content: string
  map: [number, number]
}

function getHeaders(tokens: Token[], tag: string) {
  let headers: HeaderToken[] = []
  for (let index = 0; index < tokens.length; index++) {
    if (tag === tokens[index].tag && tokens[index].type === "heading_open") {
      const token = {
        content: tokens[index + 1]?.content ?? "",
        map: tokens[index + 1]?.map ?? [0, 0],
      }
      if (token) headers.push(token)
    }
  }
  return headers
}

const getMDFileTitles = (file: string): HeaderTokens => {
  let md_file = fs.readFileSync(file)
  let m = markdownIt().parse(md_file.toString(), {})

  let header1 = getHeaders(m, "h1")
  let header2 = getHeaders(m, "h2")

  return {
    header1,
    header2,
  }
}

export { getMDFileTitles }
