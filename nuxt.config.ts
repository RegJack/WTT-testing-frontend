// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],
  ssr: false,
  css: ['~/assets/css/main.scss'],
  runtimeConfig: {
    public: {
      // typoTextSrc: 'https://unpkg.com/web-typo-text',
      typoTextSrc: '/script/typo-text.js',
      jsonBinApiKey: process.env.JSON_BIN_API_KEY
    }
  }
})
