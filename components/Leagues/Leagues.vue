<template>
  <div class="leagues">
    <div class="leagues-title">
      <p>Football Leagues</p>
      <div class="leagues-title-border"></div>
    </div>
    <div class="leagues-grid">
      <div
        class="leagues-card"
        v-for="(league, index) in leagueItems"
        :key="index"
        :class="{ 'leagues-card-disabled': !league.is_active }"
      >
        <div class="leagues-card-top">
          <div class="leagues-card-top-flex custom-margin-28">
            <div class="leagues-card-top-logo">
              <img v-if="league?.logo" :src="league?.logo" />
              <img v-else src="/icons/plLogo.png" alt="premier league logo">
            </div>
            <div class="leagues-card-top-meta">
              <p v-if="league?.hasStarted" class="leagues-card-top-meta-status">Active</p>
              <p v-else class="leagues-card-top-meta-status">Starts in {{ league?.startsIn }}</p>
              <p class="leagues-card-top-meta-name">{{ league?.name }}</p>
              <p class="leagues-card-top-meta-country">{{ league?.tag }}</p>
            </div>
          </div>
          <div class="leagues-card-top-flex">
            <div class="leagues-card-top-desc">
              <p class="leagues-card-top-desc-title">Pool prize</p>
              <div class="leagues-card-top-flex">
                <div class="leagues-card-top-desc-icon">
                  <img src="/icons/Trophy.svg" />
                </div>
                <p class="leagues-card-top-desc-num">₦{{ league?.current_pool_prize }}</p>
              </div>
            </div>
            <div class="leagues-card-top-desc">
              <p class="leagues-card-top-desc-title">Participants</p>
              <div class="leagues-card-top-flex">
                <div class="leagues-card-top-desc-icon">
                  <img src="/icons/Medal.svg" />
                </div>
                <p class="leagues-card-top-desc-num">{{ league?.player_count }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leagues-card-bottom">
          <div v-if="!league?.is_active" class="leagues-card-bottom-button">Coming Soon</div>
          <button
            v-else-if="league?.current_position !== null"
            class="leagues-card-bottom-button"
            @click="router.push('/dashboard/competitions/slug')"   
          >
            Predict
          </button>
          <button v-else @click="openModal(league)" class="leagues-card-bottom-button">Join competition</button>
        </div>
      </div>
    </div>
  </div>
  <CustomModal v-if="showModal" @close="closeModal">
    <TeamSelect :singleLeague="singleLeague"/>
  </CustomModal>
</template>

<script setup>
import { ref } from "vue";
import { useFixturesStore } from '@/store/fixturesStore'

const fixtureStore = useFixturesStore();
const router = useRouter();

const showModal = ref(false);
const singleLeague = ref({})

const openModal = (league) => {
  showModal.value = true;
  singleLeague.value = league;
  document.body.classList.add('block-modal');
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("block-modal");
};

const leagueItems = fixtureStore.getters.getCompetitions;

onMounted(() => {
  fixtureStore.action.fetchCompetitions();
})
</script>

<style lang="scss" scoped src="./Leagues.scss"></style>
