<template>
  <div class="single-league">
    <div class="single-league-meta">
      <div class="single-league-meta-image">
        <img src="/icons/plLogo.png" />
      </div>
      <div class="single-league-meta-desc">
        <p class="single-league-meta-desc-name">Premier League</p>
        <p class="single-league-meta-desc-start">Starts in 4 weeks</p>
      </div>
    </div>
    <DateScroll
      :events="events?.events"
      :matchRound="events?.current_round"
      @fetchCurrentMatchesSelected="fetchCurrentMatchesSelected"
    />
    <div class="single-league-main">
      <div class="prediction-cards">
        <div class="prediction-cards__child" v-for="(match, index) in fixtures" :key="index">
          <HomePredictionCard :matchData="match"/>
        </div>
      </div>
      <div class="single-league-main-actions">
        <div class="single-league-main-actions-points">
          <div class="single-league-main-actions-points-title">
            <p>Points this week</p>
            <img src="/icons/caretDown.svg" />
          </div>
          <p class="white-text-value">70 pts</p>
          <div class="single-league-main-actions-points-title">
            <p>GENERAL RANK</p>
            <img src="/icons/caretDown.svg" />
          </div>
          <div v>
            <p class="white-text-value"> {{  `${competitionInfo.current_position} / ${competitionInfo.player_count}` }} </p>
          </div>
        </div>
        <div class="single-league-main-actions-pool">
          <p class="single-league-main-actions-pool-title">Current pool amount</p>
          <p class="white-text-value">{{ formatAmount(competitionInfo.current_pool_prize) }}</p>
          <button @click="openModal">Put money in the pool</button>
          <NuxtLink to="/dashboard/competitions/epl">
            <p class="single-league-main-actions-pool-helper">What is this?</p>
          </NuxtLink>
        </div>
        <div class="single-league-main-actions-scoring">
          <div class="single-league-main-actions-scoring-header">
            <p>Scoring points</p>
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
  <CustomModal v-if="showModal" @close="closeModal">
    <PaymentForm/>
  </CustomModal>
</template>

<script setup lang="ts">
const props = defineProps();
import { useFixturesStore } from "@/store/fixturesStore";
import { formatAmount } from "../../helpers/moneyformatter";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  document.body.classList.add('block-modal');
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("block-modal");
};

const fixtureStore = useFixturesStore();

const slug = ref('');
const leagueFixture = ref(`${route.params.slug}`);

const events = fixtureStore.getters.getMatchEvents;
const fixtures = fixtureStore.getters.getFixtures;
let competitionInfo = {
  current_position: '-',
  player_count: '-',
  current_pool_prize: '0',
}


const matchData = [
  {
    id: 11,
    home_team: "Aston Villa",
    home_team_score: null,
    away_team: "Everton",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 12,
    home_team: "Crystal Palace",
    home_team_score: null,
    away_team: "Arsenal",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 13,
    home_team: "Fulham",
    home_team_score: null,
    away_team: "Brentford",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 14,
    home_team: "Liverpool",
    home_team_score: null,
    away_team: "Bournemouth",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 15,
    home_team: "Luton",
    home_team_score: null,
    away_team: "Burnley",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 16,
    home_team: "Man City",
    home_team_score: null,
    away_team: "Newcastle",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 17,
    home_team: "Nottingham Forest ",
    home_team_score: null,
    away_team: "Sheffield Utd",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 18,
    home_team: "Spurs",
    home_team_score: null,
    away_team: "Man Utd",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 19,
    home_team: "West Ham",
    home_team_score: null,
    away_team: "Chelsea",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
  {
    id: 20,
    home_team: "Wolves",
    home_team_score: null,
    away_team: "Brighton",
    away_team_score: null,
    has_finished: false,
    kickoff_time: "2023-08-19T14:00:00.000Z",
    competition_slug: "epl",
    home_team_color: null,
    away_team_color: null,
    top_predictions: [],
  },
];

const scoringData = [
  { point: 5, desc: "For predicting correct score" },
  { point: 1, desc: "For predicting who wins" },
  { point: 1, desc: "For predicting who wins" },
  { point: 1, desc: "For predicting who wins" },
  { point: 1, desc: "For predicting who wins" },
];
onMounted(async () => {
  try {
    const res = fixtureStore.action.fetchEvents(leagueFixture.value);
    res.then(async (res: any) => {
      if (res) {
        await fixtureStore.action.fetchCompetitions();
      }
      const competitions = fixtureStore.getters.getCompetitions;
      competitionInfo = competitions?.value.find((e: any) => e.slug === leagueFixture.value);
    });
  } catch (error) {
    return error;
  }
});

const fetchCurrentMatchesSelected = (round: string) => {
  fixtureStore.action.fetchFixtures(leagueFixture.value, round);
};
</script>

<style lang="scss" scoped src="./SingleLeague.scss"></style>
