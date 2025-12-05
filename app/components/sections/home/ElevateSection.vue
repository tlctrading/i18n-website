<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="unlock-potential" class="uk-section sec8" aria-labelledby="unlock-potential-heading">
        <div class="uk-container">
            <div class="uk-flex-middle uk-grid-large uk-grid" uk-grid="">
                <div class="uk-width-1-2@s uk-first-column">
                    <div class="sec3-meta">
                        <h2 id="unlock-potential-heading">{{ t('elevate.title') }}</h2>
                        <p>{{ t('elevate.description') }}</p>

                        <h3 class="flex items-center gap-1">
                            <span class="gb-icon">
                                <svg aria-hidden="true" height="1em" role="img" viewBox="0 0 448 512" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>{{ t('growth.title') }}
                        </h3>
                        <p>{{ t('growth.description') }}</p>

                        <h3 class="flex items-center gap-1">
                            <span class="gb-icon">
                                <svg aria-hidden="true" height="1em" role="img" viewBox="0 0 448 512" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>{{ t('network.title') }}
                        </h3>
                        <p>{{ t('network.description') }}</p>

                        <a class="cu-button" href="https://aivontrixen-app.com/#"><strong>{{ t('journey.cta') }}</strong></a>
                    </div>
                </div>
                <div class="uk-width-1-2@s">
                    <figure class="sec4-img">
                        <img class="img-1" loading="lazy"
                            src="~/assets/images/004-e1718021172658.avif"
                            alt="Collaborative trading team reviewing performance charts">
                        <img class="img-shape" src="~/assets/images/shape-01.avif"
                            alt="" aria-hidden="true">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>
