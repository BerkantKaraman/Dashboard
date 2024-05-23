import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: "https://demotrainiq.com",
  });

  nuxtApp.provide("api", axiosInstance);
});
