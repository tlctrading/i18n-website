<script setup>
import { ref, onMounted } from "vue"
import { useI18n } from "vue-i18n"

const phoneInput = ref(null)
const { $phone } = useNuxtApp()
const { t } = useI18n()

onMounted(() => {
    if (phoneInput.value) {
        $phone(phoneInput.value, {
            initialCountry: "auto",
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json/")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("US"));
            },
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
        })
    }
})
</script>

<template>
    <div class="hero-form">
        <div class="cf-container">
            <h2 class="cf-title">{{ t('heroNew.form.title') }}</h2>

            <form class="cf-form">
                <div class="cf-group">
                    <input name="fname" type="text" :placeholder="t('heroNew.form.firstName')" required class="cf-input"
                        :aria-label="t('heroNew.form.firstName')">
                    <div class="cf-error" data-error-for="fname"></div>
                </div>

                <div class="cf-group">
                    <input name="lname" type="text" :placeholder="t('heroNew.form.lastName')" required class="cf-input"
                        :aria-label="t('heroNew.form.lastName')">
                    <div class="cf-error" data-error-for="lname"></div>
                </div>

                <div class="cf-group">
                    <input name="email" type="email" :placeholder="t('heroNew.form.email')" required class="cf-input"
                        :aria-label="t('heroNew.form.email')">
                    <div class="cf-error" data-error-for="email"></div>
                </div>

                <div class="cf-group">
                    <input ref="phoneInput" type="tel" name="phone" required class="cf-input cf-phone iti__tel-input"
                        :aria-label="t('heroNew.form.phone')" dir="ltr" autocomplete="off"
                        placeholder="(0-612) 34567" />

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
</template>