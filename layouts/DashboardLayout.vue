<template>
  <div class="dashboard-layout">
   <DashboardNav />
    <!-- Content slot to inject the page-specific content -->
    <main class="container">
      <p>tesr</p>
      <slot />
    </main>

    <!-- Add your common footer or other elements here -->
    <footer>
      <!-- Your footer content -->
    </footer>
  </div>
</template>
<!-- 
<style lang="scss" scoped src="./DashboardLayout.scss"></style> -->

