import { getFakeUsers } from "@/helpers/fakeApi";

export default {
  namespaced: true,

  state: {
    users: [],
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        // call fake API
        const users = await getFakeUsers();
        commit("setUsers", users);
        return users;
      } catch (error) {
        // handle error
      }
    },
  },
};
