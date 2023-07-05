<template>
  <div class="container login">
    <h1 class="login-title">Sign into your account</h1>
    <Form @submit="onSubmit" :validation-schema="schema">
      <CustomInput
        label="Username"
        placeholder="Enter username"
        name="username"
        type="text"
        rightError
      />
      <CustomInput
        label="Password"
        placeholder="Enter password"
        name="password"
        type="password"
        helperText="8+ characters, can include symbols."
        rightError
      />
        <p class="login-desc">
          <NuxtLink to="/forgot-password">Forgot Password?</NuxtLink>
        </p>
      <button type="submit" class="login-button">
        Sign in
        <img src="/icons/chevronright.svg" alt="" />
      </button>
    </Form>
  </div>
  <div class="login-imgDiv">
    <img src="/icons/login-bg.svg" alt="" class="login-img" />
    <img src="/icons/login-bg2.svg" alt="" class="login-img2" />
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Invalid username format. Only alphanumeric characters are allowed."
    ),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password can not be less than 8 characters"),
});

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}
</script>

<style lang="scss" scoped src="./LoginForm.scss"></style>
