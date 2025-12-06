<script setup>

const { t } = useI18n()
</script>

<template>
  <section class="uk-section uk-section-large hero-section">
    <div class="uk-container hero-container">
      <div class="hero-inner hero-about">
        <div class="uk-flex-middle uk-grid" uk-grid="">

          <div class="uk-width-expand@s uk-first-column">
            <div class="hero-meta">
              <h1>{{ t('heroNew.title') }}</h1>
              <p class="desc">{{ t('heroNew.description') }}</p>
            </div>
          </div>

          <div class="uk-width-auto@s order-1">
            <div class="hero-form">
              <div class="cf-container">
                <h2 class="cf-title">{{ t('heroNew.form.title') }}</h2>

                <form class="cf-form">
                  <div class="cf-group">
                    <input
                      name="fname"
                      type="text"
                      :placeholder="t('heroNew.form.firstName')"
                      required
                      class="cf-input"
                      :aria-label="t('heroNew.form.firstName')"
                    >
                    <div class="cf-error" data-error-for="fname"></div>
                  </div>

                  <div class="cf-group">
                    <input
                      name="lname"
                      type="text"
                      :placeholder="t('heroNew.form.lastName')"
                      required
                      class="cf-input"
                      :aria-label="t('heroNew.form.lastName')"
                    >
                    <div class="cf-error" data-error-for="lname"></div>
                  </div>

                  <div class="cf-group">
                    <input
                      name="email"
                      type="email"
                      :placeholder="t('heroNew.form.email')"
                      required
                      class="cf-input"
                      :aria-label="t('heroNew.form.email')"
                    >
                    <div class="cf-error" data-error-for="email"></div>
                  </div>

                  <div class="cf-group">
                    <input
                      type="tel"
                      name="phone"
                      required
                      class="cf-input cf-phone iti__tel-input"
                      :aria-label="t('heroNew.form.phone')"
                      dir="ltr"
                      autocomplete="off"
                      placeholder="(0-612) 34567"
                      style="padding-left: 48px;"
                    >
                    <div class="cf-error" data-error-for="phone"></div>
                  </div>

                  <div class="cf-error cf-general-error"></div>

                  <button type="submit" class="cf-button">
                    <span class="cf-btn-text">{{ t('heroNew.form.submit') }}</span>
                    <span class="cf-spinner"></span>
                  </button>

                  <p class="cf-disclaimer">
                    {{ t('heroNew.form.disclaimer') }}
                    <span class="cf-readmore">{{ t('heroNew.form.readMore') }}</span>
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="gb-shape gb-shape-1">
      <svg class="shape shape-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 350" preserveAspectRatio="none">
        <path d="M1200 336.7V350H0V0s22.4 276.4 1200 336.7z"></path>
      </svg>
    </div>
  </section>
</template>