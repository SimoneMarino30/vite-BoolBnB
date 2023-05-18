<script>
import axios from "axios";

export default {
  name: "SearchApartments",

  data() {
    return {
      /* aside */
      allServices: [],
      filteredApartments: [],
      beds: null,
      rooms: null,
      bathrooms: null,
      price: null,
      services: [],

      /* search bar */
      wordSearched: "",
      searchedApartments: [],
      address: null,
      name: null,
    };
  },

  methods: {
    searchApartmentsFilter() {
      axios
        .get("http://127.0.0.1:8000/api/apartments", {
          params: {
            beds: this.beds,
            rooms: this.rooms,
            bathrooms: this.bathrooms,
            price: this.price,
            services: this.services,
          },
        })
        .then((response) => {
          this.filteredApartments = response.data.data;
          console.log("appartamenti filtrati", this.filteredApartments);
        });
    },

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

    allServices() {
      axios
        .get("http://127.0.0.1:8000/api/services", {
          params: {},
        })
        .then((response) => {
          return (this.services = response.data.services);
        });
    },

    created() {
      this.allServices();
    },

    openAside() {
      document.getElementById("overlayFilters").style.width = "40%";
    },
    closeAside() {
      document.getElementById("overlayFilters").style.width = "0%";
    },
  },
};
</script>

<template>
  <div class="d-flex align-items-start">
    <div
      id="overlayFilters"
      class="overlay-container d-flex"
    >
      <!-- aside -->
      <aside>
        <button
          class="btn closebtn"
          @click="closeAside()"
        >
          &times;
        </button>
        <div class="price">
          <label for="price">Prezzo</label>
          <input
            type="number"
            id="price"
            v-model.number="price"
            min="0"
            placeholder="€"
          />
        </div>

        <div class="brb">
          <div class="room">
            <label for="number_room">Stanze</label>
            <input
              id="number_room"
              type="number"
              min="1"
              v-model.number="rooms"
              placeholder="1"
            />
          </div>
          <div class="bed">
            <label for="number_bed">Letti</label>
            <input
              id="number_bed"
              type="number"
              min="1"
              v-model.number="beds"
              placeholder="1"
            />
          </div>

          <div class="bath">
            <label for="number_bath"> Bagni</label>
            <input
              id="number_bath"
              type="number"
              min="1"
              v-model.number="bathrooms"
              placeholder="1"
            />
          </div>
        </div>

        <div>
          <div
            v-for="item in allServices"
            :key="item.id"
          >
            <input
              type="checkbox"
              v-model="services"
              :id="item.name"
              name="services"
              :value="item.name"
            />
            <label :for="item.name">{{ item.name }}</label
            ><br />
          </div>
        </div>

        <button
          @click="searchApartmentsFilter()"
          class="btn btn-primary"
        >
          Filtra
        </button>
      </aside>
    </div>

    <!-- search bar -->
    <div class="search-bar my-3 d-flex align-items-end justify-content-between">
      <!-- filter-btn -->
      <div>
        <button
          class="btn btn-primary filter"
          @click="openAside()"
        >
          <font-awesome-icon icon="fa-solid fa-filter" />
        </button>
      </div>
      <div class="">
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
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;
@use "../../style/general.scss" as *;

@include btn_hover();

.overlay-container {
  overflow-x: hidden;
  transition: 0.7s;
  width: 0;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  aside {
    width: 100%;
    align-items: start;
    padding: 6rem;
    box-shadow: 0.5rem 0px 1rem -0.5rem rgba(0, 0, 0, 0.42);
    position: sticky;
    background-color: $light_color;

    .closebtn {
      position: absolute;
      top: 0;
      right: 2rem;
      font-size: 3rem;
      border: none;
      &:hover {
        background-color: inherit;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      input {
        margin-bottom: 1rem;
      }
    }
  }
}

.filter {
  border-radius: 0 40% 40% 0;
  width: 4rem;
  padding: 1rem;
  font-size: x-large;
}

.search-bar {
  width: 100%;
  input {
    width: 50rem;
  }
}
</style>
