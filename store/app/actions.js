import moment from "moment";

export default {
  async fetchData(isRefresh) {
    if (!isRefresh && this.payload) return;

    try {
      const api = useNuxtApp().$api;
      const {
        data: { data },
      } = await api.get("/case/dashboard");
      this.payload = data;

      this.lastUpdated = moment(new Date()).format("HH:mm");
    } catch (err) {
      console.log(err);
    }
  },
};
