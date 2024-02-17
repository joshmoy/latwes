import { defineStore } from 'pinia'
import { axiosInstance } from '~~/services'
import { computed, ref } from 'vue'

import { useAuthStore } from './authStore'

const auth = useAuthStore();

export const useFixturesStore = defineStore('fixtures', ()  => {
  const state = {
    // data: [] as Array<any>
    competitions: ref([]),
    teams: ref([]),
    leaderboard: ref([]),
    poolLeaderboard: ref([]),
    data: ref([]),
    matchEvents: ref<IEvents>(),
    tieBreaker: ref({}),
  };

  const getters = {
    getCompetitions: computed(() => state.competitions),
    getTeams: computed(() => state.teams),
    getFixtures: computed(() => state.data),
    getLeaderboard: computed(() => state.leaderboard),
    getPoolLeaderboard: computed(() => state.poolLeaderboard),
    getMatchEvents: computed(() => state.matchEvents),
    getTieBreaker: computed(() => state.tieBreaker),
    getSingleCompetition: (slug: string) =>
      computed(() => state.competitions.value.find((e: any) => e.slug === slug)),
  };

  const action = {
    fetchCompetitions: async () => {
      try {
        const res = await axiosInstance.get(`competition`);
        state.competitions.value = res?.data?.data;

        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchLeaderboard: async (league: string, round?: string, circleId?: string) => {
      try {
        let url = `competition/${league}/leaderboard?round=${round}`;
        if (circleId) {
          url = `competition/${league}/leaderboard?round=${round}&circle_id=${circleId}`;
        }
        const res = await axiosInstance.get(url);
        state.leaderboard.value = res?.data?.data;

        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchPoolLeaderboard: async (league: string, round?: string, circleId?: string) => {
      try {
        let url = `competition/${league}/leaderboard?round=${round}`;
        if (circleId) {
          url = `competition/${league}/leaderboard?round=${round}&circle_id=${circleId}`;
        }
        const res = await axiosInstance.get(
          `${url}&for_pool=yes`
        );
        state.poolLeaderboard.value = res?.data?.data;

        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchTeams: async (league: string) => {
      try {
        const res = await axiosInstance.get(`competition/${league}/team`);
        state.teams.value = res?.data?.data;
        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchFixtures: async (competition: string, round: string) => {
      try {
        const res = await axiosInstance.get(`competition/${competition}/fixture?round=${round}`);
        state.data.value = res?.data?.data.fixtures;
        state.tieBreaker.value = res?.data?.data.tiebreaker;
        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchEvents: async (competition: string) => {
      try {
        const res = await axiosInstance.get(`competition/${competition}/event`);
        state.matchEvents.value = res?.data?.data;
        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
    fetchSingleFixture: async (competition: string, fixtureId: string) => {
      try {
        const res = await axiosInstance.get(`competition/${competition}/fixture/${fixtureId}`);
        return res?.data?.data;
      } catch (error) {
        return error;
      }
    },
  };

    return {
    //   getFixtures,
    //   fetchFixtures,
      state,
      getters,
      action
    }
})
