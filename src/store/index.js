import Vue from "vue";
import Vuex from "vuex";

import users from "@/store/modules/users";
import projects from "@/store/modules/projects";
import activities from "@/store/modules/activities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { users, projects, activities },
});
