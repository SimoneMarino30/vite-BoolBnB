<script>
import AppHeader from "./components/Header/AppHeader.vue";
// import footer 
import AppFooter from "./components/Footer/AppFooter.vue"

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
  <AppHeader />

  <main>
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
