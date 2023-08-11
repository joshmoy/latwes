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
definePageMeta({
  middleware: ["dashboard-auth"],
});
</script>
