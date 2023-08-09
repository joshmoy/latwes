<template>
  <div>
    <div class="prediction-card">
      <p class="prediction-card__teams--heading">Enter your prediction</p>
      <div class="prediction-card__teams">
        <div class="prediction-card__teams--body">
          <div class="team-input__a">
            <div
              class="team-input__a__color logo"
              :style="{
                background: matchData?.home_team_color,
              }"
            ></div>
            <p>{{ matchData?.home_team }}</p>
          </div>
          <div class="team-prediction">
            <div class="team-input__a__prediction">
              <div class="plus" @click="handleShowInput">
                <input
                  type="tel"
                  v-if="showInput"
                  v-model="homeInputValue"
                  @blur="handleBlur(matchData.id)"
                  ref="homeInput"
                />
                <img src="/icons/plus.svg" v-else />
              </div>
            </div>
            <p class="column">-</p>
            <div class="team-input__b__prediction">
              <div class="plus" @click="handleShowInput">
                <input type="tel" v-if="showInput" v-model="awayInputValue" @blur="handleBlur(matchData.id)" />
                <img src="/icons/plus.svg" v-else />
              </div>
            </div>
          </div>
          <div class="team-input__b">
            <div
              class="team-input__b__color logo"
              :style="{
                background: matchData?.away_team_color,
              }"
            ></div>
            <p>{{ matchData?.away_team }}</p>
          </div>
        </div>
      </div>
      <div class="points">4pts</div>
      <div class="prediction-card__stats">
        <div class="prediction-card__stats--left">
          <p class="top">Top predictions</p>
          <div class="scores" v-if="matchData?.top_predictions.length > 0">
            <div v-for="(prediction, index) in matchData.top_predictions" :key="index">
              <p class="score">{{ prediction.score }}</p>
              <p class="percent">{{ +prediction.percent }}%</p>
            </div>
          </div>
          <p v-else class="predict-helper">Be the first to predict!</p>
        </div>
        <div class="prediction-card__stats--middle">
          <p class="match-ended">
            {{
              currentDate < matchDate
                ? "Kick Off"
                : matchData?.has_finished
                ? "Match Ended"
                : "Live Score"
            }}
          </p>
          <p class="score">
            {{
              currentDate < matchDate
                ? formattedDate
                : matchData?.home_team_score + "-" + matchData?.away_team_score
            }}
          </p>
        </div>
        <div class="prediction-card__stats--right">
          <p class="kick-off">Points earned</p>
          <div class="points">
            <p>{{ pointsEarned === 1 ? "1pt" : pointsEarned + "pts" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { dateFormatter } from "../../helpers/dataFormatter";
import { predictMatch } from "../../services/Prediction";
const route = useRoute();

const router = useRouter();
const showInput = ref(false);
const homeInput = ref<HTMLInputElement | null>(null);
const homeInputValue = ref("");
const awayInputValue = ref("");

const props = defineProps({
  matchData: {
    type: Object,
    required: true,
  },
});

const currentDate = new Date();
const matchDate = new Date(props.matchData.kickoff_time);
const pointsEarned = currentDate < matchDate ? 0 : props.matchData.points;
const homeTeamScore = props.matchData.predicted_home_team_score;
const awayTeamScore = props.matchData.predicted_away_team_score;

const formattedDate = dateFormatter(matchDate);

const handleShowInput = () => {
  if (showInput.value === true) return;
  showInput.value = true;
  nextTick(() => {
    if (homeInput.value) {
      homeInput.value.focus();
    }
  });
};

const handleHideInput = () => (showInput.value = false);

const handleSubmit = async (id: number) => {
  const payload = { home_team_score: +homeInputValue.value, away_team_score: +awayInputValue.value };
  const slug = `${route.params.slug}`
  await predictMatch(slug, id, payload)
};

const handleBlur = (id: number) => {
  if (!homeInputValue.value && !awayInputValue.value) {
    // show prediction cleared
    return handleHideInput();
  }
  if (homeInputValue.value && !awayInputValue.value) {
    // show away prediction is needed
    return;
  }

  if (!homeInputValue.value && awayInputValue.value) {
    // show home prediction is needed
    return;
  }
  handleSubmit(id);
};

onMounted(() => {
  if (Number(homeTeamScore) >= 0) {
    homeInputValue.value = homeTeamScore;
    awayInputValue.value = awayTeamScore;
    showInput.value = true;
  }
})
</script>

<style lang="scss" scoped src="./HomePredictionCard.scss"></style>
