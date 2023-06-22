<template>
  <div>
    <div class="upcoming-fixtures">
        <div class="upcoming-fixtures__header">
          <h1>Upcoming Fixtures</h1>
          <p>Make your predictions, rack up points.</p>
        </div>
        <div class="upcoming-fixtures__tabs">
            <div class="upcoming-fixtures__tabs__tab english"
              :class="{'english__hover': premierLeagueIsHoverState, 'english__active': premierLeagueIsActiveState}"
              @mouseover="premierLeagueIsHoverState = true"
              @mouseleave="premierLeagueIsHoverState = false"
              @click="premierLeagueIsActiveState = true; championsLeagueIsActiveState= false">
              <div class="english_image">
                <img :src="premierBackgroundUrl" alt="">
              </div>
              <p>English Premier League</p>
            </div>
            <div
              class="upcoming-fixtures__tabs__tab champions"
              :class="{'champions__hover': championsLeagueIsHoverState, 'champions__active': championsLeagueIsActiveState}"
              @mouseover="championsLeagueIsHoverState = true"
              @mouseleave="championsLeagueIsHoverState = false"
              @click="championsLeagueIsActiveState = true; premierLeagueIsActiveState= false">
              <div class="champions_image">
                <img :src="championsBackgroundUrl" alt="">
              </div>
              <p>UEFA Champions League</p>
            </div>
        </div>
    </div>
    <DateScroll />
    <div class="prediction-cards">
      <div class="prediction-cards__child" v-for="(n, index) in 10" :key="index">
        <PredictionCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

//@ts-ignore
// import championsLeagueHoverImage from '~/assets/icons/champions-league-hover.svg'

let premierLeagueIsActiveState = ref(true)
let premierLeagueIsHoverState = ref(false)
let championsLeagueIsActiveState = ref(false)
let championsLeagueIsHoverState = ref(false)

let championsBackgroundUrl = ref('/icons/champions-league-inactive.svg')
let premierBackgroundUrl = ref('/icons/england-flag.svg')

watch(championsLeagueIsHoverState, (val) => {
  if(val === true && !championsLeagueIsActiveState) {
    championsBackgroundUrl.value = '/icons/champions-league-hover.svg';
  } else (
    championsBackgroundUrl.value = '/icons/champions-league-inactive.svg'
  )
}, { immediate: true })

// watch(premierLeagueIsHoverState, (val) => {
//   if(val === true) {
//     premierBackgroundUrl.value = '/icons/england-flag.svg';
//   } else if (val === false) (
//     premierBackgroundUrl.value = '/icons/england-flag.svg'
//   )
// }, { immediate: true })

</script>

<style lang="scss" scoped src="./LandingUpcomingFixtures.scss"></style>