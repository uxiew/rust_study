import { join } from 'node:path'
import { getSideBar } from './plugins/autoSidebar'

export const SRC_DOC = "docs";

export const notes = getSideBar(join(SRC_DOC, 'notes'), {
  hierarchy: false,
  ignoreMDFiles: ['index'],
})

export const codes = getSideBar(join(SRC_DOC, 'codes'), {
  hierarchy: false,
  ignoreMDFiles: ['index'],
})

export const books = getSideBar(SRC_DOC, {
  ignoreDirs: ['notes','codes'],
  indexLink: 'index',
  ignoreMDFiles: ['index'],
  sortBy: (path) => {
    const res = /(\d+).+?\/(\d+)\.(\d+)?/.exec(path)
    return res ? Number(res[2]) + Number(res[3]) : 0
  }
})

export const sidebar = {
  '/notes/': notes,
  '/code/': codes,
  '/': books
}
