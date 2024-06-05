// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-icon',
        "nuxt-gtag",
        "@nuxtjs/sitemap",
        "@nuxt/ui",
        "nuxt-typed-router"
    ],
    components: true,
    gtag: {
        id: 'G-YKC5TQ8C98'
    },
} as any)