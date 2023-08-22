<template>
  <Head>
    <Title>Goborr* | Forgot Password</Title>
  </Head>
  <div class="page-container">
    <SignUpNav pageTitle="forgot-password" />
    <ForgotPasswordForm />
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
