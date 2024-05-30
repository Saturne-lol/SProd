// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxt-icon', 'nuxt-obfuscator'],
    obfuscator: {
        // default config:
        mapFile: 'obfuscation.map.json',
        nameLength: 20,
        defaultExtensions: ['.html', '.vue', '.jsx', '.tsx', '.ts', '.js'],
        exclude: [],
        excludeClassNames: [/^nuxt-.*$/, /^vue-.*$/, /^.*?(-enter.*|-leave.*)$/],
        dev: false,
    },
    components: true,
})