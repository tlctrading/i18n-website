<script setup>
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

          <div class="uk-width-auto@s">
            <div class="hero-form" role="complementary" aria-label="Aivontrixen registration form">
              <div class="cf-container">
                <h2 class="cf-title">Sign up now</h2>
                <form class="cf-form">
                  <div class="cf-group">
                    <input name="fname" type="text" placeholder="First Name" required class="cf-input" aria-label="First Name">
                    <div class="cf-error" data-error-for="fname"></div>
                  </div>

                  <div class="cf-group">
                    <input name="lname" type="text" placeholder="Last Name" required class="cf-input" aria-label="Last Name">
                    <div class="cf-error" data-error-for="lname"></div>
                  </div>

                  <div class="cf-group">
                    <input name="email" type="email" placeholder="Email" required class="cf-input" aria-label="Email">
                    <div class="cf-error" data-error-for="email"></div>
                  </div>

                  <div class="cf-group">
                    <input type="tel" name="phone" required class="cf-input cf-phone iti__tel-input"
                      aria-label="Phone" dir="ltr" autocomplete="off" placeholder="(0-612) 34567" style="padding-left: 48px;">
                    <div class="cf-error" data-error-for="phone"></div>
                  </div>

                  <div class="cf-error cf-general-error"></div>

                  <button type="submit" class="cf-button">
                    <span class="cf-btn-text">REGISTER NOW</span>
                    <span class="cf-spinner"></span>
                  </button>

                  <p class="cf-disclaimer">
                    By registering and creating an account, you confirm that you have read and agreed to our
                    Terms and Conditions, Privacy Policy and Cookie Policy. Additionally, you acknowledge that
                    this website operates exclusively as a marketing platform.
                    <span class="cf-readmore">Read More</span>
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
        <path d="M1200 336.7V350H0V0s22.4 276.4 1200 336.7z" fill="#fff"></path>
      </svg>
    </div>
  </section>
</template>
