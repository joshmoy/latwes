<template>
  <NuxtLayout name="dashboard-layout">
    <div>
      <PageTitle title="Profile" />
      <Spinner v-if="isPageLoading" isCenter />
      <div v-else>
        <PersonalDetailsForm
          :profileDetails="profileDetails"
          :onUpdateProfileDetails="onUpdateProfileDetails"
        />
        <BankDetailsForm :profileDetails="profileDetails"  />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { fetchProfile } from "../../services/Profile";
import { useToast } from "vue-toastification";

const $toast = useToast();

const profileDetails = ref({});
const isPageLoading = ref(true);

definePageMeta({
  middleware: ["dashboard-auth"],
});

const onUpdateProfileDetails = (payload: Record<string, string>) => {
  profileDetails.value = { ...profileDetails.value, ...payload};
};

onBeforeMount(async () => {
  try {
    const res = await fetchProfile();
    profileDetails.value = res.data.data;
    isPageLoading.value = false;
  } catch (error: any) {
    $toast.error(error?.response?.data?.message, {
      timeout: 5000,
    });
    isPageLoading.value = false;
  }
});
useHead({
  title: "Profile",
});

useSeoMeta({
  title: "Goborr",
  ogTitle: "Goborr: Dive into the Ultimate Soccer Prediction Challenge!",
  description:
    "Join the Goborr community – the pinnacle of soccer predicting platforms! Test your sports acumen, pit against fellow enthusiasts, and stand a chance to win big every week.",
  ogDescription:
    "Predict. Compete. Win. Goborr offers you a front-row seat to the world of soccer forecasting. Rise up the ranks, and grab your weekly jackpot! Ready for the challenge?",
  ogImage:
    "https://res.cloudinary.com/demp/image/upload/v1699383189/Compete_With_io6fec.jpg",
  twitterImage:
    "https://res.cloudinary.com/demp/image/upload/v1699383189/Compete_With_io6fec.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Goborr",
  twitterDescription:
    "Predict. Compete. Win. Goborr offers you a front-row seat to the world of soccer forecasting. Rise up the ranks, and grab your weekly jackpot! Ready for the challenge?",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
});
</script>
