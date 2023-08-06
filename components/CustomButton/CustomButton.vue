<template>
  <button type="submit" :disabled="isLoading">
    <div class="loadingspinner" v-if="isLoading"></div>
    <template v-else>
     {{ title }}
      <img v-if="showImage" :src="imageUrl" alt="" />
    </template>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    showImage: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped src="./CustomButton.scss"></style>
