// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  compatibilityDate: "2025-02-17",
  colorMode: {
    preference : 'light'
  }
})