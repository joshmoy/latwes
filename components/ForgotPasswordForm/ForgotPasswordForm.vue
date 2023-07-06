<template>
  <div class="container forgot-password">
    <h1 class="forgot-password-title">Forgot password?</h1>
    <p class="forgot-password-desc">No worries, let’s help you reset it.</p>
    <Form @submit="onSubmit" :validation-schema="schema">
      <CustomInput label="Email" placeholder="Enter your email address" name="email" type="text" rightError />

      <button type="submit" class="forgot-password-button">Reset password</button>
    </Form>
  </div>
  <div class="forgot-password-imgDiv">
    <img src="/icons/login-bg.svg" alt="" class="forgot-password-img" />
    <img src="/icons/login-bg2.svg" alt="" class="forgot-password-img2" />
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required field").email("Input a valid email address"),
});

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}
</script>

<style lang="scss" scoped src="./ForgotPasswordForm.scss"></style>
