<script>
// AXIOS
import axios from "axios";

// STORE
import { store } from "../../data/store.js";

// COMPONENTS
import AppList from "../Main/AppList.vue";
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
      address: "",
      lat_a: "",
      lon_a: "",
      filteredApartments: [],
      resetApartments: [],
      showAll: true, // Variabile che serve nel template come parametro della condizione per la prop di AppList
    };
  },

  components: { AppList, FilterSection, Loader },

  // emits: ["changePage"],

  methods: {

    // Recupero tutti gli appartamenti
    fetchApartments() {
      this.isLoading = true; // Imposta isLoading su true prima della chiamata

      axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
        this.apartments.list = response.data.data;
        // console.log(this.apartments.list);
      })
        .finally(() => {
          this.isLoading = false; // Imposta isLoading su false dopo la chiamata
        });
    },

    // Uso tomtom per recuperare coordinate stringa nella searchbar
    fetchCoordinates() {
      this.lat_a = "";
      this.lon_a = "";
      axios
        .get(
          `https://api.tomtom.com/search/2/geocode/${this.address}.json?key=VTS7KTu4nrOLxN010rCYu364QXAVRCfK&countrySet=IT`
        )
        .then((response) => {
          //stampo le coordinate del primo appartamento della mia ricerca, ovvero IL PUNTO GEOGRAFICO DI RIFERIMENTO
          this.lat_a = response.data.results[0].position.lat;
          this.lon_a = response.data.results[0].position.lon;
          // console.log("Coord di riferimento", this.lat_a, this.lon_a);

          this.calculateDistance();
        });
    },

    // Setta array appartamento passato nel parametro uguale all'array appartamenti filtrati
    filterApartments(apartments) {
      this.filteredApartments = apartments;
    },

    // Calcola il raggio e aggiunge appartamenti all'array appartamenti filtrati se la distanza è minore o uguale al range nel parametro
    calculateDistance(range = 20) {
      this.filteredApartments = [];
      // Variabile per non stampare tutti gli appartamenti ma solo quelli filtrati per raggio
      this.showAll = false;
      for (let i = 0; i < this.apartments.list.length; i++) {
        const lat_a = this.lat_a; // Latitudine del punto 1
        const lon_a = this.lon_a; // Longitudine del punto 1

        //console.log(this.apartments.list[i]);

        const lat_b = this.apartments.list[i].latitude; // Latitudine del punto 2
        // console.log("Latitudine dell'appartamento " + lat_b);
        const lon_b = this.apartments.list[i].longitude; // Longitudine del punto 2
        // console.log("Longitudine dell'appartamento " + lon_b);

        const earthRadius = 6371; // Raggio medio della Terra in chilometri

        const dLat = this.toRadians(lat_b - lat_a);
        const dLon = this.toRadians(lon_b - lon_a);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.toRadians(lat_a)) *
          Math.cos(this.toRadians(lat_b)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
        // console.log(`Distanza: ${distance} km`);
        if (distance <= range) {
          this.filteredApartments.push(this.apartments.list[i]);
        }
        // console.log("ApP filtrati " + this.searchedApartments);
        // console.log("i " + i);
        // console.log("range " + range);
      }
    },

    //converte gradi in radianti (serve a calculateDistance())
    toRadians(degrees) {
      return (degrees * Math.PI) / 180;
    },

    // Ritorna l'array chiamato sul created
    resetFilters() {
      this.fetchApartments();
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
      <FilterSection @filterApartments="filterApartments" :allApartments="filteredApartments"
        @resetFilters="resetFilters" />
    </div>

    <div class="apartments-container min-height flex-column">
      <!-- <SearchBar @on-search="fetchApartmentsByAddress()" /> -->
      <!-- * SEARCHBAR -->
      <div class="search-bar-container my-3 d-flex align-items-end justify-content-end">
        <div class="search-bar" id="searchBarContainer">
          <form class="d-flex" role="search" @submit.prevent="fetchCoordinates()">
            <input class="form-control" type="search" :placeholder="placeholder" aria-label="Search" v-model="address"
              id="address" name="address" />
            <button class="btn btn-primary mx-2" type="submit">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>

      <Loader v-if="isLoading" />
      <!-- Aggiungi il componente Loader quando isLoading è true -->

      <AppList v-else-if="showAll" :apartments="apartments.list" />
      <AppList v-else-if="!showAll" :apartments="filteredApartments" />
      <div v-else class="text-muted text-center">
        <h2>Nessun appartamento trovato</h2>
        <h3>Prova Modificando i termini di ricerca</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;
@use "../../style/general.scss" as *;

@include btn_hover();

// SEARCHBAR
.search-bar-container {
  width: 100%;

  .search-bar {
    width: 70%;
    margin: 2rem auto;
  }
}

// LIST
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
