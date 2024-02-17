<template>
  <NuxtLayout name="dashboard-layout">
    <div
      class="single-league-main-actions-leaderboard"
      v-if="finalLeaderBoard?.leaderboard?.length > 0"
    >
      <DashboardLeaderboard
        :tableData="finalLeaderBoard"
        :events="events"
        @updateLeaderboard="updateLeaderboard"
        :isFullVersion="true"
        :slug="slug"
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
const query: string | undefined = (route.query && route.query.for_pool)?.toString();
const fixtureStore = useFixturesStore();
const leagueFixture = ref(`${route.params.slug}`);
let leaderboard = fixtureStore.getters.getLeaderboard;
let poolLeaderboard = fixtureStore.getters.getPoolLeaderboard;
const slug = leagueFixture.value;
let finalLeaderBoard = query === "yes" && slug !== "afcon" ? poolLeaderboard : leaderboard;
const events = fixtureStore.getters.getMatchEvents;
const circleId = (route.query && route.query.circle_id)?.toString()
const updateLeaderboard = (value: string | undefined, forPool: boolean, circleId?: string) => {
  if (forPool && slug !== "afcon") {
    fixtureStore.action.fetchPoolLeaderboard(leagueFixture.value, value, circleId),
      (poolLeaderboard = fixtureStore.getters.getPoolLeaderboard);
  } else {
    fixtureStore.action.fetchLeaderboard(leagueFixture.value, value, circleId),
      (leaderboard = fixtureStore.getters.getLeaderboard);
  }
};


onMounted(async () => {
  try {
    await Promise.all([
      fixtureStore.action.fetchEvents(leagueFixture.value),
      fixtureStore.action.fetchCompetitions(),
    ]).then((res) => {
      updateLeaderboard(res[0].current_round, query === "yes", circleId);
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
