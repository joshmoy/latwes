<template>
  <div>
    <div class="prediction-card">
        <div class="prediction-card__teams">
            <p class="prediction-card__teams--heading">Enter your prediction</p>
            <div class="prediction-card__teams--body">
                <div class="team-input__a">
                    <div class="team-input__a__color logo"></div>
                    <p>Bolton</p>
                </div>
                <div class="team-prediction">
                    <div class="team-input__a__prediction">
                        <div v-if="homeTeamPredictionActive">
                            <input type="text">
                        </div>
                        <div v-else class="plus">
                            <svgo-prediction-plus />
                        </div>
                    </div>
                    <p class="column">:</p>
                    <div class="team-input__b__prediction">
                        <div v-if="awayTeamPredictionActive">
                            <input type="text">
                        </div>
                        <div v-else class="plus">
                            <svgo-prediction-plus />
                        </div>
                    </div>
                </div>
                <div class="team-input__b">
                    <div class="team-input__b__color logo"></div>
                    <p>Bolton</p>
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
            <div class="prediction-card__stats--right">
                <p class="kick-off">Kick off</p>
                <p class="date">Wed May 10, 4:00pm</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const homeTeamPredictionActive = ref(false);
const awayTeamPredictionActive = ref(false);

</script>

<style lang="scss" scoped src="./PredictionCard.scss"></style>