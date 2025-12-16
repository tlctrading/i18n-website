<script setup>
import { ref, onMounted } from "vue"
import { useI18n } from "vue-i18n"
const { locale } = useI18n({ useScope: 'global' })

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

const currentLang = ref(locale.value);

const firstName = ref(null);
const lastName = ref(null)
const email = ref(null)
const phoneNumber = ref(null);

const submitForm = async () => {
    console.log(firstName.value, lastName.value, email.value, phoneNumber.value, currentLang.value);
    try {
        const response = await fetch('https://api.tek9.gg/rest-api/aipo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                phone: phoneNumber.value,
                language: currentLang.value
            })
        })

        if(!response.ok) {
            throw new Error('err')
        }

        const data = await response.json();
        console.log(data)

    } catch(err) {
        console.log(err)
    }
}

</script>

<template>
    <div class="hero-form">
        <div class="cf-container">
            <h2 class="cf-title">{{ t('heroNew.form.title') }}</h2>

            <form class="cf-form" @submit.prevent="submitForm">
                <div class="cf-group">
                    <input name="fname" type="text" v-model="firstName" :placeholder="t('heroNew.form.firstName')" required class="cf-input"
                        :aria-label="t('heroNew.form.firstName')">
                    <div class="cf-error" data-error-for="fname"></div>
                </div>

                <div class="cf-group">
                    <input name="lname" type="text" v-model="lastName" :placeholder="t('heroNew.form.lastName')" required class="cf-input"
                        :aria-label="t('heroNew.form.lastName')">
                    <div class="cf-error" data-error-for="lname"></div>
                </div>

                <div class="cf-group">
                    <input name="email" type="email" v-model="email" :placeholder="t('heroNew.form.email')" required class="cf-input"
                        :aria-label="t('heroNew.form.email')">
                    <div class="cf-error" data-error-for="email"></div>
                </div>

                <div class="cf-group">
                    <input ref="phoneInput" type="tel" v-model="phoneNumber" name="phone" required class="cf-input cf-phone iti__tel-input"
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