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
definePageMeta({
  middleware: ["dashboard-auth"],
});

useHead({
  title: "Competitions",
});

import { useProfileStore } from "@/store/profile";
import { useToast } from "vue-toastification";

const $toast = useToast();
const profileStore = useProfileStore();

onMounted(async () => {
  try {
    profileStore.action.fetchProfile();
  } catch (error) {
    $toast.error((error as any)?.response?.data?.message, {
      timeout: 5000,
    });
    return error;
  }
});
</script>
