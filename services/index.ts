import axios from "axios";

const BASEURL: string = "https://staging-api.goborr.com/api/v1";

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

export default axiosInstance;
