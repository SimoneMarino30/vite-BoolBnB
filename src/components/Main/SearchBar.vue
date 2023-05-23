<script>
import axios from "axios";

export default {
  data() {
    return {
      address: "",
    };
  },

  emits: ["on-search"],

  methods: {
    search() {
      this.$emit("on-search", this.address);
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
    //width: 70%;
  }
}
</style>
