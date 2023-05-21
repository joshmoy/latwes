<template>
  <div>
    <div class="upcoming-fixtures">
        <div class="upcoming-fixtures__header">
          <h1>Upcoming Fixtures</h1>
          <p>Make your predictions, rack up points.</p>
        </div>
        <div class="upcoming-fixtures__tabs">
            <div class="upcoming-fixtures__tabs__tab english">
              <div class="english_image"></div>
              <p>English Premier League</p>
            </div>
            <div
              class="upcoming-fixtures__tabs__tab champions"
              @mouseover="championsLeagueIsHoverState = true"
              @mouseleave="championsLeagueIsHoverState = false">
              <div class="champions_image" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
              <p>UEFA Champions League</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let championsLeagueIsHoverState = ref(false)
let championsLeagueIsActiveState = ref(false)

let backgroundUrl = ref('../../assets/icons/champions-league-inactive.svg')

watch(championsLeagueIsHoverState, (val) => {
  if(val === true) {
    console.log('hover');
    backgroundUrl.value = '../../assets/icons/champions-league-hover.svg';
  } else if (val === false) (
    backgroundUrl.value = '../../assets/icons/champions-league-inactive.svg'
  )
}, { immediate: true })

</script>

<style src="./LandingUpcomingFixtures.scss"></style>