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

  /*   props: {
    name: String,
    placeholder: String,
    search: String,
  }, */

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
  },
};
</script>

<template>
  <div class="d-flex">
    <aside>
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

    <!-- search bar -->
    <div class="container mt-4">
      <a class="navbar-brand fs-1 text-danger">{{ name }}</a>
      <form
        class="d-flex"
        role="search"
        @submit.prevent="searchApartmentsBar()"
      >
        <input
          class="form-control me-2"
          type="search"
          :placeholder="placeholder"
          aria-label="Search"
          v-model="wordSearched"
        />
        <button
          class="btn btn-primary"
          type="submit"
        >
          trova
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  width: 30%;
  height: calc(100vh + 60px);
  padding: 60px;
  top: 70px;
  box-shadow: 17px 0px 17px -5px rgba(0, 0, 0, 0.42);
  position: sticky;
}
</style>
