import axios from "axios";

import { getCookie } from "../cookies/cookies";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

//a request interceptors to include the auth token in every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("access_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance };
