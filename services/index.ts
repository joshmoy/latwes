import axios from "axios";

const BASEURL: string = "https://staging-api.goborr.com/api/v1";
const token: any = process.client ? localStorage.getItem('userToken'): '';

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
    "Authorization": `Bearer ${token}`
  },
});

export const axiosWithoutAuth = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
