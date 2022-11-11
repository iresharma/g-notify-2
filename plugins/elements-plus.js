import * as components from "element-plus/dist/index.full.js";
import * as icons from "@element-plus/icons-vue"

export default defineNuxtPlugin(NuxtApp => {
    Object.entries(components).forEach(([name, component]) => NuxtApp.vueApp.component(name, component));
    // Object.entries(icons).forEach(([name, component]) => NuxtApp.vueApp.component(name, component));
})