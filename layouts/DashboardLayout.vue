<template>
  <div class="dashboard-layout">
    <DashboardNav />
    <main class="dashboard-section">
      <section class="container">
        <slot />
      </section>
    </main>
    <footer>
      <!-- Your footer content -->
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  &-layout {
    display: grid;
    grid-template-rows: 144px 1fr;
    grid-template-columns: 1fr;
    min-height: 100vh;
  }

  &-section {
    background: #f5f6ff;

    .container {
      padding: 40px 80px 100px;
    }
  }
}
</style>
