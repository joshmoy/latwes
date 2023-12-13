<template>
  <div class="pool-banner">
    <div class="pool-banner-flex">
      <div class="pool-banner-text">
        <p class="pool-banner-text-title">{{ fixture?.has_finished ? 'Match Ended' : 'Live Score' }}</p>
        <p>{{ fixture?.home_team }} {{ fixture?.home_team_score }} - {{ fixture?.away_team_score }} {{ fixture?.away_team }}</p>
      </div>
    </div>
    <div class="pool-banner-flex">
       <div class="pool-banner-flex--right">
          <p class="kick-off">Points earned</p>
          <div
            class="points"
            :class="{
              'points-lemon': fixture?.score === 6,
              'points-orange': fixture?.score > 0 && fixture?.score < 6,
            }"
          >
            <p>
              {{
                fixture?.score === 1
                  ? "1pt"
                  : fixture?.score === null
                  ? 0 + "pts"
                  : fixture?.score + "pts"
              }}
            </p>
          </div>
        </div>
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
