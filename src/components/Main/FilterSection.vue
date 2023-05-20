<script>
import axios from "axios";
import SearchBar from "./SearchBar.vue";

export default {
  data() {
    return {
      /* aside */
      filteredApartments: [],
      beds: null,
      rooms: null,
      bathrooms: null,
      price: null,

      //services: [],
      allServices: [],
      name: null,
      icon: null,

      /* slider */
      currentMinPrice: null,
      currentMaxPrice: null,
      currentDistance: null,
    };
  },

  components: { SearchBar },

  methods: {
    searchApartmentsFilter() {
      axios
        .get("http://127.0.0.1:8000/api/apartments", {
          params: {
            beds: this.beds,
            rooms: this.rooms,
            bathrooms: this.bathrooms,
            price: this.price,

            min_price: this.currentMinPrice,
            max_price: this.currentMaxPrice,
          },
        })
        .then((response) => {
          this.filteredApartments = response.data.data;
          console.log("appartamenti filtrati", this.filteredApartments);
        });
    },

    fetchServices() {
      axios
        .get("http://127.0.0.1:8000/api/services", {
          params: {
            name: this.name,
            icon: this.icon,
          },
        })
        .then((response) => {
          this.allServices = response.data.services;
          console.log("tutti i servizi", this.allServices);

          //return (this.services = response.data.services);
        });
    },

    created() {
      this.fetchServices();
    },

    toggleAside() {
      var drawer = document.getElementById("overlayFilters");
      //var searchBar = document.getElementById("searchBarContainer");

      if (drawer.style.width == "100%") {
        drawer.style.width = "0%";
        //  searchBar.style.display = "block";
      } else {
        drawer.style.width = "100%";
        //searchBar.style.display = "none";
      }
    },

    getPrice() {
      var priceSlider = document.getElementById("priceRange");
      var output = document.getElementById("displayedPriceValue");
      output.innerHTML = priceSlider.value; // Display the default slider value
      this.currentPrice = priceSlider.value; // Assegna il valore corrente a currentPrice
      // ...
    },
    getDistance() {
      var distanceSlider = document.getElementById("kmRange");
      var output = document.getElementById("displayedKmValue");
      output.innerHTML = priceSlider.value; // Display the default slider value
      this.currentDistance = distanceSlider.value; // Assegna il valore corrente a currentDistance
      // ...
    },
  },
};
</script>

<template>
  <div class="main-container d-flex align-items-start">
    <div
      id="overlayFilters"
      class="overlay-container d-flex"
    >
      <!-- aside -->
      <aside class="px-sm-3 px-md-4 px-lg-5 py-5">
        <!-- SEARCH BAR -->
        <div class="searchBarContainer">
          <SearchBar />
        </div>

        <!-- FORM -->
        <div class="filters-form my-4">
          <!-- price range -->
          <div class="price">
            <label for="price">Prezzo</label>
            <div class="d-flex flex-row justify-content-between">
              <!-- min price-->
              <input
                class="form-control shorter-input"
                type="number"
                id="price"
                v-model.number="currentMinPrice"
                min="0"
                placeholder="Min €"
              />
              <!-- max price -->
              <input
                class="form-control shorter-input"
                type="number"
                id="price"
                v-model.number="currentMaxPrice"
                min="0"
                placeholder="Max €"
              />
            </div>

            <!--slide bar-->
            <input
              type="range"
              class="rangeSlider mt-3 mb-1"
              min="0"
              max="1000"
              v-model="currentMinPrice"
            />
            <input
              type="range"
              class="rangeSlider mt-3 mb-1"
              min="0"
              max="1000"
              v-model="currentMaxPrice"
            />
            <div class="d-flex flex-row justify-content-between m-0">
              <p id="">0 €</p>
              <p id="">1000 €</p>
            </div>
          </div>

          <!-- number room bed bathroom -->
          <div class="brb">
            <div class="d-flex flex-row justify-content-between text-center">
              <div class="room">
                <label for="number_room">Stanze</label>
                <input
                  class="form-control shorter-input"
                  id="number_room"
                  type="number"
                  min="1"
                  max="10"
                  v-model.number="rooms"
                  placeholder="1"
                />
              </div>
              <div class="bed">
                <label for="number_bed">Posti letto</label>
                <input
                  class="form-control shorter-input"
                  id="number_bed"
                  type="number"
                  min="1"
                  max="20"
                  v-model.number="beds"
                  placeholder="1"
                />
              </div>

              <div class="bath">
                <label for="number_bath">n° Bagni</label>
                <input
                  class="form-control shorter-input"
                  id="number_bath"
                  type="number"
                  min="1"
                  max="8"
                  v-model.number="bathrooms"
                  placeholder="1"
                />
              </div>
            </div>
          </div>

          <!-- km range -->
          <div class="km">
            <label for="km">Distanza</label>
            <div class="d-flex">
              <!-- displayed km -->
              <input
                class="form-control mt-3"
                type="number"
                id="rangeKm"
                v-model.number="currentDistance"
                min="0"
                max="100"
                placeholder="Distanza Km"
              />
              <!--slide bar-->
              <input
                type="range"
                class="rangeSlider my-3"
                min="0"
                max="20"
                v-model="currentDistance"
              />
              <div class="d-flex flex-row justify-content-between m-0">
                <p id="">0 Km</p>
                <p id="">20 Km</p>
              </div>
            </div>
          </div>
        </div>

        <!-- services -->
        <div>
          <div
            v-for="service in allServices"
            :key="service.id"
          >
            <input
              type="checkbox"
              v-model="services"
              :id="service.name"
              name="services"
              :value="service.name"
            />
            <label :for="service.name">{{ service.name }}</label
            ><br />
          </div>
        </div>
        <button
          @click="searchApartmentsFilter(), fetchServices()"
          class="btn btn-primary"
        >
          Filtra
        </button>
      </aside>
    </div>
    <!-- filter-btn -->
    <div>
      <button
        class="btn btn-primary filter"
        @click="toggleAside()"
      >
        <font-awesome-icon icon="fa-solid fa-filter" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;
@use "../../style/general.scss" as *;

@include btn_hover();

div {
  .overlay-container {
    overflow-x: hidden;
    transition: 0.7s;
    width: 0;
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    box-shadow: 0.5rem 0px 1rem -0.5rem rgba(0, 0, 0, 0.42);
    position: relative;
    background-color: $light_color;

    aside {
      width: 100%;
      align-items: start;
      padding: 3rem 5rem;

      div {
        display: flex;
        flex-direction: column;
      }

      .rangeSlider {
        -webkit-appearance: none;
        background: $dark_accent_color;
        height: 0.5rem;
        border-radius: 25px;
      }
      .rangeSlider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 1rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background: $light_accent_color;
        cursor: pointer;
      }

      .filters-form {
        div {
          margin: 0.5rem 0;
          .shorter-input {
            width: 6rem;
          }
        }
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
</style>
