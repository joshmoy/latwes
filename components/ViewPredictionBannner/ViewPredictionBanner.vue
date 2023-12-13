<template>
  <div class="pool-banner">
    <div class="pool-banner-flex">
      <div class="pool-banner-text">
        <p class="pool-banner-text-title">Match Details</p>
        <p>{{ fixture?.home_team }} {{ fixture?.home_team_score }} - {{ fixture?.away_team_score }} {{ fixture?.away_team }}</p>
      </div>
    </div>
    <div class="pool-banner-flex">
      <img src="/icons/newPool.svg" class="second-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IPredictionProps {
  fixture: Record<string, string | number>;
}

const props = defineProps<IPredictionProps>();
</script>

<style lang="scss" scoped src="./ViewPredictionBanner.scss"></style>
