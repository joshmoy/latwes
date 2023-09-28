<template>
  <div class="pool-banner">
    <div class="pool-banner-flex">
      <img src="/icons/newDashboardCurrency.svg" class="first-image" />
      <div class="pool-banner-text">
        <p class="pool-banner-text-title">Current pool amount</p>
        <p>{{ '₦ '+formatAmount(+competitionInfo?.current_pool_prize) }}</p>
      </div>
    </div>
    <div class="pool-banner-flex">
      <button @click="openModal">Put money in the pool</button>
      <img src="/icons/newPool.svg" class="second-image" />
    </div>
  </div>
    <CustomModal v-if="showModal" @close="closeModal">
    <PaymentForm />
  </CustomModal>
</template>

<script setup lang="ts">
import { useFixturesStore } from "@/store/fixturesStore";
import { useToast } from "vue-toastification";
import { formatAmount } from "../../helpers/moneyformatter";


const $toast = useToast();
const route = useRoute();

const fixtureStore = useFixturesStore();
const leagueFixture = ref(`${route.params.slug}`);

let competitions = fixtureStore.getters.getCompetitions as Record<string, any>;
let competitionInfo = {
  current_position: "-",
  player_count: "-",
  current_pool_prize: "0",
  logo: "",
  name: "",
};

watch(competitions, (newValue) => {
  competitionInfo = newValue?.find((e: any) => e.slug === leagueFixture.value);
  console.log(competitionInfo);
});

const showModal = ref(false);
const isLoading = ref(true);
const isActive = ref(false);
const daysDiff = ref("");
const currentDate = new Date();

const openModal = () => {
  showModal.value = true;
  document.body.classList.add("block-modal");
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("block-modal");
};
</script>

<style lang="scss" scoped src="./PoolBanner.scss"></style>
