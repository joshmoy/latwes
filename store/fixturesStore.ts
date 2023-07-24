import { defineStore } from 'pinia'
import axiosInstance from '~~/services'
import { computed, ref } from 'vue'

export const useFixturesStore = defineStore('fixtures', ()  => {
  const state = {
    // data: [] as Array<any>
    data: ref([])
  }

  const getters = {
    getFixtures: computed(() => state.data)
  }

  const action = {
      fetchFixtures: async (competition: string, round: string) => {
        try {
          const res =  await axiosInstance.get(`competition/${competition}/fixture?round=${round}`);
          state.data.value = res?.data?.data;
          
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