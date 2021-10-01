<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="header-section flex">
        <div class="user-info">
          <h2 class="font-bold text-xl">Welcome, John.Smith</h2>
          <span>You are logged in as an admin</span>
        </div>

        <div class="user-controls self-end ml-20">
          <a class="controls-link">+ New Project</a>
          <a class="controls-link">+ New User</a>
        </div>
      </div>

      <FilterPanel @on-search="onSearch" @on-reset="onReset"></FilterPanel>

      <div class="flex justify-between mt-10 mb-6">
        <div class="flex items-center">
          <h2 class="text-xl font-bold mr-6">Working Activity Log</h2>
          <Button variant="pink">+ New Activity</Button>
        </div>

        <Button variant="emerald">Export CSV</Button>
      </div>

      <div class="bg-white shadow-lg">
        <div class="table-info p-3 leading-4">
          <div class="text-md font-bold">Results</div>
          <span class="mr-20 text-xs"
            >Total activity: {{ activities.length }}</span
          >
          <span class="text-xs"
            ><span class="font-bold">Total hours:</span>
            {{ totalTime.hours }} Hours {{ totalTime.minutes }} Minutes</span
          >
        </div>

        <div class="w-full">
          <div class="border-b border-gray-200 shadow">
            <table class="w-full">
              <thead class="bg-gray-900">
                <tr>
                  <th class="text-left px-6 py-2 text-xs text-white">ID</th>
                  <th class="text-left px-6 py-2 text-xs text-white">
                    Project
                  </th>
                  <th class="text-left px-6 py-2 text-xs text-white">Date</th>
                  <th class="text-left px-6 py-2 text-xs text-white">Task</th>
                  <th class="text-left px-6 py-2 text-xs text-white">User</th>
                  <th class="text-left px-6 py-2 text-xs text-white">Hours</th>
                  <th class="text-left px-6 py-2 text-xs text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-for="activity in activities" :key="activity.id">
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ activity.id }}
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      {{ getProjectName(activity.project_id) }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{ activity.date }}</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ activity.task }}
                  </td>
                  <td class="px-6 py-4">
                    {{ getUserName(activity.user_id) }}
                  </td>
                  <td class="px-6 py-4">
                    hours: {{ activity.hours }} minutes: {{ activity.minutes }}
                  </td>
                  <td class="px-6 py-4">
                    <Button size="small">Edit</Button>
                    <Button size="small" @click="redirectToActivity(activity)"
                      >View</Button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterPanel from "@/components/FilterPanel.vue";
import Button from "@/components/Button.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    Button,
    FilterPanel,
  },

  data() {
    return {
      activities: [],
      activitiesInitial: [],
    };
  },

  computed: {
    ...mapState({
      users: (state) => state.users.users,
      projects: (state) => state.projects.projects,
    }),

    totalTime() {
      let totalHours = 0;
      let totalMinutes = 0;

      this.activities.forEach((item) => {
        totalHours += item.hours;
        totalMinutes += item.minutes;
      });

      return this.getConvertedHoursAndMinutes({
        hours: totalHours,
        minutes: totalMinutes,
      });
    },
  },

  methods: {
    ...mapActions({
      fetchUsers: "activities/fetchActivities",
    }),

    getConvertedHoursAndMinutes({ hours, minutes }) {
      console.log("hours", hours);
      const hoursFromMinutes = Math.floor(minutes / 60);
      const minuteLeft = minutes % 60;
      console.log("minuteLeft", minuteLeft);
      return {
        hours: hours + hoursFromMinutes,
        minutes: minuteLeft,
      };
    },

    getUserName(userId) {
      if (this.users.length) {
        const user = this.users.find((user) => user.id === userId);
        return `${user.first_name} ${user.last_name}`;
      } else {
        return "";
      }
    },

    getProjectName(projectId) {
      if (this.projects.length) {
        const project = this.projects.find(
          (project) => project.id === projectId
        );
        return project.name;
      } else {
        return "";
      }
    },

    redirectToActivity(activity) {
      this.$router.push({
        name: "ActivityPage",
        params: { id: activity.id, activity },
      });
    },

    onSearch(searchParams) {
      console.log("searchParams", searchParams);
      const filters = Object.entries(searchParams);
      let result = [];

      result = this.activitiesInitial.filter((activity) => {
        const isTrue = filters.some((filter) => {
          return activity[filter[0]] === filter[1].id;
        });
        return isTrue;
      });

      this.activities = result;
    },

    onReset() {
      this.activities = JSON.parse(JSON.stringify(this.activitiesInitial));
    },
  },

  async mounted() {
    const activities = await this.fetchUsers();

    this.activities = activities;
    this.activitiesInitial = activities;
  },
};
</script>

<style lang="scss" scoped>
.controls-link + .controls-link {
  margin-left: 25px;
}

.controls-link {
  text-decoration: underline;
  color: #001fff;
}
</style>
