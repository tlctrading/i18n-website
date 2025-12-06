<script setup>
import TheForm from '~/components/TheForm.vue';
const { t } = useI18n()
</script>

<template>
  <section id="hero" class="uk-section uk-section-large hero-section" aria-labelledby="hero-heading">
    <div class="uk-container hero-container">
      <div class="hero-inner">
        <div class="uk-flex-middle uk-grid-medium uk-grid" uk-grid="">

          <div class="uk-width-expand@s uk-first-column">
            <div class="hero-meta uk-text-center uk-text-left@s">
              <h1 id="hero-heading">{{ t('platform.title') }}</h1>
              <p class="change-by-command">
                {{ t('platform.tagline') }}
              </p>
            </div>
          </div>

          <div class="uk-width-auto@s order-1">
            <TheForm />
          </div>

        </div>
      </div>
    </div>

    <div class="gb-shape gb-shape-1">
      <svg class="shape shape-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 350"
        preserveAspectRatio="none">
        <path d="M1200 336.7V350H0V0s22.4 276.4 1200 336.7z" fill="#fff"></path>
      </svg>
    </div>
  </section>
</template>
