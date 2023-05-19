<script>
import axios from "axios";
import AppList from "../Main/AppList.vue";
import SearchBar from "../Main/SearchBar.vue";
import FilterSection from "../Main/FilterSection.vue";

export default {
  name: "AllApartments",
  data() {
    return {
      apartments: {
        list: [],
        pages: [],
      },
    };
  },

  components: { AppList, SearchBar, FilterSection },

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
  <div class="d-flex">
    <FilterSection />
    <SearchBar />
  </div>

  <AppList
    :apartments="apartments.list"
    :pages="apartments.pages"
    @changePage="fetchApartments"
  />
</template>

<style></style>
