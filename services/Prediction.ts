import { axiosInstance } from ".";

export const predictMatch = (slug: string, fixtureId: number, prediction: Record<string,number>) => {
  return axiosInstance.post(`/competition/${slug}/fixture/${fixtureId}/predict`, prediction);
}

export const joinLeague = (
  slug: string,
  payload: Record<string | any, number | any>
) => {
  return axiosInstance.post(`/competition/${slug}/join`, payload);
};

export const answerTieBreaker = (slug: string, tieBreakerId: string, payload: Record<string, string>) =>
  axiosInstance.post(`competition/${slug}/tiebreaker/${tieBreakerId}/answer`, payload);
