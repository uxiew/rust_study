import type MarkdownIt from 'markdown-it'
import { normalizeLink } from './utils'

export interface Options {
  books: any[]
}

export function linkPlugin(md: MarkdownIt, options: Options) {
  const text = md.renderer.rules.text!
  md.renderer.rules.text = (...args) => {
    let rawText = text(...args)
    // const navsDom = Array.from(document.querySelectorAll('#VPSidebarNav .VPSidebarItem a'))

    // internal Link
    for (let { text, link } of options.books) {
      if (rawText.includes(text)) continue
      const ref = /(第\s\d+\s章)/.exec(text)
      if (ref) {
        text = ref[0]
        rawText = rawText.replace(new RegExp(text, 'g'), `<a href=${normalizeLink(link)}>${text}</a>`)
      }
    }

    // console.log(rawCode)
    // // remove title from info
    // token.info = token.info.replace(/\[.*\]/, '')
    // let rawCode = text(...args)
    // // could run
    // // console.log(checkCodeIntegrity(rawCode));
    // if (checkCodeIntegrity(rawCode)) {
    //   rawCode = rawCode.replace(/<\/button>/, `</button><button title="Run Code" class="copy runner"></button>`)
    // }

    return rawText
  }
}
