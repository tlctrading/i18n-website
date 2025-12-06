<template>
  <section class="uk-section sec99">
    <div class="uk-container">
      <div class="uk-text-center uk-margin-medium-bottom">
        <h2>{{ t('assetsNew.title') }}</h2>
        <p class="gfa" v-html="t('assetsNew.intro1')"></p>
        <p v-html="t('assetsNew.intro2')"></p>
      </div>

      <div
        class="garbox-2 garbox-3 uk-child-width-1-1 uk-child-width-1-3@s uk-text-center uk-margin-medium-top uk-grid-large uk-grid uk-flex-center equal-height-grid about-card99-grid"
        uk-grid=""
      >
        <div class="uk-first-column">
          <div class="gar-box">
            <h3>
              <span class="gb-icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
                  </path>
                </svg>
              </span>
              {{ t('assetsNew.cards.equity.title') }}
            </h3>
            <p>{{ t('assetsNew.cards.equity.text') }}</p>
          </div>
        </div>

        <div>
          <div class="gar-box">
            <h3>
              <span class="gb-icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
                  </path>
                </svg>
              </span>
              {{ t('assetsNew.cards.etf.title') }}
            </h3>
            <p>{{ t('assetsNew.cards.etf.text') }}</p>
          </div>
        </div>

        <div>
          <div class="gar-box">
            <h3>
              <span class="gb-icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
                  </path>
                </svg>
              </span>
              {{ t('assetsNew.cards.futures.title') }}
            </h3>
            <p>{{ t('assetsNew.cards.futures.text') }}</p>
          </div>
        </div>
      </div>

      <div class="uk-text-center uk-margin-medium-top">
        <p>{{ t('assetsNew.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
