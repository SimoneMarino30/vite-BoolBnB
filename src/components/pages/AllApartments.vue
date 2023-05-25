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
      },

      filteredApartments: [],
      resetApartments: [],
    };
  },

  components: { AppList, SearchBar, FilterSection, Loader },

  // emits: ["changePage"],

  methods: {
    fetchApartments() {
      this.isLoading = true; // Imposta isLoading su true prima della chiamata

      axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
        this.apartments.list = response.data;
        this.filteredApartments = response.data.links;
        this.resetApartments = response.data.links;
        this.filterApartments(this.apartments.list);
        this.isLoading = false; // Imposta isLoading su false dopo la chiamata
      });
    },

    filterApartments(apartments) {
      this.filteredApartments = apartments;
    },

    resetFilters() {
      this.fetchApartments();
    },

    // Funzione per cercare appartamento per indirizzo passato dall'emit della SearchBar
    fetchApartmentsByAddress() {
      this.isLoading = true;
      this.apartments.list = [];
      this.filteredApartments = [];
      // this.apartments.pages = [];
      axios
        .get(`${store.apiUrl}apartments?address=${address.value}`)
        .then((response) => {
          console.log(response);
          this.apartments.list = response.data.data;
          this.filteredApartments = response.data;

          this.filterApartments(this.apartments.list);
        })
        .finally(() => {
          this.isLoading = false;
        });
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
      <FilterSection
        @filterApartments="filterApartments"
        :allApartments="filteredApartments"
        @resetFilters="resetFilters"
      />
    </div>

    <div class="apartments-container min-height flex-column">
      <SearchBar @on-search="fetchApartmentsByAddress()" />
      <Loader v-if="isLoading" />
      <!-- Aggiungi il componente Loader quando isLoading è true -->

      <!-- * Vecchio codice -->
      <AppList
        v-else-if="filteredApartments.length > 0"
        :apartments="filteredApartments"
      />
      <div
        v-else
        class="text-muted text-center"
      >
        <h2>Nessun appartamento trovato</h2>
        <h3>Prova Modificando i termini di ricerca</h3>
      </div>

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
