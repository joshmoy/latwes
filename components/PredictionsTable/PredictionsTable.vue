<template>
  <section class="leaderboard-wrapper">
    <div class="container leaderboard-container">
      <div class="off-table">
        <div class="off-table-body">
          <div class="off-table-row" v-for="(el, id) in predictions" :key="id">
            <span class="off-table-name">
             <span class="tableIndex"> {{ id + 1 }}</span>
              <img :src="el?.profile_photo || '/icons/avatar.webp'" alt="user_profile_photo"/>
              <span class="off-table-color">
                {{ el?.username }}
              </span>
            </span>
            <span class="off-table-points">{{ el?.home_team_score }} - {{ el?.away_team_score }}</span>
            <span class="off-table-amount">{{ el?.score }}{{ +el?.score <= 1 ? "pt" : "pts" }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./PredictionsTable.scss"></style>

<script setup lang="ts">
interface ITableProps {
  predictions: Record<string, any>[];
}

const props = defineProps<ITableProps>();
</script>
