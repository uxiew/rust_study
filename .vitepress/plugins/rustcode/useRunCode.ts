import { inBrowser, useRouter } from 'vitepress'
import { onMounted } from 'vue'
import { checkCodeIntegrity, fetch_with_timeout, isShellCode } from './utils'
import "./styles.scss"

function createBtn() {
  const button = document.createElement('button')
  button.setAttribute("title", "Run this code")
  button.classList.add('run')
  return button
}

function prepareRunner(onClick: (this: HTMLButtonElement, ev: MouseEvent) => any) {
  (Array.from(document.querySelectorAll('div[class*="language-rust"]')) as HTMLDivElement[]).forEach((codeWrapper) => {
    if (!checkCodeIntegrity(codeWrapper.querySelector("code")!.innerText)) return
    const btn = createBtn()
    btn.addEventListener('click', onClick)
    codeWrapper.prepend(btn)
  })
}


/**
* @description add run code button like copy button style
*/
export function useRustCode() {
  if (inBrowser) {
    const router = useRouter()
    onMounted(() => {
      router.onAfterRouteChanged = () => {
        prepareRunner(onClick)
      }
      prepareRunner(onClick)
    })

    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement
      const parent = el.parentElement
      const sibling = parent?.querySelector("code")
      if (!parent || !sibling) {
        return
      }

      let text = ''

      sibling
        .querySelectorAll('span.line:not(.diff.remove)')
        .forEach((node) => (text += (node.textContent || '') + '\n'))
      text = text.slice(0, -1)

      if (isShellCode(parent.className)) {
        text = text.replace(/^ *(\$|>) /gm, '').trim()
      }

      execCode(text, el).then(() => {
        // to do ...
      })
    }

  }
}

/** 获取 rust 版本 */
function getEdition(code_block: HTMLElement) {
  let classes = code_block.querySelector('code')?.classList!;
  let edition = "2015";
  if (classes.contains("edition2018")) {
    edition = "2018";
  } else if (classes.contains("edition2021")) {
    edition = "2021";
  }
  return "2018"
}

// https://github.com/rust-lang/mdBook/blob/master/src/theme/book.js#L102
async function execCode(code: string, runBtnEl: HTMLElement) {
  const codeBlock = runBtnEl.parentElement!
  let resultBlock = codeBlock.querySelector(".result") as HTMLElement;
  if (!resultBlock) {
    resultBlock = document.createElement('code');
    resultBlock.className = 'result language-bash';
    codeBlock.append(resultBlock);
  }
  const params = {
    version: "stable",
    optimize: "0",
    code,
    edition: getEdition(codeBlock)
  };
  if (code.indexOf("#![feature") !== -1) {
    params.version = "nightly";
  }

  resultBlock.classList.remove("result-warn")
  resultBlock.innerHTML = `<span style="color:#FFCB6B">Running...<span>`;
  runBtnEl.setAttribute("disabled", "true")

  return fetch_with_timeout("https://play.rust-lang.org/evaluate.json", {
    headers: {
      'Content-Type': "application/json",
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(params)
  })
    .then(response => (response as Response).json())
    .then(response => {
      if (response.result.trim() === '') {
        resultBlock.innerText = "No output";
        resultBlock.classList.add("result-no-output");
      } else {
        resultBlock.innerText = response.result;
        resultBlock.classList.remove("result-no-output");
      }
    })
    .catch(error => {
      resultBlock.classList.add("result-warn")
      resultBlock.innerText = "Playground Communication: " + error.message
    })
    .finally(() => {
      runBtnEl.removeAttribute("disabled")
    })
}
