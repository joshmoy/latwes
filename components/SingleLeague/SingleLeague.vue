<template>
  <Spinner v-if="isLoading" isCenter />
  <div class="single-league" v-else>
    <div class="single-league-meta">
      <div class="single-league-meta-image">
        <img :src="competitionInfo?.logo" />
      </div>
      <div class="single-league-meta-desc">
        <p class="single-league-meta-desc-name">{{ competitionInfo?.name }}</p>
        <p class="single-league-meta-desc-start">
          {{ isActive ? "Active" : `Starts in ${daysDiff}` }}
        </p>
      </div>
    </div>

    <DateScroll
      :events="events?.events"
      :matchRound="events?.current_round"
      @fetchCurrentMatchesSelected="fetchCurrentMatchesSelected"
    />
    <div class="single-league-main">
      <div class="prediction-cards">
        <TieBreakerForm :tieBreaker="tieBreaker" :slug="leagueFixture"/>
        <div class="prediction-cards__child" v-for="(fixture, index) in fixtures" :key="index">
          <HomePredictionCard :matchData="fixture" />
        </div>
      </div>
      <div class="single-league-main-actions">
        <div
          class="single-league-main-actions-leaderboard"
          v-if="
            isAfcon
              ? leaderboard?.leaderboard?.length > 1 
              : poolLeaderboard?.leaderboard?.length > 1 
          "
        >
        <nuxt-link :to="fullLeaderboardLinkPlusPool" class="expand_leaderboard_text">
            <div>
              <p> View expanded leaderboard</p>
            </div>
        </nuxt-link>
          <PoolLeaderboard
            :tableData="isAfcon ? leaderboard : poolLeaderboard"
            :events="events"
            @updateLeaderboard="updatePoolLeaderboard"
            :isAfcon="isAfcon"
          />
        </div>
        <nuxt-link :to="fullLeaderboardLink" class="expand_leaderboard_text" v-if="!isAfcon">
            <div>
              <p> View expanded leaderboard</p>
            </div>
        </nuxt-link>
        
        <div
          class="single-league-main-actions-leaderboard"
          v-if="leaderboard?.leaderboard?.length > 1 && !isAfcon "
        >
          <DashboardLeaderboard
            :tableData="leaderboard"
            :events="events"
            @updateLeaderboard="updateLeaderboard"
          />
        </div>

        <div class="single-league-main-actions-scoring">
          <div class="single-league-main-actions-scoring-header">
            <p>Scoring System</p>
          </div>
          <div class="single-league-main-actions-scoring-body">
            <div
              v-for="(scoreData, id) in scoringData"
              :key="id"
              class="single-league-main-actions-scoring-body-flex"
            >
              <p>{{ scoreData?.point }}{{ scoreData?.point === 1 ? "pt" : "pts" }}</p>
              <p>{{ scoreData?.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";
import { daysDifference } from "../../helpers/dataFormatter";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const $toast = useToast();
const route = useRoute();
const fixtureStore = useFixturesStore();
const leagueFixture = ref(`${route.params.slug}`);

const isLoading = ref(true);
const isActive = ref(false);
const daysDiff = ref("");
const currentDate = new Date();

const events = fixtureStore.getters.getMatchEvents;
const fixtures = fixtureStore.getters.getFixtures;
const tieBreaker = fixtureStore.getters.getTieBreaker;
let leaderboard = fixtureStore.getters.getLeaderboard;
let poolLeaderboard = fixtureStore.getters.getPoolLeaderboard;
let competitions = fixtureStore.getters.getCompetitions as Record<string, any>;
let competitionInfo = {
  current_position: "-",
  player_count: "-",
  current_pool_prize: "0",
  logo: "",
  name: "",
  slug: "",
};
const isAfcon = leagueFixture.value === "afcon";

const scoringData = [
  { point: 3, desc: "Correct outcome" },
  { point: 1, desc: "Home team correct score" },
  { point: 1, desc: "Away team correct score" },
  { point: 1, desc: "Correct goal difference" },
];

const fullLeaderboardLink = `/dashboard/competitions/${leagueFixture.value}/leaderboard`;
const fullLeaderboardLinkPlusPool = `/dashboard/competitions/${leagueFixture.value}/leaderboard?for_pool=yes`
onMounted(async () => {
  try {
    await Promise.all([
      fixtureStore.action.fetchEvents(leagueFixture.value),
      fixtureStore.action.fetchCompetitions(),
    ]).then((res) => {
      if (!isAfcon) {
        updatePoolLeaderboard(res[0].current_round);
      }
      updateLeaderboard(res[0].current_round);
    });
    competitions = fixtureStore.getters.getCompetitions as Record<string, any>;
    competitionInfo = competitions?.value?.find((e: any) => e.slug === leagueFixture.value);
    document.body.classList.remove("block-modal");
    const leagueStartDate: Date = new Date((competitionInfo as Record<string, any>)?.start_date);
    const timeDifference = leagueStartDate ? leagueStartDate.getTime() - currentDate.getTime() : 0;

    if (timeDifference <= 0) {
      isActive.value = true;
    } else {
      const diff = daysDifference(timeDifference);
      daysDiff.value = `${diff} ${diff === 1 ? "day" : "days"}`;
    }
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    $toast.error((error as any)?.response?.data?.message, {
      timeout: 5000,
    });
    return error;
  }
});

const fetchCurrentMatchesSelected = async (round: string) => {
  await fixtureStore.action.fetchFixtures(leagueFixture.value, round);
};

const updateLeaderboard = (value: string | undefined) => {
  fixtureStore.action.fetchLeaderboard(leagueFixture.value, value),
    (leaderboard = fixtureStore.getters.getLeaderboard);
};

const updatePoolLeaderboard = (value: string | undefined) => {
  if (isAfcon) return updateLeaderboard(value);
  fixtureStore.action.fetchPoolLeaderboard(leagueFixture.value, value),
    (poolLeaderboard = fixtureStore.getters.getPoolLeaderboard);
};
</script>

<style lang="scss" scoped src="./SingleLeague.scss"></style>
