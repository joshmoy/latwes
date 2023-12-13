<template>
  <Spinner v-if="isLoading" isCenter />
  <div class="all-predictions" v-else>
    <div class="all-predictions__goBackFlex" @click="goBack">
      <svgo-match-arrrow />
      <p>Go back</p>
    </div>

    <ViewPredictionBanner :fixture="fixtureDetails" />

    <div class="all-predictions-main">
      <div class="prediction-cards">
        <PredictionsTable :predictions="predictions" />
      </div>
      <div class="all-predictions-main-actions">
        <div class="all-predictions-main-actions-scoring">
          <div class="all-predictions-main-actions-scoring-header">
            <p>Scoring System</p>
          </div>
          <div class="all-predictions-main-actions-scoring-body">
            <div
              v-for="(scoreData, id) in scoringData"
              :key="id"
              class="all-predictions-main-actions-scoring-body-flex"
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
import { ref } from "vue";
import { useToast } from "vue-toastification";

const $toast = useToast();
const route = useRoute();
const router = useRouter();
const fixtureStore = useFixturesStore();

const isLoading = ref(true);

const scoringData = [
  { point: 3, desc: "Correct outcome" },
  { point: 1, desc: "Home team correct score" },
  { point: 1, desc: "Away team correct score" },
  { point: 1, desc: "Correct goal difference" },
];

const goBack = () => router.back();

const fixtureDetails = ref({});
const predictions = ref([]);

onMounted(async () => {
  const { slug, id } = route.params;
  try {
    const res = await fixtureStore.action.fetchSingleFixture(slug as string, id as string);
    fixtureDetails.value = res?.fixture;
    predictions.value = res?.predictions;
    isLoading.value = false;
  } catch (error) {
    $toast.error((error as any)?.response?.data?.message, {
      timeout: 5000,
    });
    isLoading.value = false;
    return error;
  }
});
</script>

<style lang="scss" scoped src="./ViewPredictions.scss"></style>
