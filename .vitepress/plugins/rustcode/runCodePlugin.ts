// markdown-it plugin for generating line numbers.
// It depends on preWrapper plugin.

import type MarkdownIt from 'markdown-it'
import { checkCodeIntegrity } from '../utils'

/*
  TODO:
  * `editable` — Enables the[editor].
  * `noplayground` — Removes the play button, but will still be tested.
  * `mdbook-runnable` — Forces the play button to be displayed.
    This is intended to be combined with the`ignore` attribute for examples that should not be tested, but you want to allow the reader to run.
  * `ignore` — Will not be tested and no play button is shown, but it is still highlighted as Rust syntax.
  * `should_panic` — When executed, it should produce a panic.
  * `no_run` — The code is compiled when tested, but it is not run.
    The play button is also not shown.
  * `compile_fail` — The code should fail to compile.
  * `edition2015`, `edition2018`, `edition2021` — Forces the use of a specific Rust edition.
  See[`rust.edition`] to set this globally.
*/
export const rustCodePlugin = (md: MarkdownIt) => {
  const fence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const info = tokens[idx].info
    if (/no_run/.test(info)) {
      tokens[idx].info = 'rust'
    }
    let rawCode = fence(...args)

    // no_run
    const noRun = /no_run/.test(info)
    if (noRun) {
      rawCode = rawCode
        .replace(/"(language-rust)/, '"$1 no_run')
    }

    // console.log(checkCodeIntegrity(rawCode));
    if (checkCodeIntegrity(rawCode) && !noRun) {
      rawCode = rawCode.replace(/<button/, `<button title="Run this code" class="run"></button><button`)
    }


    //   (!enable && ) ||
    //   (enable && /:no-line-numbers($| )/.test(info))
    // ) {
    //   return rawCode
    // }

    // const code = rawCode.slice(
    //   rawCode.indexOf('<code>'),
    //   rawCode.indexOf('</code>')
    // )

    // const lines = code.split('\n')

    // const lineNumbersCode = [...Array(lines.length)]
    //   .map((_, index) => `<span class="line-number">${index + 1}</span><br>`)
    //   .join('')

    // const lineNumbersWrapperCode = `<div class="line-numbers-wrapper" aria-hidden="true">${lineNumbersCode}</div>`

    // const finalCode = rawCode
    //   .replace(/<\/div>$/, `${lineNumbersWrapperCode}</div>`)
    //   .replace(/"(language-[^"]*?)"/, '"$1 line-numbers-mode"')

    return rawCode
  }
}
