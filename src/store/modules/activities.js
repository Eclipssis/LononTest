import { getFakeActivities } from "@/helpers/fakeApi";

export default {
  namespaced: true,

  state: {},

  mutations: {},

  actions: {
    async fetchActivities() {
      try {
        const activities = await getFakeActivities();
        return activities;
      } catch (error) {
        // handle error
      }
    },
  },
};
