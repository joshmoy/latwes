<template>
  <Head>
    <Title>Goborr* | Register</Title>
  </Head>
  <div class="page-container">
    <SignUpNav pageTitle="register" />
    <SignUpForm />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  background-color: #000;
}
</style>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
