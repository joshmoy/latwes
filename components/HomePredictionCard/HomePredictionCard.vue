<template>
    <div>
      <div class="prediction-card">
          <p class="prediction-card__teams--heading">Enter your prediction</p>
          <div class="prediction-card__teams">
              <div class="prediction-card__teams--body">
                  <div class="team-input__a">
                      <div class="team-input__a__color logo"></div>
                      <p>Bolton</p>
                  </div>
                  <div class="team-prediction">
                      <div class="team-input__a__prediction">
                          <div class="plus" @click="signupToPredict">
                              <svgo-prediction-plus />
                          </div>
                      </div>
                      <p class="column">-</p>
                      <div class="team-input__b__prediction">
                          <div class="plus" @click="signupToPredict">
                              <svgo-prediction-plus />
                          </div>
                      </div>
                  </div>
                  <div class="team-input__b">
                      <div class="team-input__b__color logo"></div>
                      <p>Wolves</p>
                  </div>
              </div>
          </div>
          <div class="points">
              4pts
          </div>
          <div class="prediction-card__stats">
              <div class="prediction-card__stats--left">
                  <p class="top">Top predictions</p>
                  <div class="scores">
                      <div>
                          <p class="score">2-1</p>
                          <p class="percent">30%</p>
                      </div>
                      <div>
                          <p class="score">2-1</p>
                          <p class="percent">30%</p>
                      </div>
                      <div>
                          <p class="score">2-1</p>
                          <p class="percent">30%</p>
                      </div>
                  </div>
              </div>
              <div class="prediction-card__stats--middle">
                  <p class="match-ended">Match Ended</p>
                  <p class="score">0-1</p>
              </div>
              <div class="prediction-card__stats--right">
                  <p class="kick-off">Points earned</p>
                  <div class="points">
                    <p>4pts</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
const router = useRouter();

const signupToPredict = () => {
  router.push({ path: "/login" });
}
</script>
  
<style lang="scss" scoped src="./HomePredictionCard.scss"></style>