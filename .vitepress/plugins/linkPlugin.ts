import type MarkdownIt from 'markdown-it'
import { normalizeLink } from './utils'

export interface Options {
  books: any[]
}

export function linkPlugin(md: MarkdownIt, options: Options) {
  const text = md.renderer.rules.text!
  md.renderer.rules.text = (...args) => {
    let rawText = text(...args)

    if (args[3].path?.includes('/notes/')) return rawText

    // internal Link
    for (let { text, link } of options.books) {
      if (rawText.includes(text)) continue
      const excludes = text.match(/(.*)（(.*)）/)
      if (excludes && [excludes[1], excludes[2]].some((ex) => rawText.includes(ex))) continue
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

    return rawText
  }
}
