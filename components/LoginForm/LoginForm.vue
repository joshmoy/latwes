<template>
  <div class="container login">
    <h1 class="login-title">Sign into your account</h1>
    <Form @submit="onSubmit" :validation-schema="schema">
      <CustomInput label="Email" placeholder="Enter email" name="email" type="text" rightError />
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
      <button type="submit" class="login-button" :disabled="isLoading">
        <div class="loadingspinner" v-if="isLoading"></div>
        <template v-else>
          Sign in
          <img src="/icons/chevronright.svg" alt="" />
        </template>
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
import { logInService } from "../../services/auth";

const { $toast } = useNuxtApp();

const isLoading = ref(false);

const schema = yup.object().shape({
  email: yup.string().required("Email is a required field").email("Input a valid email address"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password can not be less than 8 characters"),
});

async function onSubmit(values, { resetForm }) {
  try {
    isLoading.value = true;
    await logInService(values);
    $toast.success("Login successful!", {
      duration: 5000,
    });
    resetForm();
    isLoading.value = false;
  } catch (error) {
    $toast.error(error?.response?.data?.message, {
      duration: 5000,
    });
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped src="./LoginForm.scss"></style>
