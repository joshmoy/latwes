<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Goborr | ${titleChunk}` : "Goborr";
  },
});

useSeoMeta({
  title: "Goborr",
  ogTitle: "The Free Football Predictor Game to Prove Your Fanaticism!",
  description:
    "Dominate the pitch... virtually! Goborr is the ultimate platform to put your knowledge to the test and compete against fellow fans in a free-to-play football predictor game.",
  ogDescription:
    "Dominate the pitch... virtually! Goborr is the ultimate platform to put your knowledge to the test and compete against fellow fans in a free-to-play football predictor game.",
  ogImage:
    "https://res.cloudinary.com/demp/image/upload/v1699383189/Compete_With_io6fec.jpg",
  twitterImage:
    "https://res.cloudinary.com/demp/image/upload/v1699383189/Compete_With_io6fec.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Goborr",
  twitterDescription:"Dominate the pitch... virtually! Goborr is the ultimate platform to put your knowledge to the test and compete against fellow fans in a free-to-play football predictor game.",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
});
</script>
