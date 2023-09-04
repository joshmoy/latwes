<template>
  <div class="money-pool">
    <div class="container">
      <h3 class="money-pool__heading">
        Put money in the pool, <br />
        get the winner takes all prize!
      </h3>
      <p class="money-pool__text">Get a chance to win all the money in the pot !</p>
      <button type="submit" class="money-pool__button" @click="handleClick">Predict</button>
    </div>
    <div>
      <img class="money-pool__image" src="/icons/pool.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  const token = process.client ? localStorage.getItem("userToken") : "";
  router.push(token ? '/dashboard/competitions' : '/register');
};
</script>

<style lang="scss" scoped src="./MoneyPool.scss"></style>
