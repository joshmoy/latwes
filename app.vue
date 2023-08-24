<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Goborr* | ${titleChunk}` : 'Goborr*';
  }
})
</script>
