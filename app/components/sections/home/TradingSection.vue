<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="about" class="uk-section sec4" aria-labelledby="about-heading">
        <div class="uk-container">
            <div class="uk-flex-middle uk-grid-large uk-grid" uk-grid="">
                <div class="uk-width-1-2@s uk-first-column">
                    <figure class="sec4-img">
                        <img class="img-1" src="~/assets/images//003.avif"
                            alt="Aivontrixen trading interface illustration">
                        <img class="img-shape" src="~/assets/images/shape-01.avif"
                            alt="" aria-hidden="true">
                    </figure>
                </div>
                <div class="uk-width-1-2@s">
                    <div class="sec3-meta">
                        <h2 id="about-heading">{{ t('main.title') }}</h2>
                        <p>{{ t('main.description') }}</p>
                        <p>{{ t('main.global.title') }}</p>
                        <a class="cu-button" href="https://aivontrixen-app.com/#"><strong>{{ t('main.cta') }}</strong></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
