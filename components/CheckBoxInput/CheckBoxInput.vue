<template>
  <div class="custom-checkbox" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <div class="custom-checkbox-field">
      <label class="custom-checkbox-div" :for="name">
        <input
          :name="name"
          :id="name"
          type="checkbox"
          :value="inputValue"
          @input="handleChange"
          @blur="handleBlur"
        />
        <span class="checkmark"></span>
        <p class="custom-checkbox-label">
          {{ label }}
          <span>
            <NuxtLink :to="linkHref">{{ linkText }}</NuxtLink>
          </span>
        </p>
      </label>
    </div>

    <div class="custom-checkbox-error" :class="{ 'right-error': rightError }" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: false,
  },
  linkHref: {
    type: String,
    required: false,
  },
  rightError: {
    type: Boolean,
    required: false,
  },
});

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style lang="scss" scoped src="./CheckBoxInput.scss"></style>
