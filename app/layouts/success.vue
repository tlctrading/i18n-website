
<template>
    <main class="bg-cover bg-center" :style="{ backgroundImage: `url(${SuccessBg})` }">
        <NuxtPage />
    </main>
</template>

<script setup lang="ts">

import SuccessBg from '~/assets/images/success-bg.png'
</script>
