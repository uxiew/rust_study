<script setup>
import { data } from '../../.vitepress/notes.data.ts'
import { normalizeLink } from "../../.vitepress/plugins/utils"
</script>

# 初学备忘录📕

> 这些内容基本来自 ChatGPT 3.5

<!-- toc -->
<ul>
    <li v-for="toc of data.toc">
        <a :href="normalizeLink(toc.link)">{{ toc.text }}</a>
    </li>
</ul>
