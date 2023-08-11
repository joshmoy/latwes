<template>
  <header class="dashboard-header">
    <div class="container dashboard-header-container">
      <div class="dashboard-header-flex">
        <NuxtLink to="/dashboard/competitions">
          <h1 class="dashboard-header-logo">Goborr!!</h1>
        </NuxtLink>
        <nav class="dashboard-header-navigation">
          <ul class="dashboard-header-navigation-links">
            <NuxtLink to="/dashboard/competitions"> <li>Dashboard</li> </NuxtLink>
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
</template>

<style lang="scss" scoped src="./DashboardNav.scss"></style>

<script setup lang="ts">
import { useAuthStore } from "~~/store/authStore";

const authStore = useAuthStore();
const router = useRouter();
const userAuthCookie = useCookie("userAuthCookie");

const logout = () => {
  authStore.logoutAction();
  userAuthCookie.value = '';
  router.push("/login");
};
</script>
