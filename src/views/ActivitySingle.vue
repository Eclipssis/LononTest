<template>
  <div v-if="currentActivity">
    <div class="container mx-auto">
      <h2 class="text-xl font-bold">{{ currentActivity.task }}</h2>
      <span>{{ currentActivity.date }}</span>

      <div class="mt-4">
        <Button variant="emerald" size="small" @click="$router.go(-1)"
          >Back</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "ActivitySingle",

  components: {
    Button,
  },

  data() {
    return {
      currentActivity: null,
    };
  },

  beforeRouteEnter(to, from, next) {
    if (to.params.activity) {
      // should be fetch from API in future
      localStorage.setItem("activity", JSON.stringify(to.params.activity));
    }

    next((vm) => {
      if (!to.params.activity) {
        const activity = localStorage.getItem("activity");
        vm.currentActivity = activity ? JSON.parse(activity) : {};
      } else {
        vm.currentActivity = to.params.activity;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
