<template>
  <AboutHeader mainText="Afcon 24" spanText="Prizes" />
  <div class="container how-to-play">
    <h1>Unveiling Exciting Afcon Prizes!</h1>
    <p>
      Hello Goborr community! We're thrilled to share some fantastic news about the upcoming AFCON
      tournament on Goborr.com. Brace yourselves for an exhilarating competition filled with skill,
      strategy, and, of course, incredible prizes! Here's the breakdown of the exciting rewards
      awaiting our top performers:
    </p>
    <h2 class="section-two">Round Prizes</h2>
    <p class="mb-20">Here's the breakdown for each round:</p>
    <ul>
      <li v-for="(el, id) in roundPrizes" :key="id">
        <div class="play-flex">
          <p>{{ el?.position }} position -</p>
          <h3>{{ el?.prize }}</h3>
        </div>
      </li>
    </ul>
    <h2 class="section-two">Overall Tournament Prizes</h2>
    <p class="mb-20">And for the overall winners at the end of the tournament:</p>
    <ul>
      <li v-for="(el, id) in tournamentPrizes" :key="id">
        <div class="play-flex">
          <p>{{ el?.position }} position -</p>
          <h3>{{ el?.prize }}</h3>
        </div>
      </li>
    </ul>
    <h2 class="section-two">How To Participate</h2>
    <ol>
      <li>
        <p>
          <span class="bold">Join Afcon Tournament:</span>
          If you haven't already,
          <a href="/dashboard/competitions" class="link">
            click here to join the Afcon tournament.
          </a>
          Don't have an account?
          <a href="/register" class="link"> Click here to sign up on Goborr!</a> It's your chance to
          shine and claim your share of the impressive prize pool.
        </p>
      </li>
      <li>
        <p>
          <span class="bold">No Gree For Anybody:</span>
          Engage with the matches, make strategic match predictions, and climb up the leaderboard.
          Every round is an opportunity to win up to ₦70,000 during this tournament!
        </p>
      </li>
      <li>
        <p>
          <span class="bold">Go for the Overall Win:</span>
          While each round is a chance to earn rewards, keep your eyes on the ultimate prize. Aim
          for the top spot in the overall rankings to secure the prestigious ₦50,000 reward!
        </p>
      </li>
    </ol>
    <p class="mb-20">
      <a href="/how-to-play" class="link">Click here </a>for more details on scoring and how to
      play.
    </p>
    <button class="button" @click="$router.push('/dashboard/competitions')">
      {{ "Predict Now" }}
    </button>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
useHead({
  title: "Afcon 2024",
});

const roundPrizes = [
  { position: "1st", prize: "₦10,000" },
  { position: "2nd", prize: "₦4,000" },
  { position: "3rd", prize: "₦3,000" },
  { position: "4th", prize: "₦2,000" },
  { position: "5th", prize: "₦1,000" },
];

const tournamentPrizes = [
  { position: "1st", prize: "₦50,000" },
  { position: "2nd", prize: "₦30,000" },
  { position: "3rd", prize: "₦20,000" },
  { position: "4th", prize: "₦10,000" },
  { position: "5th", prize: "₦10,000" },
];
</script>

<style lang="scss" scoped>
.how-to-play {
  padding: 100px;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  h1,
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .link {
    color: $light-blue;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  .section-two {
    margin-top: 50px;
    text-align: left;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  li {
    font-size: 18px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .play-flex {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
  }

  .bold {
    font-weight: 700;
  }

  .button {
    font-size: 18px;
    background: #0052c5;
    color: #ffffff;
    border-radius: 40px;
    padding: 16px 24px;
    border: 1px solid #0052c5;
    margin-top: 30px;
    width: 200px;
  }
}
</style>
