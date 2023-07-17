// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

export default axiosInstance;
