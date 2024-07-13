/* import moment from "moment";

export default {
  async fetchData(isRefresh) {
    if (!isRefresh && this.lastUpdatedAt) return;

    try {
      const api = useNuxtApp().$api;
      const {
        data: { data },
      } = await api.get("/case/dashboard");
      this.payload = data;

      this.lastUpdatedAt = moment(new Date()).format("HH:mm");
    } catch (err) {
      console.log(err);
    }
  },
};
 */
