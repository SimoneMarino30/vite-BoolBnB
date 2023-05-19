<script>
// import header
import AppHeader from "./components/Header/AppHeader.vue";

// import footer
import AppFooter from "./components/Footer/AppFooter.vue";

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
  <main>
    <router-view></router-view>
  </main>

  <!-- footer -->
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/mixins.scss" as *;
@use "./style/partials/variables.scss" as *;
@include link_hover;


</style>
