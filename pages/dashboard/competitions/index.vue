<template>
  <NuxtLayout name="dashboard-layout">
    <Head>
      <Title>Goborr* | Competitions</Title>
    </Head>
    <div>
      <PageTitle title="competitions" />
      <PredictionBanner />
      <Leagues />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["dashboard-auth"],
});
</script>
