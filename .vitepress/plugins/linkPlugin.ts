import type MarkdownIt from 'markdown-it'
import { normalizeLink } from './utils'

export interface Options {
  books: any[]
}

const link_rules = {
  "RFC 文档|RFC 项目": "https://rust-lang.github.io/rfcs/",
  "RFC 1216": 'https://rust-lang.github.io/rfcs/1216-bang-type.html',
  "RFC 12684": 'https://github.com/rust-lang/rust/pull/53693'
}

const getRegRules = (text: string) => [
  /(第\s\d+\s章)/.exec(text),
  /(第.部分)/.exec(text)
]

function toLinkUrl(raw: string, rule: string, link: string) {
  return raw.replace(new RegExp(rule, 'g'), (matchText) => `<a href=${normalizeLink(link)} target="_blank">${matchText}</a>`)
}

/**
* 将对应的部分、章节进行链接，方便快速跳转。
*/
export function linkPlugin(md: MarkdownIt, options: Options) {
  const text = md.renderer.rules.text!
  md.renderer.rules.text = (...args) => {
    let rawText = text(...args)

    // if (args[3].path?.includes('/notes/')) return rawText

    // internal Link
    for (let { text, link } of options.books) {
      if (rawText.includes(text)) continue
      const excludes = text.match(/(.*)（(.*)）/)
      if (excludes && [excludes[1], excludes[2]].some((ex) => rawText.includes(ex))) continue
      // 内链匹配规则
      getRegRules(text).forEach((rule) => {
        if (rule)
          rawText = toLinkUrl(rawText, rule[0], link)
      })
    }

    // 自定义规则匹配
    Object.keys(link_rules).forEach((ruleKey) => {
      rawText = toLinkUrl(rawText, ruleKey, link_rules[ruleKey])
    })

    return rawText
  }
}
