<template>
  <section class="leaderboard-wrapper">
    <div class="container leaderboard-container">
      <div class="leaderboard-container__filter">
        <select name="leaderboard" id="leaderboardId" @change="update" v-model="filter">
          <option value="real" disabled selected>Filter Leaderboard</option>
          <option value="all">All Time</option>
          <option v-for="(val, id) in filteredEvent" :key="id" :value="val.match_day">
            {{ val.name }}
          </option>
        </select>
      </div>
      <div class="off-table">
        <div :class="isFullVersion ? 'leaderboard-header' : 'off-table-header'">
          <span>Username</span>
          <span>Points</span>
          <span>Six Points</span>
          <span>Username</span>
          <span>Points</span>
          <span>Six Points</span>
          <span>Six Points</span>
        </div>
        <div class="off-table-body">
          <div
            :class="isFullVersion ? 'leaderboard-row' : 'off-table-row'"
            v-for="(el, id) in tableData.leaderboard"
            :key="id"
          >
            <span class="off-table-name">
              {{ id + 1 }}.
              <span class="off-table-color">
                {{ el?.username }}
              </span>
            </span>
            <span class="off-table-points">{{ el?.score }}</span>
            <span class="off-table-points" v-if="isFullVersion">{{ el?.six_points }}</span>
            <span class="off-table-points" v-if="isFullVersion">{{ el?.four_points }}</span>
            <span class="off-table-points" v-if="isFullVersion">{{ el?.three_points }}</span>
            <span class="off-table-points" v-if="isFullVersion">{{ el?.one_point }}</span>
            <span class="off-table-points" v-if="isFullVersion">{{ el?.one_point }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./DashboardLeaderboard.scss"></style>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";

const props = defineProps({
  tableData: {
    type: Array,
    required: false,
  },
  events: {
    type: Object,
    required: true,
  },
  isFullVersion: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["updateLeaderboard"]);

const data = props?.tableData ? props?.tableData : [];

const filter = ref("real");
const fixtureStore = useFixturesStore();

const filteredEvent = props.events.events.filter(
  (val: { match_day: number }) => val.match_day <= props.events.current_round
);

const isFullVersion = props.isFullVersion;

const update = () => {
  const payload = filter.value.toString();

  emit("updateLeaderboard", payload);
};
</script>
