<template>
  <div class="select">
    <div class="select-top">
      <div class="select-top-meta">
        <div class="select-top-meta-image">
          <img src="/icons/plLogo.png" />
        </div>
        <div class="select-top-meta-desc">
          <p class="select-top-meta-desc-name">Premier League</p>
          <p class="select-top-meta-desc-start">Starts in 4 weeks</p>
        </div>
      </div>
      <div class="select-top-profile">
        <div>
          <p class="select-top-profile-desc">Hi there</p>
          <p class="select-top-profile-username">@23rdstreetinthe</p>
        </div>
        <div class="select-top-profile-avatar">
          <img src="/icons/signup-bg.svg" />
        </div>
      </div>
    </div>
    <div class="select-bottom">
      <p class="select-bottom-title">What team do you support?</p>
      <div class="select-bottom-grid">
        <div
          class="select-bottom-grid-team-card"
          v-for="(team, index) in teams"
          :key="index"
          :style="{
            border: index + 1 === teamIndex ? '1px solid' + team?.color : 'none',
          }"
          @click="handleSelectTeam(index)"
        >
          <div class="select-bottom-grid-team-card-top">
            <p>{{ team?.name }}</p>
          </div>
          <div
            :style="{
              backgroundColor: team?.color,
              height: '40px',
              borderRadius: '0 0 8px 8px',
            }"
          ></div>
        </div>
      </div>
      <div class="select-bottom-buttons">
        <button @click="handleRoute">Skip</button>
        <button @click="handleProceed">Start predicting</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";

const $toast = useToast();
const router = useRouter();
const teamIndex = ref(0);

const teams = [
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
  { name: "ARS", color: "#000" },
];

const handleSelectTeam = (id: number) => {
  teamIndex.value = id + 1;
};

const handleRoute = () => router.push("/dashboard/competitions/slug");

const handleProceed = () => {
  if (teamIndex.value < 1) {
    return $toast.error("You have to select a team to proceed!", {
      timeout: 5000,
    });
  }
  
  handleRoute()
};
</script>

<style lang="scss" scoped src="./TeamSelect.scss"></style>
