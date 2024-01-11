<template>
  <section class="leaderboard-wrapper">
    <div class="container leaderboard-container">
      <div class="leaderboard-container__filter">
        <select name="leaderboard" id="leaderboardId" @change="update" v-model="filter">
          <option value="real" disabled selected>
            Filter {{ !isAfcon ? "Pool" : "" }} Leaderboard
          </option>
          <option value="all" v-if="isAfcon">All Time</option>
          <option v-for="(val, id) in filteredEvent" :key="id" :value="val.match_day">
            {{ val.name }}
          </option>
        </select>
      </div>
      <div class="off-table">
        <div class="off-table-body">
          <div class="off-table-row" v-for="(el, id) in tableData?.leaderboard" :key="id">
            <span class="off-table-name">
              {{ id + 1 }}.
              <span class="off-table-color">
                {{ el?.username }}
              </span>
            </span>
            <span class="off-table-points">{{ el?.score }}</span>
            <span class="off-table-amount">{{ determineAmount(id) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./PoolLeaderboard.scss"></style>

<script setup lang="ts">
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
  isAfcon: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["updateLeaderboard"]);

const filter = ref("real");

const filteredEvent = props.events.events.filter(
  (val: { match_day: number }) => val.match_day <= props.events.current_round
);

const update = () => {
  const payload = filter.value.toString();
  emit("updateLeaderboard", payload);
};

const determineAmount = (rowIndex: number): string | number => {
  if (props?.isAfcon && (filter.value === "real" || filter.value === "all")) {
    switch (rowIndex) {
      case 0: return formatSymbolAmount(1000000);
      case 1: return formatSymbolAmount(400000);
      case 2: return formatSymbolAmount(300000);
      case 3: return formatSymbolAmount(200000);
      case 4: return formatSymbolAmount(100000);
      default: return '₦0';
    }
  } else {
    return rowIndex === 0 ? formatSymbolAmount(+props?.tableData?.poolAmount) : '₦0';
  }
};
</script>
