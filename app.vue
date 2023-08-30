<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Goborr* | ${titleChunk}` : 'Goborr*';
  }
})

useSeoMeta({
  title: 'Goborr*',
  ogTitle: 'Goborr*: Dive into the Ultimate Soccer Prediction Challenge!',
  description: 'Join the Goborr* community – the pinnacle of soccer predicting platforms! Test your sports acumen, pit against fellow enthusiasts, and stand a chance to win big every week.',
  ogDescription: 'Predict. Compete. Win. Goborr* offers you a front-row seat to the world of soccer forecasting. Rise up the ranks, and grab your weekly jackpot! Ready for the challenge?',
  ogImage: 'https://res.cloudinary.com/demp/image/upload/c_fit,h_675,r_0,w_1200/v1693430758/Screenshot_2023-08-30_at_22.25.37_gs6ii9.png',
  twitterImage: 'https://res.cloudinary.com/demp/image/upload/c_fit,h_675,r_0,w_1200/v1693430758/Screenshot_2023-08-30_at_22.25.37_gs6ii9.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Goborr*',
  twitterDescription: 'Predict. Compete. Win. Goborr* offers you a front-row seat to the world of soccer forecasting. Rise up the ranks, and grab your weekly jackpot! Ready for the challenge?',
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
})
</script>
