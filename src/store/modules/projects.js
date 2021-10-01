import { getFakeProjects } from "@/helpers/fakeApi";

export default {
  namespaced: true,

  state: {
    projects: [],
  },

  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
  },

  actions: {
    async fetchProjects({ commit }) {
      try {
        // call fake API
        const projects = await getFakeProjects();
        commit("setProjects", projects);
        return projects;
      } catch (error) {
        // handle error
      }
    },
  },
};
