<script>
import axios from "axios";
import AppHeader from "./components/Header/AppHeader.vue";
// import footer
import AppFooter from "./components/Footer/AppFooter.vue";

import AppList from "./components/Main/AppList.vue";

export default {
  data() {
    return {
      apartments: {
        list: [],
        pages: [],
      },
    };
  },
  components: { AppHeader, AppFooter, AppList },

  emits: ["changePage"],

  methods: {
    fetchApartments(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/apartments";

      axios.get(endpoint).then((response) => {
        this.apartments.list = response.data.data;
        this.apartments.pages = response.data.links;
      });
    },
  },

  created() {
    this.fetchApartments();
  },
};
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <main class="py-5">
    <AppList
      :apartments="apartments.list"
      :pages="apartments.pages"
      @changePage="fetchApartments"
    />

    <router-view></router-view>
  </main>

  <!-- footer -->
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
