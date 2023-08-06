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
        :class="{ 'leagues-card-disabled': !league.isActive }"
      >
        <div class="leagues-card-top">
          <div class="leagues-card-top-flex custom-margin-28">
            <div class="leagues-card-top-logo">
              <img :src="league?.imageUrl" />
            </div>
            <div class="leagues-card-top-meta">
              <p v-if="league?.hasStarted" class="leagues-card-top-meta-status">Active</p>
              <p v-else class="leagues-card-top-meta-status">Starts in {{ league?.startsIn }}</p>
              <p class="leagues-card-top-meta-name">{{ league?.name }}</p>
              <p class="leagues-card-top-meta-country">{{ league?.country }}</p>
            </div>
          </div>
          <div class="leagues-card-top-flex">
            <div class="leagues-card-top-desc">
              <p class="leagues-card-top-desc-title">Pool prize</p>
              <div class="leagues-card-top-flex">
                <div class="leagues-card-top-desc-icon">
                  <img src="/icons/Trophy.svg" />
                </div>
                <p class="leagues-card-top-desc-num">₦{{ league?.poolPrize }}</p>
              </div>
            </div>
            <div class="leagues-card-top-desc">
              <p class="leagues-card-top-desc-title">Participants</p>
              <div class="leagues-card-top-flex">
                <div class="leagues-card-top-desc-icon">
                  <img src="/icons/Medal.svg" />
                </div>
                <p class="leagues-card-top-desc-num">{{ league?.participants }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leagues-card-bottom">
          <div v-if="!league?.isActive" class="leagues-card-bottom-button">Coming Soon</div>
          <button
            v-else-if="!league?.hasStarted"
            class="leagues-card-bottom-button"
            @click="openModal"
          >
            Join Competition
          </button>
          <button v-else class="leagues-card-bottom-button">Predict</button>
        </div>
      </div>
    </div>
  </div>
  <CustomModal v-if="showModal" @close="closeModal">
    <TeamSelect />
  </CustomModal>
</template>

<script setup>
import { ref } from "vue";
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  document.body.classList.add('block-modal');
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("block-modal");
};

const leagueItems = [
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: true,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
  {
    name: "Premier league",
    imageUrl: "/icons/plLogo.png",
    hasStarted: false,
    startsIn: "4 weeks",
    country: "England",
    poolPrize: "500,000",
    participants: "2231",
    isActive: false,
  },
];
</script>

<style lang="scss" scoped src="./Leagues.scss"></style>
