<script>
// import header
import AppHeader from "./components/Header/AppHeader.vue";
// import search
import AppSearch from "./components/Main/AppSearch.vue";

// import footer
import AppFooter from "./components/Footer/AppFooter.vue";
// import AllApartments from "./components/pages/AllApartments.vue";

export default {
  data() {
    return {
      searchPlaceholder: "Cerca appartamento o città ",
      searchButton: "trova",
    };
  },
  components: { AppHeader, AppSearch, AppFooter },
  methods: {
    fetchResults(query) {
      //this.fetchApartment(query);
      console.log(query);

      //this.fetchCity(query);
    },
    /*  fetchApartment(query) {
      axios
        .get(
          `${this.base_url}/search/apartment?api_key=${this.api_key}&query=${query}`
        )
        .then((response) => {
          store.movieList = response.data.results;
        });
    }, */
  },
};
</script>

<template>
  <!-- Header -->
  <AppHeader />
  <AppSearch
    :placeholder="searchPlaceholder"
    :search="searchButton"
    @newSearch="fetchResults"
  />

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
