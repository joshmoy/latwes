<template>
  <NuxtLayout name="dashboard-layout">
    <div class="single-league-main-actions-leaderboard" v-if="leaderboard?.leaderboard?.length > 0">
      <DashboardLeaderboard
        :tableData="leaderboard"
        :events="events"
        @updateLeaderboard="updateLeaderboard"
        :isFullVersion="true"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";
import { useToast } from "vue-toastification";
import { ref } from "vue";

const $toast = useToast();
const isLoading = ref(true);

const route = useRoute();
const fixtureStore = useFixturesStore();
const leagueFixture = ref(`${route.params.slug}`);
let leaderboard = fixtureStore.getters.getLeaderboard;
let poolLeaderboard = fixtureStore.getters.getPoolLeaderboard;
const events = fixtureStore.getters.getMatchEvents;
console.log(events);
const updateLeaderboard = (value: string | undefined) => {
  fixtureStore.action.fetchLeaderboard(leagueFixture.value, value),
    (leaderboard = fixtureStore.getters.getLeaderboard);
};

const updatePoolLeaderboard = (value: string | undefined) => {
  if (0) return updateLeaderboard(value);
  fixtureStore.action.fetchPoolLeaderboard(leagueFixture.value, value),
    (poolLeaderboard = fixtureStore.getters.getPoolLeaderboard);
};

onMounted(async () => {
  try {
    await Promise.all([
      fixtureStore.action.fetchEvents(leagueFixture.value),
      fixtureStore.action.fetchCompetitions(),
    ]).then((res) => {
      updateLeaderboard(res[0].current_round);
      updatePoolLeaderboard(res[0].current_round);
    });
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    $toast.error((error as any)?.response?.data?.message, {
      timeout: 5000,
    });
    return error;
  }
});

definePageMeta({
  middleware: ["dashboard-auth"],
});

useHead({
  title: route.params.slug as string,
});
</script>
