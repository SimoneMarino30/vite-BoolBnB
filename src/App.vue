<script>
import AppHeader from "./components/Header/AppHeader.vue";

export default {
  data() {
    return {
      title: "BoolBnB",
    };
  },
  components: { AppHeader },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
