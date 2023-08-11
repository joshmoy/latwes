<template>
  <NuxtLayout name="dashboard-layout">
    <div>
      <PageTitle title="competitions" />
      <PredictionBanner />
      <Leagues />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  useAuth();
})
</script>

