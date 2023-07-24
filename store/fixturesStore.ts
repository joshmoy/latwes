import { defineStore } from 'pinia'
import axiosInstance from '~~/services'
import { computed, ref } from 'vue'

export const useFixturesStore = defineStore('fixtures', ()  => {
  const state = {
    // data: [] as Array<any>
    data: ref([]),
    matchEvents: ref<IEvents>()
  }

  const getters = {
    getFixtures: computed(() => state.data),
    getMatchEvents: computed(() => state.matchEvents)
  }

  const action = {
      fetchFixtures: async (competition: string, round: string) => {
        try {
          const res =  await axiosInstance.get(`competition/${competition}/fixture?round=${round}`);
          state.data.value = res?.data?.data;
          return res?.data?.data
          
        } catch (error) {
          console.error(error);
          return error;
        }
      },
      fetchEvents: async (competition: string) => {
        try {
          const res =  await axiosInstance.get(`competition/${competition}/event`);
          state.matchEvents.value = res?.data?.data;
          return res?.data?.data
          
        } catch (error) {
          console.error(error);
          return error;
        }
      }
  }

    return {
    //   getFixtures,
    //   fetchFixtures,
      state,
      getters,
      action
    }
})