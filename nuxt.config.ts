// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                class: 'dark'
            }
        },
    },
    css: ['element-plus/theme-chalk/dark/css-vars.css', "element-plus/dist/index.css"],
    plugins: ['plugins/elements-plus.js']
})
