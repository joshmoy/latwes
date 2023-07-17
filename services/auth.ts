import axiosInstance from ".";

export const signUpService = (payload: Record<string, string>) =>
  axiosInstance.post("/auth/signup", payload);

export const logInService = (payload: Record<string, string>) =>
  axiosInstance.post("/auth/login", payload);
