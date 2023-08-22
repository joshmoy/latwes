<template>
  <NuxtLayout name="dashboard-layout">
    <Head>
      <Title>Goborr* | Competition</Title>
    </Head>
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
