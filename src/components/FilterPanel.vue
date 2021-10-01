<template>
  <div class="flex justify-between shadow-lg mt-8 py-4 px-12 bg-white">
    <div>
      <div class="filter inline-block">
        <span class="font-bold">Project:</span>
        <Select
          v-model="selectedProject"
          :items="projects"
          displayField="name"
          placeholder="All"
        ></Select>
      </div>

      <div class="filter inline-block">
        <span class="font-bold">User:</span>
        <Select
          v-model="selectedUser"
          :items="users"
          displayField="username"
          placeholder="All"
        ></Select>
      </div>

      <div class="filter inline-block">
        <span class="font-bold">Date:</span>
        <Select v-model="selectedDate" placeholder="Any Date">
          <!-- <template>
            <div class="mb-4 px-3">
              <label
                class="block text-gray-700 text-xs font-bold mb-2"
                for="username"
              >
                From
              </label>
              <input
                v-model="dateFrom"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <div class="mb-4 px-3">
              <label
                class="block text-gray-700 text-xs font-bold mb-2"
                for="username"
              >
                To
              </label>
              <input
                v-model="dateTo"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <div class="mb-2 px-3">
              <Button size="small" @click="onConfirmDate">Confirm</Button>
            </div>
          </template> -->
        </Select>
      </div>
    </div>

    <div>
      <Button variant="emerald" @click="onSearch">Search</Button>
      <Button variant="white" @click="onReset">Reset</Button>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import Button from "./Button.vue";
import { mapActions } from "vuex";

export default {
  name: "FilterPanel",

  components: {
    Button,
    Select,
  },

  data() {
    return {
      selectedProject: null,
      selectedUser: null,
      selectedDate: null,

      dateFrom: "",
      dateTo: "",

      projects: [],
      users: [],
    };
  },

  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
      fetchProjects: "projects/fetchProjects",
    }),

    onSearch() {
      const filters = {};
      if (this.selectedUser) filters.user_id = this.selectedUser;
      if (this.selectedProject) filters.project_id = this.selectedProject;
      if (this.selectedDate) filters.date = this.selectedDate;
      if (this.dateFrom || this.dateTo) filters.date = {};

      if (this.dateFrom) filters.date.dateFrom = this.dateFrom;
      if (this.dateTo) filters.date.dateTo = this.dateTo;

      this.$emit("on-search", filters);
    },

    onReset() {
      this.selectedUser = null;
      this.selectedProject = null;
      this.selectedDate = null;

      this.$emit("on-reset");
    },

    onConfirmDate() {
      const dateFrom = this.dateFrom ? `From: ${this.dateFrom}` : "";
      const dateTo = this.dateTo ? `To: ${this.dateTo}` : "";
      this.selectedDate = `${dateFrom} ${dateTo}`;
      // TODO close by slot events
    },
  },

  async mounted() {
    this.users = await this.fetchUsers();
    this.projects = await this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped>
.filter + .filter {
  margin-left: 20px;
}

.filter {
  min-width: 200px;
}
</style>
