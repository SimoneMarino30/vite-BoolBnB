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

      filteredApartments: [],
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
        this.filterApartments(this.apartments.list);
      });
    },

    filterApartments(apartments) {
      this.filteredApartments = apartments;
    },
  },

  created() {
    this.fetchApartments();
  },
};
</script>

<template>
  <div class="page-container margin-fix">
    <div class="filter-container d-flex">
      <FilterSection @filterApartments="filterApartments" />
    </div>

    <div class="apartments-container d-flex flex-column">
      <SearchBar />

      <AppList
        v-if="filteredApartments.length > 0"
        :apartments="filteredApartments"
        :pages="apartments.pages"
        @changePage="fetchApartments"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.margin-fix {
  margin-top: 106px;
}
.page-container {
  display: flex;
  justify-content: center;
}

.apartments-container {
  flex: 1;
  align-self: center;
}
</style>
