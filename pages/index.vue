<template>
  <HeroHeader />
  <div class="upcoming-fixtures-pool">
    <SeeUpcomingFixtures />
    <MoneyPool />
  </div>
  <Leaderboard />
  <FrequentlyAskedQuestions />
  <Footer />
</template>
<script setup>
const { gtag } = useGtag()

gtag('event', 'screen_view', {
  app_name: 'Goborr',
  screen_name: 'Home'
})
</script>

<style lang="scss">
.upcoming-fixtures-pool {
  background-image: url("../assets/icons/big-arrow.svg");
  background-repeat: no-repeat;
  background-size: auto;
  @media screen and (min-width: 1512px) {
    background-size: cover;
  }
}
</style>
