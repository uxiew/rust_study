import { checkCodeIntegrity } from "./utils"
import type MarkdownIt from 'markdown-it'
export interface Options {
  hasSingleTheme: boolean
}

export function RustPlugin(md: MarkdownIt, options: Options) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    // remove title from info
    token.info = token.info.replace(/\[.*\]/, '')
    let rawCode = fence(...args)
    // could run
    // console.log(checkCodeIntegrity(rawCode));
    if (checkCodeIntegrity(rawCode)) {
      rawCode = rawCode.replace(/<\/button>/, `</button><button title="Run Code" class="copy runner"></button>`)
    }

    return rawCode
  }
}
