<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="getting-started" class="uk-section sec6" aria-labelledby="getting-started-heading">
        <div class="uk-container">
            <div class="uk-text-center uk-margin-medium-bottom">
                <h2 id="getting-started-heading">{{ t('start.title') }}</h2>
                <p>{{ t('start.description') }}</p>
                <p>{{ t('start.cta') }}</p>
                <a class="cu-button" href="https://aivontrixen-app.com/#"><strong>{{ t('start.join.cta') }}</strong></a>
            </div>
        </div>
    </section>
</template>
