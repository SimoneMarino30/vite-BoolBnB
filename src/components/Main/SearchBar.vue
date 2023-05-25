<script>
import axios from "axios";

export default {
  data() {
    return {
      /* search bar */
      // wordSearched: "",
      allApartments: [],
      searchedApartments: [],
      address: "",
      lat_a: "",
      lon_a: "",
      lat_b: [],
      lon_b: [],
      // name: null,
    };
  },

  emits: ["on-search"],

  methods: {
    search() {
      this.$emit("on-search", this.address);
      this.fetchCoordinates(); // Chiamata per ottenere le coordinate
      this.calculateDistance(); // Calcolo della distanza
    },

    fetchApartments() {
      axios.get(`http://127.0.0.1:8000/api/apartments`).then((response) => {
        this.allApartments = response.data;
        console.log("Apartments:", this.allApartments);
      });
    },

    //PRENDE LE COORDINATE DEL PRIMO RISULTATO DELLA RICERCA
    fetchCoordinates() {
      axios
        .get(
          `https://api.tomtom.com/search/2/geocode/${this.address}.json?key=VTS7KTu4nrOLxN010rCYu364QXAVRCfK&countrySet=IT`
        )
        .then((response) => {
          //stampo le coordinate del primo appartamento della mia ricerca, ovvero IL PUNTO GEOGRAFICO DI RIFERIMENTO
          const lat_a = response.data.results[0].position.lat;
          const lon_a = response.data.results[0].position.lon;
          console.log("Coord di riferimento", lat_a, lon_a);

          this.lat_a = lat_a;
          this.lon_a = lon_a;

          // Prendi le coordinate degli altri elementi
          const otherCoordinates = response.data.results
            .slice(1)
            .map((result) => {
              return {
                lat: result.position.lat,
                lon: result.position.lon,
              };
            });

          // Assegna le coordinate a lat_b e lon_b
          this.lat_b = otherCoordinates.map((coordinate) => coordinate.lat);
          this.lon_b = otherCoordinates.map((coordinate) => coordinate.lon);
          console.log("Coord di arrivo", this.lat_b, this.lon_b);

          this.calculateDistance();
        });
    },

    calculateDistance() {
      / Coordinate di riferimento /;
      const lat_a = this.lat_a;
      const lon_a = this.lon_a;
      console.log("latitudine A", lat_a);
      console.log("longitudine A", lon_a);

      /Array di coordinate da confrontare /;
      const lat_b = this.lat_b;
      const lon_b = this.lon_b;
      console.log("latitudine B", lat_b);
      console.log("longitudine B", lon_b);

      for (let i = 0; i < this.allApartments.length; i++) {
        const lat_b_i = lat_b[i];
        const lon_b_i = lon_b[i];

        /* FORMULA MATEMATICA CHE CALCOLA LA DISTANZA TRA 2 PUNTI */
        const earthRadius = 6371; // Raggio medio della Terra in chilometri

        const dLat = this.toRadians(lat_b_i - lat_a);
        const dLon = this.toRadians(lon_b_i - lon_a);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.toRadians(lat_a)) *
            Math.cos(this.toRadians(lat_b_i)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;

        console.log(`Distanza: ${distance} km`);

        //stampo gli appartamenti che hanno distanza di max 20 km (poi li ordino in maniera crescente)
      }
    },

    //converte gradi in radianti FA PARTE DELLA FORMULA SOPRA
    toRadians(degrees) {
      return (degrees * Math.PI) / 180;
    },
  },

  created() {
    this.fetchApartments();
  },
};
</script>

<template>
  <!-- search bar -->
  <div
    class="search-bar-container my-3 d-flex align-items-end justify-content-end"
  >
    <div
      class="search-bar"
      id="searchBarContainer"
    >
      <form
        class="d-flex"
        role="search"
        @submit.prevent="search"
      >
        <input
          class="form-control"
          type="search"
          :placeholder="placeholder"
          aria-label="Search"
          v-model="address"
          id="address"
          name="address"
        />
        <button
          class="btn btn-primary mx-2"
          type="submit"
          @click="search()"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;
@use "../../style/general.scss" as *;

@include btn_hover();

.search-bar-container {
  width: 100%;

  .search-bar {
    width: 70%;
    margin: 2rem auto;
  }
}
</style>
