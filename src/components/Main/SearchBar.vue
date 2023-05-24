<script>
import axios from "axios";

export default {
  data() {
    return {
      /* search bar */
      // wordSearched: "",
      // searchedApartments: [],
      address: "",
      // latitudine: null,
      // longitudine: null,
      // name: null,
    };
  },

  emits: ["on-search"],

  methods: {
    search() {
      this.$emit("on-search", this.address);
    },

    // searchApartmentsBar() {
    //   axios
    //     .get("http://127.0.0.1:8000/api/apartments", {
    //       params: {
    //         adress: this.address,
    //         name: this.title,
    //       },
    //     })
    //     .then((response) => {
    //       this.searchedApartments = response.data.data;
    //       console.log("appartamenti trovati", this.searchedApartments);

    //       this.searchedApartments.forEach((apartment) => {
    //         const lat = this.latitudine;
    //         const lon = this.longitudine;
    //         const lat1 = apartment.latitude;
    //         const lon1 = apartment.longitude;
    //       });
    //     });
    // },

    // saveCoordinate() {
    //   axios
    //     .get(
    //       "https://api.tomtom.com/search/2/geocode/" +
    //       this.address +
    //       ".json?key=VTS7KTu4nrOLxN010rCYu364QXAVRCfK",
    //       {
    //         params: {
    //           countrySet: "IT",
    //           latitudine: "42.6384261",
    //           longitudine: "12.674297",
    //           radius: "20000",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       this.latitude = response.data.results[0].position.lat;
    //       this.longitude = response.data.results[0].position.lon;

    //       console.log("coordinate:", response);
    //       console.log("latitudine:", this.latitude);
    //       console.log("longitudine:", this.longitude);
    //     });
    // },
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
