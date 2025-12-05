<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="platform-features" class="uk-section sec9" aria-labelledby="platform-features-heading">
        <div class="uk-container">
            <h2 id="platform-features-heading" class="uk-margin-large-top">{{ t('capabilities.title') }}</h2>
            <figure class="wp-block-table is-style-stripes">
                <table class="has-fixed-layout">
                    <tbody>
                        <tr>
                            <th scope="row">🤖 {{ t('capabilities.technology') }}</th>
                            <td>{{ t('capabilities.technology.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">💳 {{ t('capabilities.funding') }}</th>
                            <td>{{ t('capabilities.funding.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">📱 {{ t('capabilities.access') }}</th>
                            <td>{{ t('capabilities.access.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">🚀 {{ t('capabilities.performance') }}</th>
                            <td>{{ t('capabilities.performance.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">📊 {{ t('capabilities.instruments') }}</th>
                            <td>{{ t('capabilities.instruments.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">✍️ {{ t('capabilities.setup') }}</th>
                            <td>{{ t('capabilities.setup.value') }}</td>
                        </tr>
                        <tr>
                            <th scope="row">📞 {{ t('capabilities.support') }}</th>
                            <td>{{ t('capabilities.support.value') }}</td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </section>
</template>
