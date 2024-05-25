import axios from "axios";
import { toast } from "vue3-toastify";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: config.public.API_BASE_URL,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      toast.error(`${error}`, {
        theme: "colored",
        type: "error",
      });

      return Promise.reject(error);
    }
  );

  nuxtApp.provide("api", axiosInstance);
});
