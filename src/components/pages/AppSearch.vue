<script>
import axios from "axios";

export default {
  name: "SearchApartments",

  data() {
    return {
      allServices: [],
      filterApartments: [],
      beds: null,
      rooms: null,
      bathrooms: null,
      price: null,
      services: [],
      filterApartments: [],
    };
  },

  methods: {
    SearchApartments() {
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
          this.filterApartments = response.data.data;
          console.log("appartamenti filtrati", this.filterApartments);
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
        <div v-for="item in allServices" :key="item.id">
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

      <button @click="SearchApartments()" class="btn btn-primary">
        Filtra
      </button>
    </aside>
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
