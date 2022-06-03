import markdownIt from "markdown-it";
import Token from "markdown-it/lib/token";
import * as fs from "./fs-extra";

interface HeaderTokens {
  header1: HeaderToken[];
  header2: HeaderToken[];
}

interface HeaderToken {
  content: string;
  map: [number, number];
}

function getHeaders(tokens: Token[], tag: string) {
  let headers: HeaderToken[] = [];
  for (let index = 0; index < tokens.length; index++) {
    if (tag === tokens[index].tag && tokens[index].type === "heading_open") {
      const token = {
        content: tokens[index + 1]?.content ?? "",
        map: tokens[index + 1]?.map ?? [0, 0],
      };
      if (token) headers.push(token);
    }
  }
  return headers;
}

export const getMDFileTitles = (file: string): HeaderTokens => {
  let md_file = fs.readFileSync(file);
  let m = markdownIt().parse(md_file.toString(), {});

  let header1 = getHeaders(m, "h1");
  let header2 = getHeaders(m, "h2");

  return {
    header1,
    header2,
  };
};

/**
 * TODO 解析markdown文档返回xx对象
 * @param file 文件绝对地址
 * @returns markdown文件解析对象
 */
export function getMDFileTitle(file: string): string {
  if (!fs.existsSync(file)) {
    return "";
  }
  let md_file = fs.readFileSync(file);
  let m = markdownIt().parse(md_file.toString(), {});

  let h1_index = m.findIndex((val) => val.tag === "h1");
  if (h1_index !== -1) {
    let h1 = m.at(h1_index + 1);
    return h1!.content;
  }
  return "";
}
