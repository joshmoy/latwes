<template>
  <section class="leaderboard-wrapper">
    <div class="leaderboard-header" v-if="!tableOnly">
      <h3 class="section-title">View the leaderboard, track your performance.</h3>
      <p class="section-subtitle">Make your predictions, rack up points.</p>
    </div>
    <div class="container leaderboard-container">
      <div class="off-table">
        <div class="off-table-header">
          <span>User</span>
          <span>Total predictions</span>
          <span>Total points earned</span>
        </div>
        <div class="off-table-body">
          <div class="off-table-row" v-for="(el, id) in data" :key="id">
            <span class="off-table-name">
              {{ id }}. <span class="off-table-color"></span>
              {{ el?.username }}
            </span>
            <span class="off-table-predictions" v-if="!tableOnly">26</span>
            <span class="off-table-points">{{ el?.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped src="./Leaderboard.scss"></style>

<script setup lang="ts">
const props = defineProps({
  tableOnly: {
    type: Boolean,
    required: false,
    default: false,
  },
  tableData: {
    type: Array,
    required: false,
  },
});

const dummyData = [
  {
    score: "52",
    count: "30",
    id: "VLsoKr9MCIl3CW6Jzxg1rxHiLZWDW94c",
    username: "ominitayo",
    profile_photo: null,
  },
  {
    score: "52",
    count: "20",
    id: "Xs0EYlhyzhdRdV228KVOBUDrMVZ6gw5q",
    username: "codechef",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
  {
    score: "38",
    count: "20",
    id: "vtpcP5wBR5vyiLizGrqcQDqHcmk5Gc4j",
    username: "addempsea",
    profile_photo: null,
  },
];

const data: typeof dummyData = props?.tableData
  ? (props?.tableData as typeof dummyData)
  : dummyData;
</script>
