// base on https://github.com/waylonflinn/markdown-it-katex
import katex, { KatexOptions } from "katex";
import StateInline, {
  Scanned,
} from "markdown-it/lib/rules_inline/state_inline";
import Token from "markdown-it/lib/token";
import StateBlock from "markdown-it/lib/rules_block/state_block";
import MarkdownIt from "markdown-it";

function isNumber(char: number) {
  return char >= 0x30 /* "0" */ && char <= 0x39 /* "9" */;
}

function isWhitespace(char: number) {
  return char === 0x20 /* " " */ || char === 0x09 /* \t */ || char === 0x10;
}

// interface Delimiter {
//   can_open: boolean;
//   can_close: boolean;
// }

/**
 * 检查定界符状态
 * @param state 状态
 * @param pos 位置
 * @returns 定界符状态
 */
function isValidDelim(state: StateInline, pos: number): Scanned {
  let prevChar: number;
  let nextChar: number;

  let max: number = state.posMax;
  let src: string = state.src;
  let can_open: boolean = true;
  let can_close: boolean = true;

  prevChar = pos > 0 ? src.charCodeAt(pos - 1) : -1;
  nextChar = pos + 1 <= max ? src.charCodeAt(pos + 1) : -1;

  // 检查打开和关闭的非空格条件，并检查结束定界符后面是否没有数字
  if (isWhitespace(prevChar) || isNumber(nextChar)) {
    can_close = false;
  }
  if (isWhitespace(nextChar)) {
    can_open = false;
  }

  return {
    can_open,
    can_close,
    length: 0,
  };
}

function math_inline(state: StateInline, silent: boolean) {
  let start: number;
  let match: number;
  let token: Token;
  let res: Scanned;
  let pos: number;
  let { src, pending } = state;

  if (src[state.pos] !== "$") {
    return false;
  }

  res = isValidDelim(state, state.pos);
  if (!res.can_open) {
    if (!silent) {
      pending += "$";
    }
    state.pos += 1;
    return true;
  }

  // First check for and bypass all properly escaped delimiters
  // This loop will assume that the first leading backtick can not
  // be the first character in state.src, which is known since
  // we have found an opening delimiter already.
  start = state.pos + 1;
  match = start;
  while ((match = src.indexOf("$", match)) !== -1) {
    // Found potential $, look for escapes, pos will point to
    // first non escape when complete
    pos = match - 1;
    while (src[pos] === "\\") {
      pos -= 1;
    }

    // Even number of escapes, potential closing delimiter found
    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 1;
  }

  // No closing delimter found.  Consume $ and continue.
  if (match === -1) {
    if (!silent) {
      pending += "$";
    }
    state.pos = start;
    return true;
  }

  // Check if we have empty content, ie: $$.  Do not parse.
  if (match - start === 0) {
    if (!silent) {
      pending += "$$";
    }
    state.pos = start + 1;
    return true;
  }

  // Check for valid closing delimiter
  res = isValidDelim(state, match);
  if (!res.can_close) {
    if (!silent) {
      pending += "$";
    }
    state.pos = start;
    return true;
  }

  if (!silent) {
    token = state.push("math_inline", "math", 0);
    token.markup = "$";
    token.content = src.slice(start, match);
  }

  state.pos = match + 1;
  return true;
}

function math_block(
  state: StateBlock,
  start: number,
  end: number,
  silent: boolean
) {
  let firstLine: string;
  let lastLine: string;
  let next: number;
  let lastPos: number;
  let found: boolean = false;
  let token: Token;
  let pos: number = state.bMarks[start] + state.tShift[start];
  let max: number = state.eMarks[start];

  // 匹配块最后一个字符
  if (pos + 2 > max) {
    return false;
  }

  // 如果代码块的后两位不是$$ 返回 false
  if (state.src.slice(pos, pos + 2) !== "$$") {
    return false;
  }

  pos += 2;
  firstLine = state.src.slice(pos, max);

  if (silent) {
    return true;
  }

  // 是否是单行表达式
  if (firstLine.trim().slice(-2) === "$$") {
    firstLine = firstLine.trim().slice(0, -2);
    found = true;
  }

  for (next = start; !found; ) {
    next++;

    if (next >= end) {
      break;
    }

    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];

    if (pos < max && state.tShift[next] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      break;
    }

    if (state.src.slice(pos, max).trim().slice(-2) === "$$") {
      lastPos = state.src.slice(0, max).lastIndexOf("$$");
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    }
  }

  state.line = next + 1;

  token = state.push("math_block", "math", 0);
  token.block = true;
  token.content =
    (firstLine && firstLine.trim() ? firstLine + "\n" : "") +
    state.getLines(start + 1, next, state.tShift[start], true) +
    (lastLine && lastLine.trim() ? lastLine : "");
  token.map = [start, state.line];
  token.markup = "$$";
  return true;
}

export default function math_plugin(md: MarkdownIt, options: KatexOptions) {
  // Default options

  options = options || {};

  // set KaTeX as the renderer for markdown-it-simplemath
  let katexInline = function (latex: string) {
    options.displayMode = false;
    try {
      return katex.renderToString(latex, options);
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return latex;
    }
  };

  let inlineRenderer = function (tokens: Token[], idx: number) {
    return katexInline(tokens[idx].content);
  };

  let katexBlock = function (latex: string) {
    options.displayMode = true;
    try {
      return "<p>" + katex.renderToString(latex, options) + "</p>";
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return latex;
    }
  };

  let blockRenderer = function (tokens: Token[], idx: number) {
    return katexBlock(tokens[idx].content) + "\n";
  };

  md.inline.ruler.after("escape", "math_inline", math_inline);
  md.block.ruler.after("blockquote", "math_block", math_block, {
    alt: ["paragraph", "reference", "blockquote", "list"],
  });
  
  md.renderer.rules.math_inline = inlineRenderer;
  md.renderer.rules.math_block = blockRenderer;
}
