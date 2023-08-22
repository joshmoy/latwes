<template>
  <Head>
    <Title>Goborr* | Reset Password</Title>
  </Head>
  <div class="page-container">
    <SignUpNav pageTitle="reset-password" />
    <ResetPasswordForm />
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
