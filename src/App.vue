<script>
// import header
import AppHeader from "./components/Header/AppHeader.vue";

// import footer
import AppFooter from "./components/Footer/AppFooter.vue";
// import AllApartments from "./components/pages/AllApartments.vue";

export default {
  data() {
    return {};
  },
  components: { AppHeader, AppFooter },
};
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <main class="py-5">
    <!-- <AllApartments /> -->
    <router-view></router-view>
  </main>

  <!-- footer -->
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
