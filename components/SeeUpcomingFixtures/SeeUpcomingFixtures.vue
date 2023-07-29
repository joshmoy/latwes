<template>
  <div class="see-upcoming-fixtures-container">
    <div class="see-upcoming-fixtures">
        <div class="see-upcoming-fixtures__header">
          <h1>See Upcoming Fixtures.</h1>
          <p>Make your predictions, rack up points.</p>
        </div>
    </div>
    <div class="prediction-cards">
      <div class="prediction-cards__child" v-for="(fixture, index) in 3" :key="index">
        <HomePredictionCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped src="./SeeUpcomingFixtures.scss"></style>