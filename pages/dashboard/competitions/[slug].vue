<template>
  <NuxtLayout name="dashboard-layout">
    <div>
      <PageTitle title="competitions" />
      <PredictionBanner />
      <SingleLeague />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
  middleware: ["dashboard-auth"],
});

useHead({
  title: route.params.slug as string,
})
</script>
