<template>
  <section class="leaderboard-wrapper">
    <div class="container leaderboard-container">
      <div class="off-table">
        <div class="off-table-body">
          <div class="off-table-header">
            <span class="off-table-name"> Username </span>
            <span class="off-table-points">Home Score</span>
            <span class="off-table-points">Away Score</span>
            <span class="off-table-amount">Score</span>
          </div>
          <div class="off-table-row" v-for="(el, id) in predictions" :key="id">
            <span class="off-table-name">
             <span class="tableIndex"> {{ id + 1 }}</span>
              <img :src="el?.profile_photo || '/icons/avatar.webp'" />
              <span class="off-table-color">
                {{ el?.username }}
              </span>
            </span>
            <span class="off-table-points">{{ el?.home_team_score }}</span>
            <span class="off-table-points">{{ el?.away_team_score }}</span>
            <span class="off-table-amount">{{ el?.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./PredictionsTable.scss"></style>

<script setup lang="ts">
interface ITableProps {
  predictions: Record<string, string | number>[];
}

const props = defineProps<ITableProps>();
</script>
