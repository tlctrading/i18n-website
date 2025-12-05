<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="solutions" class="uk-section sec3" aria-labelledby="solutions-heading">
        <div class="gb-shape gb-shape-1">
            <svg class="shape shape-top shape80 shapew" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211.2"
                preserveAspectRatio="none">
                <path d="M600 188.4C321.1 188.4 84.3 109.5 0 0v211.2h1200V0c-84.3 109.5-321.1 188.4-600 188.4z"></path>
            </svg>
        </div>
        <div class="uk-container">
            <div class="uk-grid-large uk-grid" uk-grid="">
                <div class="uk-width-1-2@s uk-text-center uk-first-column">
                    <h2 id="solutions-heading">{{ t('hero.title') }}</h2>
                    <p>{{ t('hero.description') }}</p>
                    <p>{{ t('hero.cta') }}</p>
                </div>
                <div class="uk-width-1-2@s">
                    <div class="uk-child-width-1-2@s uk-text-center uk-grid equal-height-grid">
                        <div class="uk-grid-margin uk-first-column">
                            <article class="gar-box gar-active">
                                <h3>{{ t('features.title') }}</h3>
                                <p>{{ t('features.description') }}</p>
                            </article>
                        </div>
                        <div class="uk-grid-margin">
                            <article class="gar-box">
                                <h3>{{ t('features.asset.title') }}</h3>
                                <p>{{ t('features.asset.description') }}</p>
                            </article>
                        </div>
                        <div class="uk-grid-margin">
                            <article class="gar-box">
                                <h3>{{ t('features.learning.title') }}</h3>
                                <p>{{ t('features.learning.description') }}</p>
                            </article>
                        </div>
                        <div class="uk-grid-margin">
                            <article class="gar-box">
                                <h3>{{ t('features.security.title') }}</h3>
                                <p>{{ t('features.security.description') }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
