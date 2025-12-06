<script setup>
const { t } = useI18n()
</script>

<template>
    <section id="reviews" class="uk-section review-snippet" aria-labelledby="reviews-heading">
        <div class="uk-container">
            <div class="gar-box">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
                    <h3 id="reviews-heading" style="margin:0;">{{ t('reviews.title') }}</h3>
                    <span
                        style="display:inline-block;padding:4px 10px;background:#00d084;color:#17303b;border-radius:999px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;position:relative;margin:0 auto;">
                        {{ t('reviews.trusted') }}
                    </span>
                </div>
                <div class="uk-margin-small-top">
                    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                        <strong style="font-size:28px;color:#00d084;line-height:1;">{{ t('reviews.rating') }}</strong>
                        <span aria-label="{{ t('reviews.score') }}"
                            style="color:#ffc107;font-size:20px;line-height:1;">{{ t('reviews.stars') }}</span>
                        <span style="color:#666;font-size:14px;">
                            <span><strong>{{ t('reviews.count') }}</strong></span> ·
                            <span>{{ t('reviews.based') }}</span> ·
                            <span>{{ t('reviews.score') }}</span>
                        </span>
                    </div>
                </div>
                <p style="margin:12px 0 0;color:#222;">{{ t('reviews.comment') }}</p>
            </div>
        </div>
    </section>
</template>
