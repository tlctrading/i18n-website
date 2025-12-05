<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="platform-strengths" class="uk-section sec7" aria-labelledby="platform-strengths-heading">
        <div class="uk-container">
            <div class="uk-flex-middle uk-grid" uk-grid="">
                <div class="uk-width-2-5@s uk-first-column">
                    <h2 id="platform-strengths-heading">{{ t('security.title') }}</h2>
                    <a class="cu-button" href="https://aivontrixen-app.com/#" style="margin: 16px 0;"><strong>{{ t('security.explore.cta') }}</strong></a>
                </div>
                <div class="uk-width-expand@s">
                    <div class="uk-child-width-1-2@s uk-grid-medium uk-grid" uk-grid="">
                        <div class="uk-first-column">
                            <article class="box-chec">
                                <h3>
                                    <span class="gb-icon">
                                        <!-- svg остаётся без изменений -->
                                    </span>{{ t('security.enterprise.title') }}
                                </h3>
                                <p>{{ t('security.enterprise.description') }}</p>
                            </article>
                        </div>
                        <div>
                            <article class="box-chec">
                                <h3>
                                    <span class="gb-icon">
                                        <!-- svg остаётся без изменений -->
                                    </span>{{ t('automation.title') }}
                                </h3>
                                <p>{{ t('automation.description') }}</p>
                            </article>
                        </div>
                        <div class="uk-grid-margin uk-first-column">
                            <article class="box-chec">
                                <h3>
                                    <span class="gb-icon">
                                        <!-- svg остаётся без изменений -->
                                    </span>{{ t('infrastructure.title') }}
                                </h3>
                                <p>{{ t('infrastructure.description') }}</p>
                            </article>
                        </div>
                        <div class="uk-grid-margin">
                            <article class="box-chec">
                                <h3>
                                    <span class="gb-icon">
                                        <!-- svg остаётся без изменений -->
                                    </span>{{ t('execution.title') }}
                                </h3>
                                <p>{{ t('execution.description') }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
