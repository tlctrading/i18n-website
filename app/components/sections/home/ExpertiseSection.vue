<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section id="expertise" class="uk-section sec5" aria-labelledby="expertise-heading">
        <div class="uk-container grid grid-cols-2">
            <div class="uk-text-center uk-margin-medium-bottom">
                <h2 id="expertise-heading">{{t('performance.title')}}</h2>
                <strong>{{ t('performance.subtitle') }}</strong>
                <p>{{ t('performance.description') }}</p>
            </div>
            <div class="uk-child-width-1-3@s uk-text-center uk-grid equal-height-grid" uk-grid="">
                <div class="uk-grid-margin uk-first-column">
                    <article class="gar-box gar-active">
                        <h3>{{t('trading.title')}}</h3>
                        <p>{{ t('trading.description') }}</p>
                    </article>
                </div>
                <div class="uk-grid-margin">
                    <article class="gar-box">
                        <h3>{{t('protection.title')}}</h3>
                        <p>{{ t('protection.description') }}</p>
                    </article>
                </div>
                <div class="uk-grid-margin">
                    <article class="gar-box">
                        <h3>{{t('intelligence.title')}}</h3>
                        <p>{{ t('intelligence.description') }}</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>