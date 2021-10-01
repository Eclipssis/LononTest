<template>
  <header class="header py-8">
    <div class="container flex justify-between mx-auto">
      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.png" alt="Logo" />
        </router-link>
      </div>

      <nav class="nav flex">
        <div class="nav__item">
          <router-link to="/" exact="">Home</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/projects">Project</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/users">User</router-link>
        </div>
        <div class="nav__item">
          <a>Logout</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    margin: 0 15px;
    a {
      padding: 10px 15px;
      border-bottom: 2px solid transparent;
      &.router-link-active {
        font-weight: 700;
        border-bottom: 2px solid #000;
      }
    }
  }
}

.logo {
  max-width: 200px;
}
</style>
