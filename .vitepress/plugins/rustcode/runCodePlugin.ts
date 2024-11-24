// markdown-it plugin for generating line numbers.
// It depends on preWrapper plugin.

import type MarkdownIt from "markdown-it";
import { type PluginWithOptions } from "markdown-it";
import { checkCodeIntegrity, isShellCode } from "../utils";

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
export const rustCodePlugin: PluginWithOptions<{ tag: string } | null | undefined> = (md: MarkdownIt, options) => {
  const fence = md.renderer.rules.fence!;

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const info = tokens[idx].info;
    // if lang is txt,disable linenumbers
    if (info === "txt") {
      tokens[idx].info = "txt:no-line-numbers";
    }

    if (info === "") {
      tokens[idx].info = "log:no-line-numbers";
    }

    // 默认为 rust 语言
    const noRun = /no_run/.test(info);
    if (noRun) {
      tokens[idx].info = "rust";
    }

    let rawCode = fence(...args);

    if (isShellCode(rawCode) || !/rust|ts/.test(info)) {
      return rawCode;
    }

    // console.log(tokens, idx)

    // no_run
    if (noRun) {
      rawCode = rawCode.replace(/"(language-rust)/, '"$1 no_run');
    }

    if (checkCodeIntegrity(info, rawCode) && !noRun) {
      rawCode = rawCode.replace(/<button/, `<button title="Run this code" class="run"></button><button`);

      rawCode = rawCode + `<Editor lang="${info}" id="${Math.random().toString(16).slice(2)}"/>`
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

    return rawCode;
  };
};
