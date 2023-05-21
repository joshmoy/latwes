<template>
  <div>
    <div class="home__week__card">
      <div class="home__week__card--flex">
        <div class="home__week__card--flex__left">
          <p class="fl">Total prize this week</p>
        </div>
        <div class="home__week__card--flex__right">
          <p class="fr">{{ homeState.weekPrice }}</p>
        </div>
      </div>
      <div class="home__week__card--flex middle">
        <div class="home__week__card--flex__left">
          <p class="fr">{{ homeState.weekStake }} stakes.</p>
        </div>
        <div class="home__week__card--flex__right">
          <p class="fl">Total stakes</p>
        </div>
      </div>
      <div class="home__week__card--flex">
        <div class="home__week__card--flex__left">
          <p class="fl">Prediction deadline</p>
        </div>
        <div class="home__week__card--flex__right">
          <p class="fr">{{ homeState.weekDeadline }}.</p>
        </div>
      </div>
    </div>
    <!-- <LandingUpcomingFixtures /> -->
    <Footer />
  </div>
</template>

<script setup lang="ts">

const homeState: HomeState = {
  weekPrice: 5000000.00,
  weekStake: 16,
  weekDeadline: '1pm, Thursday, June 2023'
}

</script>

<style lang="scss">
.home {
  &__week {
    &__card {
      .middle {
        flex-direction: row-reverse;
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      }
      .fl {
        font-weight: 600;
        font-size: 48px;
        line-height: 48px;
        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 24px;
        }
      }
      .fr {
        font-weight: 800;
        font-size: 64px;
        line-height: 64px;
        @media screen and (max-width: 768px) {
          font-size: 32px;
          line-height: 32px;
        }
      }
      &--flex {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
        &__left{
          min-height: 324px;
          width: 50%;
          display: flex;
          align-items: center;
          background: #000;
          color: #fff;
          padding: 64px;
          @media screen and (max-width: 768px) {
            min-height: 150px;
            width: 100%;
            padding: 20px;
            justify-content: center;
            text-align: center;
          }
        }
        &__right {
          min-height: 324px;
          width: 50%;
          display: flex;
          align-items: center;
          background: #fff;
          color: #000;
          padding: 64px;
          @media screen and (max-width: 768px) {
            min-height: 150px;
            width: 100%;
            padding: 20px;
            justify-content: center;
            text-align: center;
          }
          p {
            max-width: 455px;
          }
        }
      }
    }
  }
}
</style>
