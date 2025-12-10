// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: [
        'uikit/dist/css/uikit.min.css',
        '~/assets/css/main.css'
    ],
    nitro: {
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            nodeCompat: true
        },
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    modules: ['@nuxtjs/i18n'],

    i18n: {
        strategy: 'prefix_except_default',
        locales: [
            {code: 'ar', file: 'ar.json'},
            {code: 'bg', file: 'bg.json'},
            {code: 'bn', file: 'bn.json'},
            {code: 'cz', file: 'cz.json'},
            {code: 'da', file: 'da.json'},
            {code: 'de', file: 'de.json'},
            {code: 'el', file: 'el.json'},
            {code: 'en', file: 'en.json'},
            {code: 'es', file: 'es.json'},
            {code: 'et', file: 'et.json'},
            {code: 'fi', file: 'fi.json'},
            {code: 'fr', file: 'fr.json'},
            {code: 'ga', file: 'ga.json'},
            {code: 'hi', file: 'hi.json'},
            {code: 'hr', file: 'hr.json'},
            {code: 'hu', file: 'hu.json'},
            {code: 'ko', file: 'ko.json'},
            {code: 'id', file: 'id.json'},
            {code: 'is', file: 'is.json'},
            {code: 'it', file: 'it.json'},
            {code: 'ja', file: 'ja.json'},
            {code: 'lt', file: 'lt.json'},
            {code: 'lv', file: 'lv.json'},
            {code: 'mt', file: 'mt.json'},
            {code: 'ms', file: 'ms.json'},
            {code: 'tl', file: 'tl.json'},
            {code: 'nl', file: 'nl.json'},
            {code: 'pl', file: 'pl.json'},
            {code: 'pt', file: 'pt.json'},
            {code: 'ro', file: 'ro.json'},
            {code: 'ru', file: 'ru.json'},
            {code: 'sk', file: 'sk.json'},
            {code: 'sl', file: 'sl.json'},
            {code: 'sq', file: 'sq.json'},
            {code: 'sr', file: 'sr.json'},
            {code: 'sv', file: 'sv.json'},
            {code: 'th', file: 'th.json'},
            {code: 'tr', file: 'tr.json'},
            {code: 'uk', file: 'uk.json'},
            {code: 'vi', file: 'vi.json'},
            {code: 'zh', file: 'zh.json'}
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
    }
})
