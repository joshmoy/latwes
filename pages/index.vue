<template>
  <HeroHeader />
  <Leaderboard />
  <FrequentlyAskedQuestions />
  <Footer />
</template>

<script setup lang="ts">

const homeState: HomeState = {
  weekPrice: 5000000.00,
  weekStake: 16,
  weekDeadline: '1pm, Thursday, June 2023'
}

</script>

<style lang="scss"></style>
