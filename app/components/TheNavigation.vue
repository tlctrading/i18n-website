<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({useScope: 'global'})

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
</script>

<template>
<header class="site-header" role="banner">
  <nav class="uk-container uk-navbar flex items-center" role="navigation" aria-label="Aivontrixen primary navigation" dir="ltr">
    <div class="uk-navbar-left" dir="ltr">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a class="logo" href="Aivontrixen _ Official Website Platform.html">Aivontrixen</a>
        </li>
      </ul>
    </div>

    <div class="uk-navbar-right uk-visible@s" dir="ltr">
      <ul class="uk-navbar-nav uk-visible@s uk-light">
        <li><router-link class="uk-text-large current-menu" to="/">Home</router-link></li>
        <li><router-link to="/about" class="uk-text-large">About Us</router-link></li>
        <li><router-link to="/contacts" class="uk-text-large">Contact Us</router-link></li>
      </ul>

      <div class="lang-switcher lang-switcher--desktop" dir="ltr">
        <select v-model="locale" class="lang-select" aria-label="Change language">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
        </select>
      </div>
    </div>

    <div class="uk-navbar-right uk-hidden@s">
      <div class="uk-inline">
        <button class="mob-button uk-icon uk-navbar-toggle-icon" popovertarget="mobile-menu" aria-label="Open menu">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <rect width="20" height="2" y="3" class="line-1"></rect>
            <rect width="20" height="2" y="9" class="line-2"></rect>
            <rect width="20" height="2" y="9" class="line-3"></rect>
            <rect width="20" height="2" y="15" class="line-4"></rect>
          </svg>
        </button>

        <div id="mobile-menu" class="uk-width-large" popover="">
          <ul class="mob-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contacts">Contact Us</router-link></li>
          </ul>

          <div class="lang-switcher lang-switcher--mobile" dir="ltr">
            <select v-model="locale" class="lang-select" aria-label="Change language">
              <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.label }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>
