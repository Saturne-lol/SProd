// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
      enabled: true,

      timeline: {
          enabled: true,
      },
  },

  modules: [
      'nuxt-icon',
      "nuxt-gtag",
      "@nuxt/ui",
  ],

  components: true,

  gtag: {
      id: 'G-YKC5TQ8C98'
  },

  compatibilityDate: "2024-07-23",
} as any)