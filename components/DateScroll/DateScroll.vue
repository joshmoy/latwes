<template>
  <div class="fixtures">
    <div class="fixtures__left" @click="slide(-1)">
      <svgo-match-arrrow />
    </div>
    <div class="fixtures__matches" id="match-fixtures">
      <div
        class="fixtures__matches--match"
        :class="{
          'fixtures__matches--match__active':
            Number(match.match_day) === Number(activeMatch && activeMatch.match_day),
        }"
        v-for="match in displayValues()"
        :key="match.id"
        @click="selectMatch(match.match_day)"
      >
        <p class="matchday">GMW {{ match.match_day }}</p>
        <p class="points">{{ getPointsOrDate(match) }}</p>
        <!-- <p class="matchdate">{{ match.start_at }}</p> -->
      </div>
    </div>
    <div class="fixtures__right" @click="slide(1)">
      <svgo-match-arrrow />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { dateOnlyFormatter } from "../../helpers/dataFormatter";

interface IEventsObject {
  id: number;
  competition_slug: string;
  name: string;
  short_name: string;
  start_at: string;
  end_at: string;
  created_at: string;
  updated_at: string;
  match_day: number;
  points: number;
}

const props = defineProps(["events", "matchRound"]);
const emit = defineEmits(["fetchCurrentMatchesSelected","updateLeaderboard"]);

const currentIndex = ref(0);
const direction = ref(1);
const activeMatch = ref();
const currentDate = new Date();
const visibleMatchEvents = computed(() => {
  return props.events && props.events.slice(currentIndex.value, currentIndex.value + 8);
});

watch(visibleMatchEvents, (val) => {
  if (val) {
    const id =
      props.events &&
      props.events.find((val: { match_day: any }) => val.match_day === props.matchRound);
    selectMatch(id.match_day);
  }
});

watch(activeMatch, (val) => {
  if (val) {
    emit("fetchCurrentMatchesSelected", val.match_day);
    emit("updateLeaderboard", val.match_day);
  }
});

const getPointsOrDate = (match: Record<string, string | number | any>) => {
  if (currentDate < new Date(match?.start_at)) return dateOnlyFormatter(new Date(match?.start_at));
  return match?.points + "pts";
};

const displayValues = () => {
  const visibleMatches = props.events?.slice(currentIndex.value, currentIndex.value + 8);
  return visibleMatches;
};
const triggerSliderAnimation = (val: number) => {
  const sliderElement: any = document.getElementById("match-fixtures");
  if (val === 1) {
    // Trigger sliding animation
    sliderElement.classList.add("slide-animation-to");

    // Remove sliding animation after it completes
    setTimeout(() => {
      sliderElement.classList.remove("slide-animation-to");
    }, 150);
  } else if (val === -1) {
    // Trigger sliding animation
    sliderElement.classList.add("slide-animation-from");

    // Remove sliding animation after it completes
    setTimeout(() => {
      sliderElement.classList.remove("slide-animation-from");
    }, 150);
  }
};
const slide = (val: number) => {
  if (val === 1) {
    if (currentIndex.value + 9 < props.events.length) {
      currentIndex.value++;
      displayValues();
      triggerSliderAnimation(val);
    }
  } else if (val === -1) {
    if (currentIndex.value !== 0 && currentIndex.value + 9 <= props.events.length) {
      currentIndex.value--;
      displayValues();
      triggerSliderAnimation(val);
    }
  }
};

const selectMatch = async (id: number) => {
  const active = await visibleMatchEvents.value?.find(
    (val: { match_day: number }) => val.match_day === id
  );
  activeMatch.value = active;
};

onMounted(() => {
  selectMatch(props.matchRound);
});
</script>

<style lang="scss" scoped src="./DateScroll.scss"></style>
