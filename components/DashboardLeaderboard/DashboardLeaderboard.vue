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
        <div :class="isFullVersion ? 'leaderboard-header' : 'off-table-header'" v-if="isFullVersion">
          <span v-if="isFullVersion">Username</span>
          <span v-if="isFullVersion">Points</span>
          <span v-if="isFullVersion">Six Points</span>
          <span v-if="isFullVersion">Four Points</span>
          <span v-if="isFullVersion">Three Points</span>
          <span v-if="isFullVersion">One Point</span>
          <span v-if="isFullVersion">Amount Earned</span>
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
            <span class="off-table-points" v-if="isFullVersion">{{ determineAmount(id) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./DashboardLeaderboard.scss"></style>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";
import { formatSymbolAmount } from "../../helpers/moneyformatter";

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
  slug: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["updateLeaderboard"]);

const data = props?.tableData ? props?.tableData : [];
const slug = props?.slug;

const filter = ref("real");
const fixtureStore = useFixturesStore();
const route = useRoute();

const query: string | undefined = (route.query && route.query.for_pool)?.toString();
const forPool = query === "yes"

const filteredEvent = props.events.events.filter(
  (val: { match_day: number }) => val.match_day <= props.events.current_round
);

const isFullVersion = props.isFullVersion;
const determineAmount = (rowIndex: number): string | number => {
  if (slug === 'afcon' && filter.value === "all") {
    switch (rowIndex) {
      case 0:
        return formatSymbolAmount(5000000);
      case 1:
        return formatSymbolAmount(3000000);
      case 2:
        return formatSymbolAmount(2000000);
      case 3:
        return formatSymbolAmount(1000000);
      case 4:
        return formatSymbolAmount(1000000);
      default:
        return "₦0";
    }
  } else if (slug === 'afcon') {
    switch (rowIndex) {
      case 0:
        return formatSymbolAmount(1000000);
      case 1:
        return formatSymbolAmount(400000);
      case 2:
        return formatSymbolAmount(300000);
      case 3:
        return formatSymbolAmount(200000);
      case 4:
        return formatSymbolAmount(100000);
      default:
        return "₦0";
    }
  } else {
    return rowIndex === 0 ? formatSymbolAmount(+props?.tableData?.poolAmount) : "₦0";
  }
};

const update = () => {
  const payload = filter.value.toString();

  emit("updateLeaderboard", payload, forPool);
};
</script>
