<template>
  <div id="app">
    <Header></Header>
    <div class="content py-10">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  background: #f2f2f2;
  flex: 1 1 100%;
}
</style>
