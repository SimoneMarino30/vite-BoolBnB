<script>
// import axios from "axios";

// export default {
//   data() {
//     return {
//       allApartments: [],
//       searchedApartments: [],
//       address: "",
//       lat_a: "",
//       lon_a: "",
//     };
//   },

//   emits: ["on-search"],

//   methods: {
//     search() {
//       this.$emit("on-search", this.address);
//       this.fetchCoordinates(); // Chiamata per ottenere le coordinate
//       //this.calculateDistance(); // Calcolo della distanza
//     },

//     fetchApartments() {
//       axios.get(`http://127.0.0.1:8000/api/apartments`).then((response) => {
//         this.allApartments = response.data.data;
//         console.log("Apartments:", this.allApartments);
//       });
//     },

//     //PRENDE LE COORDINATE DI QUELLO CHE CERCO NELLA SEARCH BAR
//     fetchCoordinates() {
//       axios
//         .get(
//           `https://api.tomtom.com/search/2/geocode/${this.address}.json?key=VTS7KTu4nrOLxN010rCYu364QXAVRCfK&countrySet=IT`
//         )
//         .then((response) => {
//           //stampo le coordinate del primo appartamento della mia ricerca, ovvero IL PUNTO GEOGRAFICO DI RIFERIMENTO
//           const lat_a = response.data.results[0].position.lat;
//           const lon_a = response.data.results[0].position.lon;
//           console.log("Coord di riferimento", lat_a, lon_a);
//           console.log("prova log");

//           this.lat_a = lat_a;
//           this.lon_a = lon_a;

//           this.calculateDistance();
//         });
//     },

//     calculateDistance(range = 20) {
//       for (let i = 0; i < this.allApartments.length; i++) {
//         const lat_a = this.lat_a; // Latitudine del punto 1
//         const lon_a = this.lon_a; // Longitudine del punto 1

//         //console.log(this.allApartments[i]);

//         const lat_b = this.allApartments[i].latitude; // Latitudine del punto 2
//         console.log("Latitudine dell'appartamento " + lat_b);
//         const lon_b = this.allApartments[i].longitude; // Longitudine del punto 2
//         console.log("Longitudine dell'appartamento " + lon_b);

//         const earthRadius = 6371; // Raggio medio della Terra in chilometri

//         const dLat = this.toRadians(lat_b - lat_a);
//         const dLon = this.toRadians(lon_b - lon_a);

//         const a =
//           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//           Math.cos(this.toRadians(lat_a)) *
//           Math.cos(this.toRadians(lat_b)) *
//           Math.sin(dLon / 2) *
//           Math.sin(dLon / 2);

//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = earthRadius * c;

//         console.log(`Distanza: ${distance} km`);

//         if (distance <= range) {
//           this.searchedApartments.push(this.allApartments[i]);
//         }
//         console.log("ApP filtrati " + this.searchedApartments);
//         console.log("i " + i);
//         console.log("range " + range);
//       }
//     },

//     //converte gradi in radianti FA PARTE DELLA FORMULA SOPRA
//     toRadians(degrees) {
//       return (degrees * Math.PI) / 180;
//     },
//   },

//   created() {
//     this.fetchApartments();
//   },
// };
</script>

<template>
  <!-- <div class="search-bar-container my-3 d-flex align-items-end justify-content-end">
    <div class="search-bar" id="searchBarContainer">
      <form class="d-flex" role="search" @submit.prevent="search">
        <input class="form-control" type="search" :placeholder="placeholder" aria-label="Search" v-model="address"
          id="address" name="address" />
        <button class="btn btn-primary mx-2" type="submit">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
// @use "../../style/partials/variables.scss" as *;
// @use "../../style/partials/mixins.scss" as *;
// @use "../../style/general.scss" as *;

// @include btn_hover();

// .search-bar-container {
//   width: 100%;

//   .search-bar {
//     width: 70%;
//     margin: 2rem auto;
//   }
// }
</style>

