<template>
  <div class="fixtures">
    <div class="fixtures__left" @click=slide(-1)>
        <svgo-match-arrrow />
    </div>
    <div class="fixtures__matches" id="match-fixtures">
      <div
        
        class="fixtures__matches--match"
        :class="{'fixtures__matches--match__active': Number(match.id) === Number(activeMatch && activeMatch.id)}"
        v-for="match in displayValues()"
        :key="match.id"
        @click="selectMatch(match.id)">
        <p class="matchday">Mathday {{ match.match_day }}</p>
        <p class="points">{{ match.points }} pts</p>
        <!-- <p class="matchdate">{{ match.start_at }}</p> -->
      </div>
    </div>
    <div class="fixtures__right" @click="slide(1)">
        <svgo-match-arrrow />
    </div>
  </div>
</template>

<script  setup lang="ts">
import { ref, computed } from 'vue';
import Events from '@/assets/mockData/Events.json'

const currentIndex = ref(0)
const direction = ref(1)
const activeMatchesShown = ref(Events.data.events.slice(currentIndex.value, currentIndex.value + 9))
const activeMatch = ref()

const matches = computed(() => {
  return Events.data.events;
})
const displayValues = () => {
  const visibleMatches = matches.value.slice(currentIndex.value, currentIndex.value + 9);
  return visibleMatches;
}
const triggerSliderAnimation = (val: number) => {
  console.log('called?');
  
  const sliderElement:any = document.getElementById('match-fixtures');
  if (val === 1) {
    // Trigger sliding animation
    sliderElement.classList.add('slide-animation-to');
    
    // Remove sliding animation after it completes
    setTimeout(() => {
      sliderElement.classList.remove('slide-animation-to');
    }, 150);
  } else if (val === -1) {
    console.log('that');
    
    // Trigger sliding animation
    sliderElement.classList.add('slide-animation-from');
    
    // Remove sliding animation after it completes
    setTimeout(() => {
      sliderElement.classList.remove('slide-animation-from');
    }, 150);
  }
}
const slide = (val: number) => {
  if (val === 1) {
    if (currentIndex.value + 9 < matches.value.length) {
      currentIndex.value++;
      displayValues();
      triggerSliderAnimation(val);
    }
  } else if (val === -1) {
    if (currentIndex.value !== 0 && currentIndex.value + 9 <= matches.value.length) {
      currentIndex.value--;
      displayValues();
      triggerSliderAnimation(val);
    }
  }
}

const selectMatch = async (id: number) => {
  const active = await activeMatchesShown.value.find(val => val.id === id)
  activeMatch.value = active
}
</script>

<style lang="scss" scoped src="./DateScroll.scss"></style>