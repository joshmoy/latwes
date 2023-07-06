<template>
  <div class="container signup">
    <h1 class="signup-title">Create your account</h1>
    <Form @submit="onSubmit" :validation-schema="schema">
      <CustomInput
        label="Username"
        placeholder="Enter username"
        name="username"
        type="text"
        rightError
      />
      <CustomInput label="Email" placeholder="Enter email" name="email" type="text" rightError />
      <div class="signup-flex">
        <CustomInput
          label="Password"
          placeholder="Enter password"
          name="password"
          type="password"
        />
        <CustomInput
          label="Confirm Password"
          placeholder="Type password again"
          name="confirmPassword"
          type="password"
          rightError
        />
      </div>
      <div class="signup-flex">
        <CustomInput
          label="First Name"
          placeholder="Enter first name"
          name="firstName"
          type="text"
        />
        <CustomInput
          label="Last Name"
          placeholder="Enter last name"
          name="lastName"
          type="text"
          rightError
        />
      </div>
      <div class="signup-flex">
        <CustomSelect
          label="Location (optional)"
          placeholder="Select location"
          name="location"
          :options="locations"
        />
        <CustomSelect
          label="Gender (optional)"
          placeholder="Select gender"
          name="gender"
          :options="genders"
          rightError
        />
      </div>
      <div class="signup-flex">
        <CheckBoxInput label="I am over 18 years old" name="over18" />
        <CheckBoxInput
          label="I accept the"
          linkText="Terms & Conditions"
          linkHref="/terms"
          name="acceptTerms"
        />
      </div>

      <button type="submit" class="signup-button">
        Start predicting
        <img src="/icons/chevronright.svg" alt="" />
      </button>
    </Form>
  </div>
  <img src="/icons/signup-bg.svg" alt="" class="signup-img"/>
</template>

<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

const locations = [{ label: "Nigeria", value: "nigeria" }];

const genders = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Invalid username format. Only alphanumeric characters are allowed."
    ),
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  email: yup.string().required("Email is a required field").email("Input a valid email address"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password can not be less than 8 characters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .min(8, "Password can not be less than 8 characters")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  location: yup.string().default(""),
  gender: yup.string().default(""),
  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  over18: yup.boolean().oneOf([true], "You must be above 18 years to sign up"),
});

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2));
}
</script>

<style lang="scss" scoped src="./SignUpForm.scss"></style>
