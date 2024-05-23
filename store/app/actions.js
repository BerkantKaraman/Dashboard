import moment from "moment";

export default {
  async fetchData() {
    try {
      const api = useNuxtApp().$api;
      const {
        data: { data },
      } = await api.get("/case/dashboard");
      this.payload = data;

      this.lastUpdated = moment(new Date()).format("HH:mm");
      console.log(this.lastUpdated);
    } catch (err) {
      console.log(err);
    }
  },
};
