
// packages/fn/noop.ts
export function noop() {
}

export const isRustCode = (className: string) => /language-rust/.test(
  className
)


export const isShellCode = (className: string) => /language-(shellscript|shell|bash|sh|zsh)/.test(
  className
)

export const checkCodeIntegrity = (rawCode: string) => /main()/.test(
  rawCode
)



export const normalizeLink = (link: string) => {
  return encodeURI(link).replace(/\.md$/g, '.html')
}


export function fetch_with_timeout(url: string, options: RequestInit, timeout = 6000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
  ]);
}

/**
 * 校验是否是 HTTPS
 */
export function isHttps(): boolean {
  const protocol = window.location.protocol
  if (protocol === 'https:') {
    return true
  }
  else if (protocol === 'http:') {
    return false
  }
  else {
    const baseUrl = window.location.origin
    return baseUrl.startsWith('https:')
  }
}


/**
 * 处理异常消息
 * @param message 异常消息
 */
export const throwError = (message: string) => {
  return new Error(`[runcode]: ${message}`)
}


/**
 * UBB 转 HTML
 * @param code ubb 代码
 * @returns html 代码
 */
export const ubbToHtml = (code: string): string => {
  code = code.replace(/<br[^>]*>/gi, '\n')
  code = code.replace(/<p[^>\/]*\/>/gi, '\n')
  code = code.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/gi, '')
  code = code.replace(/<hr[^>]*>/gi, '[hr]')
  code = code.replace(/<(sub|sup|u|strike|b|i|pre)>/gi, '[$.id1]')
  code = code.replace(/<\/(sub|sup|u|strike|b|i|pre)>/gi, '[/$.id1]')
  code = code.replace(/<(\/)?strong>/gi, '[$.id1b]')
  code = code.replace(/<(\/)?em>/gi, '[$.id1i]')
  code = code.replace(/<(\/)?blockquote([^>]*)>/gi, '[$.id1blockquote]')
  code = code.replace(/&amp;/gi, '&')
  code = code.replace(/&lt;/gi, '<')
  code = code.replace(/&gt;/gi, '>')
  code = code.replace(/&quot;/gi, '"')
  code = code.replace(/&nbsp;/gi, ' ')
  return code
}

/**
 * 移除 HTML 标签
 * @param code 代码
 * @param isUbb 是否 UBB
 * @returns 移除后的代码
 */
export const removeHtmlTag = (code: string, isUbb?: boolean): string => {
  if (isUbb)
    code = ubbToHtml(code)
  return code.replace(/<\/?[^>]*>/g, '')
}
