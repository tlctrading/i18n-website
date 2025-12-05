// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'uikit/dist/css/uikit.min.css',
    '~/assets/css/main.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'bg', file: 'bg.json' },
      { code: 'bn', file: 'bn.json' },
      { code: 'ar', file: 'ar.json' },
      { code: 'cz', file: 'cz.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
  }
})
