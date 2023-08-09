import axiosInstance from ".";

export const predictMatch = (slug: string, fixtureId: number, prediction: Record<string,number>) => {
  return axiosInstance.post(`/competition/${slug}/fixture/${fixtureId}/predict`, prediction);
}
