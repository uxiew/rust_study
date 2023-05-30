// example.data.js
import { notes } from "../.vitepress/sidebar"

export default {
  load() {
    return {
      toc: notes
    }
  }
}
