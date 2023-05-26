import { getSideBar } from './plugins/autoSidebar'

export default getSideBar('docs', {
  indexLink: "README",
  sortBy: (path) => {
    const res = /(\d+).+?\/(\d+)\.(\d+)?/.exec(path)
    return res ? Number(res[2]) + Number(res[3]) : 0
  }
})
