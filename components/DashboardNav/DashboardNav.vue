<template>
  <header class="dashboard-header">
    <div class="container dashboard-header-container">
      <div class="dashboard-header-flex">
        <NuxtLink to="/dashboard/competitions">
          <h1 class="dashboard-header-logo">Goborr!!</h1>
        </NuxtLink>
        <nav class="dashboard-header-navigation">
          <ul class="dashboard-header-navigation-links">
            <!-- <NuxtLink to="/dashboard/competitions"> <li>Dashboard</li> </NuxtLink> -->
            <NuxtLink to="/dashboard/competitions"> <li class="active">Competitions</li> </NuxtLink>
          </ul>
        </nav>
      </div>
      <div class="dashboard-header-avatar">
        <img src="/icons/people.png" />
        <button @click="logout">Logout</button>
      </div>
    </div>
  </header>
  <div class="mobile-header">
    <header>
      <div class="logo">Goborr!</div>
      <div aria-label="open-menu" id="nav-icon" @click="showNavigation">
        <span id="spanNav" class="nav1"></span>
        <span id="spanNav" class="nav2"></span>
      </div>
      <div :class="{ mobileDrawer: showNav, hide: !showNav }">
        <div class="mobileDrawer__header">
          <div class="mobileDrawer__header--logo">Goborr!</div>
          <div @click="showNavigation">
            <svg
              stroke="#0052C5"
              fill="#0052C5"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-white"
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
              ></path>
            </svg>
          </div>
        </div>
        <nav class="mobileDrawer__nav">
          <ul>
            <!-- <NuxtLink to="/dashboard"> <li>Dashboard</li> </NuxtLink> -->
            <NuxtLink to="/dashboard/competitions"> <li class="active">Competitions</li> </NuxtLink>
          </ul>
        </nav>
        <div class="dashboard-header-avatar logout">
          <img src="/icons/people.png" />
          <button @click="logout">Logout</button>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped src="./DashboardNav.scss"></style>

<script setup lang="ts">
import { useAuthStore } from "~~/store/authStore";
import { ref } from "vue";

const authStore = useAuthStore();
const router = useRouter();
const userAuthCookie = useCookie("userAuthCookie");

let showNav = ref(false);

const showNavigation = () => {
  showNav.value = !showNav.value;
};

const logout = () => {
  authStore.logoutAction();
  userAuthCookie.value = "";
  router.push("/login");
};
</script>
