export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },

    modules: ['nuxt-icon', /*"nuxt-gtag"*/ '@nuxt/ui', '@nuxtjs/sitemap', '@nuxt/image'],

    components: true,

    // gtag: {
    //     id: 'G-YKC5TQ8C98'
    // },

    site: {
        url: 'https://saturne.lol',
        name: 'Saturne.lol'
    },

    head: {
        htmlAttrs: {
            lang: 'en'
        }
    },

    compatibilityDate: '2024-07-23'
} as any);