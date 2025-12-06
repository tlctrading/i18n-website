<template>
  <section class="uk-section">
    <div class="gb-shape gb-shape-1">
      <svg class="shape shape-top shape80 shapew" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211.2"
           preserveAspectRatio="none">
        <path d="M600 188.4C321.1 188.4 84.3 109.5 0 0v211.2h1200V0c-84.3 109.5-321.1 188.4-600 188.4z"></path>
      </svg>
    </div>

    <div class="uk-container">
      <div class="uk-text-center">
        <h2>{{ t('communityNew.title') }}</h2>
        <p>{{ t('communityNew.intro') }}</p>
      </div>

      <div class="garbox-2 uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center uk-margin-medium-top uk-grid-large uk-grid equal-height-grid about-card-grid" uk-grid>
        <div class="uk-first-column">
          <div class="gar-box gar-active">
            <h3>{{ t('communityNew.cards.expert.title') }}</h3>
            <p>{{ t('communityNew.cards.expert.text') }}</p>
          </div>
        </div>
        <div>
          <div class="gar-box">
            <h3>{{ t('communityNew.cards.environment.title') }}</h3>
            <p>{{ t('communityNew.cards.environment.text') }}</p>
          </div>
        </div>
        <div>
          <div class="gar-box">
            <h3>{{ t('communityNew.cards.toolkit.title') }}</h3>
            <p>{{ t('communityNew.cards.toolkit.text') }}</p>
          </div>
        </div>
        <div>
          <div class="gar-box">
            <h3>{{ t('communityNew.cards.network.title') }}</h3>
            <p>{{ t('communityNew.cards.network.text') }}</p>
          </div>
        </div>
      </div>

      <div class="uk-text-center uk-margin-medium-top">
        <p>{{ t('communityNew.closing') }}</p>
        <a class="cu-button" href="https://aivontrixen-app.com/"><strong>{{ t('communityNew.cta') }}</strong></a>
      </div>
    </div>
  </section>
</template>

<script setup>

const { t } = useI18n()
</script>
