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
      <div class="dashboard-header-flex">
        <div class="dashboard-header-avatar">
          <img src="/icons/signup-bg.svg"/>
        </div>
        <div class="dashboard-header-meta">
          <p>Username</p>
          <p class="username">@23rdstreetinthe</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./DashboardNav.scss"></style>
