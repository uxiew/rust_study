<script setup>
import { data } from '../../.vitepress/notes.data.ts'
import { normalizeLink } from "../../.vitepress/plugins/utils"
</script>

# 初学备忘录📕
> 这些内容基本来自 ChatGPT 3.5

## Rustacean
Rust 编程语言的用户或爱好者，源于Rust（一种系统编程语言）和 crustacean `[krʌˈsteɪʃ(ə)n]`（甲壳类动物）的结合。

<!-- toc -->
<ul>
    <li v-for="toc of data.toc">
        <a :href="normalizeLink(toc.link)">{{ toc.text }}</a>
    </li>
</ul>
