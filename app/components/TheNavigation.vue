<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale, setLocale, t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

const currentLang = ref(locale.value);

const languages = [
  { code: 'ar', label: '🇸🇦 عربي' },
  { code: 'bg', label: '🇧🇬 Български' },
  { code: 'bn', label: '🇧🇩 বাংলা' },
  { code: 'cz', label: '🇨🇿 Čeština' },
  { code: 'da', label: '🇩🇰 Dansk' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'el', label: '🇬🇷 Ελληνικά' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'et', label: '🇪🇪 Eesti' },
  { code: 'fi', label: '🇫🇮 Suomi' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'ga', label: '🇮🇪 Ghaeilge' },
  { code: 'hi', label: '🇮🇳 हिंदी' },
  { code: 'hr', label: '🇭🇷 Hrvatski' },
  { code: 'hu', label: '🇭🇺 Magyar' },
  { code: 'ko', label: '🇰🇷 한국어' },
  { code: 'id', label: '🇮🇩 Indonesia' },
  { code: 'is', label: '🇮🇸 Íslenska' },
  { code: 'it', label: '🇮🇹 Italiano' },
  { code: 'ja', label: '🇯🇵 日本語' },
  { code: 'lt', label: '🇱🇹 Lietuvių' },
  { code: 'lv', label: '🇱🇻 Latviešu' },
  { code: 'mt', label: '🇲🇹 Malti' },
  { code: 'ms', label: '🇲🇾 Bahasa Melayu' },
  { code: 'tl', label: '🇵🇭 Tagalog' },
  { code: 'nl', label: '🇳🇱 Nederlands' },
  { code: 'pl', label: '🇵🇱 Polski' },
  { code: 'pt', label: '🇵🇹 Português' },
  { code: 'ro', label: '🇷🇴 Română' },
  { code: 'ru', label: '🇷🇺 Русский' },
  { code: 'sk', label: '🇸🇰 Slovenčina' },
  { code: 'sl', label: '🇸🇮 Slovenčina' },
  { code: 'sq', label: '🇦🇱 hqipja' },
  { code: 'sr', label: '🇷🇸 Српски' },
  { code: 'sv', label: '🇸🇪 Svenska' },
  { code: 'th', label: '🇹🇭 แบบไทย' },
  { code: 'tr', label: '🇹🇷 Türkçe' },
  { code: 'uk', label: '🇺🇦 Українська' },
  { code: 'vi', label: '🇻🇳 Việt Nam' },
  { code: 'zh', label: '🇭🇰 中国人' }
]

const changeLang = async (code) => {
  await setLocale(code)
  router.replace({ path: router.currentRoute.value.fullPath })
}
</script>

<template>
  <header class="site-header" role="banner">
    <nav class="uk-container uk-navbar flex items-center" role="navigation">

      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <NuxtLink class="logo" :to="localePath('index')">Aivontrixen</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right uk-visible@s">
        <ul class="uk-navbar-nav uk-light">
          <li><NuxtLink class="uk-text-large" :to="localePath('index')">{{ t('home') }}</NuxtLink></li>
          <li><NuxtLink class="uk-text-large" :to="localePath('about')">{{ t('about') }}</NuxtLink></li>
          <li><NuxtLink class="uk-text-large" :to="localePath('contacts')">{{ t('contacts') }}</NuxtLink></li>
        </ul>

        <div class="lang-switcher lang-switcher--desktop">
          <select class="lang-select" v-model="currentLang" @change="changeLang(currentLang)">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
          </select>
        </div>
      </div>

      <div class="uk-navbar-right uk-hidden@s">
        <div class="uk-inline">
          <button class="mob-button uk-navbar-toggle-icon" popovertarget="mobile-menu">
            <span uk-icon="menu"></span>
          </button>

          <div id="mobile-menu" popover class="uk-width-large">
            <ul class="mob-menu">
              <li><NuxtLink :to="localePath('index')">{{ t('home') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('about')">{{ t('about') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('contacts')">{{ t('contacts') }}</NuxtLink></li>
            </ul>

            <div class="lang-switcher lang-switcher--mobile">
              <select class="lang-select" v-model="currentLang" @change="changeLang(currentLang)">
                <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </header>
</template>
