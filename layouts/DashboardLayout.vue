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

    @media screen and (max-width: 768px) {
      grid-template-rows: 80px 1fr;
    }
  }

  &-section {
    background: #f5f6ff;

    .container {
      padding: 40px 80px 100px;

      @media screen and (max-width: 768px) {
         padding: 40px 20px 50px;
      }
    }
  }
}
</style>
