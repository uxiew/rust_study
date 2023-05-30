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
      const excludes = text.match(/(.*)（(.*)）/)
      if (excludes && [excludes[1], excludes[2]].some((ex) => rawText.includes(ex))) continue
      if (rawText.includes(text)) continue

      // 内链匹配规则
      const rules = [
        /(第\s\d+\s章)/.exec(text),
        /(第.部分)/.exec(text)
      ]
      rules.forEach((rule) => {
        if (rule)
          rawText = rawText.replace(new RegExp(rule[0], 'g'), `<a href=${normalizeLink(link)}>${rule[0]}</a>`)
      })
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
