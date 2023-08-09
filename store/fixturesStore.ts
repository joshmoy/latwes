import { defineStore } from 'pinia'
import axiosInstance from '~~/services'
import { computed, ref } from 'vue'

export const useFixturesStore = defineStore('fixtures', ()  => {
  const state = {
    // data: [] as Array<any>
    competitions: ref([]),
    teams: ref([]),
    data: ref([]),
    matchEvents: ref<IEvents>()
  }

  const getters = {
    getCompetitions: computed(() => state.competitions),
    getTeams: computed(() => state.teams),
    getFixtures: computed(() => state.data),
    getMatchEvents: computed(() => state.matchEvents)
  }

  const action = {
    fetchCompetitions: async () => {
        try {
          const res =  await axiosInstance.get(`competition`);
          state.competitions.value = res?.data?.data;
          console.log('res?.data?.data;', res?.data?.data);
          
          return res?.data?.data
          
        } catch (error) {
          console.error(error);
          return error;
        }
      },
      fetchTeams: async (league: string) => {
        try {
          const res =  await axiosInstance.get(`competition/${league}/team`);
          state.teams.value = res?.data?.data;
          console.log('res?.data?.data;', res?.data?.data);
          
          return res?.data?.data
          
        } catch (error) {
          console.error(error);
          return error;
        }
      },
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