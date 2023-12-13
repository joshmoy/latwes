<template>
  <NuxtLayout name="dashboard-layout">
    <ViewPredictions />
  </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();
definePageMeta({
  middleware: ["dashboard-auth"],
});

useHead({
  title: `${route.params.slug as string} predictions`,
});
</script>
