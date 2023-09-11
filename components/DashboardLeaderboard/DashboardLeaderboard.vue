<template>
  <section class="leaderboard-wrapper">
    <div class="container leaderboard-container">
      <div class="off-table">
        <div class="off-table-body">
          <div class="off-table-row" v-for="(el, id) in tableData" :key="id">
            <span class="off-table-name">
              {{ id + 1 }}. <span class="off-table-color"></span>
              {{ el?.username }}
            </span>
            <span class="off-table-points">{{ el?.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./DashboardLeaderboard.scss"></style>

<script setup lang="ts">
const props = defineProps({
  tableData: {
    type: Array,
    required: false,
  },
});


const data = props?.tableData ? props?.tableData : [];

</script>
