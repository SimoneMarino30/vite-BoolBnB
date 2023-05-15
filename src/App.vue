<script>
import AppHeader from "./components/Header/AppHeader.vue";
// import footer 
import AppFooter from "./components/Footer/AppFooter.vue";
// import card 
import AppCard from "./components/Main/AppCard.vue";

export default {

  data() {
    return {
      title: "BoolBnB",
    };
  },
  components: { AppHeader, AppFooter, AppCard },
};
</script>

<template>
  <AppHeader />

  <main class="py-5">
    <h1>{{ title }}</h1>

    <AppCard />

    <router-view></router-view>
  </main>
  
  <!-- footer -->
  <AppFooter />

</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
