<script>
import axios from "axios";

export default {
  data() {
    return {
      /* search bar */
      wordSearched: "",
      searchedApartments: [],
      address: null,
      name: null,
    };
  },

  methods: {
    searchApartmentsBar() {
      axios
        .get("http://127.0.0.1:8000/api/apartments", {
          params: {
            adress: this.address,
            name: this.title,
          },
        })
        .then((response) => {
          this.searchedApartments = response.data.data;
          console.log("appartamenti trovati", this.searchedApartments);
        });
    },
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
        @submit.prevent="searchApartmentsBar()"
      >
        <input
          class="form-control"
          type="search"
          :placeholder="placeholder"
          aria-label="Search"
          v-model="wordSearched"
        />
        <button
          class="btn btn-primary mx-2"
          type="submit"
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
    //width: 70%;
  }
}
</style>
