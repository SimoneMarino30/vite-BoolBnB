<script>
// import footer 
import AppFooter from "./components/Footer/AppFooter.vue"

export default {


  components: { AppFooter },

  data() {
    return {
      title: "BoolBnB",
    };
  },
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

<style lang="scss" scoped>
@import "./style/partials/reset.scss";

</style>
