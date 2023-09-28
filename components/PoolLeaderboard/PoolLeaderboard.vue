<template>
  <section class="leaderboard-wrapper" v-if="tableData && tableData.length > 0">
    <div class="container leaderboard-container">
      <div class="leaderboard-container__filter">
        <select name="leaderboard" id="leaderboardId" @change="update" v-model="filter">
          <option value="real" disabled selected>Filter Pool Leaderboard</option>
          <option value="all">All Time</option>
          <option v-for="(val, id) in filteredEvent" :key="id" :value="val.match_day">
            {{ val.name }}
          </option>
        </select>
      </div>
      <div class="off-table">
        <div class="off-table-body">
          <div class="off-table-row" v-for="(el, id) in tableData" :key="id">
            <span class="off-table-name">
              {{ id + 1 }}.
              <span class="off-table-color">
                {{ el?.username }}
              </span>
            </span>
            <span class="off-table-points">{{ el?.score }}</span>
            <span class="off-table-amount">{{
              "₦ " + (id === 0 ? formatAmount(+competitionInfo?.current_pool_prize) : 0)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./PoolLeaderboard.scss"></style>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";
import { formatAmount } from "../../helpers/moneyformatter";

const props = defineProps({
  tableData: {
    type: Array,
    required: false,
  },
  events: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["updateLeaderboard"]);

const route = useRoute();

const fixtureStore = useFixturesStore();

const leagueFixture = ref(`${route.params.slug}`);

let competitions = fixtureStore.getters.getCompetitions as Record<string, any>;

let competitionInfo = {
  current_pool_prize: "0",
};

watch(competitions, (newValue) => {
  competitionInfo = newValue?.find((e: any) => e.slug === leagueFixture.value);
});

const filter = ref("real");

const filteredEvent = props.events.events.filter(
  (val: { match_day: number }) => val.match_day <= props.events.current_round
);

const update = () => {
  const payload = filter.value.toString();

  emit("updateLeaderboard", payload);
};
</script>
