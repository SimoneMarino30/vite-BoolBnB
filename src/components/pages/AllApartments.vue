<script>
// AXIOS
import axios from "axios";

// STORE
import { store } from "../../data/store.js";

// COMPONENTS
import AppList from "../Main/AppList.vue";
import SearchBar from "../Main/SearchBar.vue";
import FilterSection from "../Main/FilterSection.vue";
import Loader from "../pages/Loader.vue";

export default {
  name: "AllApartments",
  data() {
    return {
      store,
      isLoading: false,
      apartments: {
        list: [],
        pages: [],
      },

      filteredApartments: [],
    };
  },

  components: { AppList, SearchBar, FilterSection, Loader },

  emits: ["changePage"],

  methods: {
    fetchApartments(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/apartments";

      this.isLoading = true; // Imposta isLoading su true prima della chiamata

      axios.get(endpoint).then((response) => {
        this.apartments.list = response.data.data;
        this.apartments.pages = response.data.links;
        this.filterApartments(this.apartments.list);
        this.isLoading = false; // Imposta isLoading su false dopo la chiamata
      });
    },

    filterApartments(apartments) {
      this.filteredApartments = apartments;
    },

    // Funzione per cercare appartamento per indirizzo passato dall'emit della SearchBar
    fetchApartmentsByAddress() {
      this.isLoading = true;
      this.apartments.list = [];
      this.apartments.pages = [];
      axios
        .get(`${store.apiUrl}apartments?address=${address.value}`)
        .then(response => {
          console.log(response);
          this.apartments.list = response.data.data;
          this.apartments.pages = response.data.links;

          this.filterApartments(this.apartments.list);
        })
        .finally(() => {
          this.isLoading = false;
        }
        );
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

    <div class="apartments-container min-height flex-column">
      <SearchBar @on-search="fetchApartmentsByAddress()" />
      <Loader v-if="isLoading" /> <!-- Aggiungi il componente Loader quando isLoading è true -->

      <!-- * Vecchio codice -->
      <AppList v-else-if="filteredApartments.length > 0" :apartments="filteredApartments" :pages="apartments.pages"
        @changePage="fetchApartments" />

      <!-- * Nuovo codice -->
      <!-- <AppList :apartments="apartments.list" :pages="apartments.pages" @changePage="fetchApartments" /> -->
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

.min-height {
  min-height: 1000px;
}
</style>
