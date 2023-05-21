<script>
import axios from "axios";
import SearchBar from "./SearchBar.vue";

export default {
  data() {
    return {
      /* aside */
      allApartments: [],
      beds: null,
      rooms: null,
      bathrooms: null,
      price: null,

      //services: [],
      allServices: [],
      name: null,
      icon: null,
      selectServices: [],

      /* slider */
      currentMinPrice: null,
      currentMaxPrice: null,
      currentDistance: null,
    };
  },

  components: { SearchBar },

  methods: {
    //CERCA APPARTAMENTI FILTRATI
    searchApartmentsFilter() {
      axios
        .get("http://127.0.0.1:8000/api/apartments", {
          params: {
            beds: this.beds,
            rooms: this.rooms,
            bathrooms: this.bathrooms,
            price: this.price,

            /*  min_price: this.currentMinPrice,
            max_price: this.currentMaxPrice, */

            services: this.selectServices,
          },
        })
        .then((response) => {
          this.allApartments = response.data.data;
          console.log("appartamenti totali", this.allApartments);

          // Stampa solo gli appartamenti che coincidono con i valori specificati
          const filteredApartments = this.allApartments.filter((apartment) => {
            return (
              (this.beds === null || apartment.beds >= this.beds) &&
              (this.rooms === null || apartment.rooms >= this.rooms) &&
              (this.bathrooms === null ||
                apartment.bathrooms >= this.bathrooms) &&
              (this.price === null || apartment.price <= this.price)
            );
          });

          console.log(
            "appartamenti filtrati",
            filteredApartments.map((apartment) => ({
              name: apartment.title,
              rooms: apartment.rooms,
              beds: apartment.beds,
              bathrooms: apartment.bathrooms,
            }))
          );
        });
    },

    //CHIAMA TUTTI SERVIZI
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
        });
    },

    //APRE E CHIUDE LA TENDINA DEI FILTRI
    toggleAside() {
      var drawer = document.getElementById("overlayFilters");
      //var searchBar = document.getElementById("searchBarContainer");

      if (drawer.style.width == "100%") {
        drawer.style.width = "0%";
        //  searchBar.style.display = "block";
      } else {
        drawer.style.width = "100%";
        this.fetchServices();
        //searchBar.style.display = "none";
      }
    },

    //ASSEGNA IL PREZZO DALLO SLIDER
    getPriceRange() {
      const min_price = this.currentMinPrice;
      const max_price = this.currentMaxPrice;

      if (min_price > max_price) {
        min_price === max_price;
      } else if (max_price < min_price) {
        max_price === min_price;
      }
    },

    //ASSEGNA IL RAGGIO DALLO SLIDER
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
        <div class="filters-form">
          <!-- km range -->
          <div class="km-container m-0">
            <label for="km">Raggio</label>
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
          <!-- price range -->
          <div class="price-container m-0">
            <label for="price">Prezzo</label>
            <div class="d-flex flex-row justify-content-between">
              <!-- min price-->
              <input
                class="form-control shorter-input"
                type="number"
                id="price"
                v-model.number="currentMinPrice"
                min="0"
                :max="currentMaxPrice - 1"
                placeholder="Min €"
              />
              <!-- max price -->
              <input
                class="form-control shorter-input"
                type="number"
                id="price"
                v-model.number="currentMaxPrice"
                :min="currentMinPrice + 1"
                max="1000"
                placeholder="Max €"
              />
            </div>

            <!--slide bar-->
            <input
              type="range"
              class="rangeSlider mt-3"
              min="0"
              :max="currentMaxPrice"
              v-model="currentMinPrice"
            />
            <input
              type="range"
              class="rangeSlider mt-3"
              :min="currentMinPrice"
              max="1000"
              v-model="currentMaxPrice"
            />
            <div class="d-flex flex-row justify-content-between m-0">
              <p id="">0 €</p>
              <p id="">1000 €</p>
            </div>
          </div>

          <!-- number room bed bathroom -->
          <div class="brb-container m-0">
            <div class="d-flex flex-row justify-content-between">
              <div class="room d-flex align-items-center">
                <label for="number_room">Stanze</label>
                <input
                  class="form-control brb"
                  id="number_room"
                  type="number"
                  min="1"
                  max="10"
                  v-model.number="rooms"
                  placeholder="1"
                />
              </div>
              <div class="bed d-flex align-items-center">
                <label for="number_bed">Posti letto</label>
                <input
                  class="form-control brb"
                  id="number_bed"
                  type="number"
                  min="1"
                  max="20"
                  v-model.number="beds"
                  placeholder="1"
                />
              </div>

              <div class="bath d-flex align-items-center">
                <label for="number_bath">n° Bagni</label>
                <input
                  class="form-control brb"
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

          <!-- services -->
          <div class="services-container">
            <span class="fs-4">Seleziona servizi</span>
            <div>
              <ul
                v-for="service in allServices"
                :key="service.id"
                class="d-flex flex-row flex-wrap p-0"
              >
                <label
                  :class="[
                    'py-2 px-3 m-2 service-card rounded-5 form-check',
                    { 'selected-service': selectServices.includes(service.id) },
                  ]"
                >
                  <input
                    type="checkbox"
                    class="form-check-input"
                    :value="service.id"
                    v-model="selectServices"
                  />
                  <div class="d-flex flex-row align-items-center">
                    <span><font-awesome-icon :icon="service.icon" /></span>
                    <span class="service-name ms-2">{{ service.name }}</span>
                  </div>
                </label>
              </ul>
            </div>
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

    <!-- FILTER ICON -->
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

.main-container {
  position: fixed;
  z-index: 5;
  margin-top: 7rem;
  .overlay-container {
    overflow-x: hidden;
    transition: 0.7s;
    width: 0;
    position: relative;
    z-index: 4;
    top: 0;
    left: 0;
    box-shadow: 0.5rem 0px 1rem -0.5rem rgba(0, 0, 0, 0.42);
    position: relative;
    background-color: $light_color;

    aside {
      width: 100%;
      max-height: 39rem;

      align-items: start;
      padding: 3rem 5rem;
      overflow-y: auto;

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
        //appearance: none;
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

          .brb {
            width: 4rem;
          }
        }

        .services-container {
          .service-card {
            color: $light_color;
            background-color: $dark_color;
            position: relative;

            //faccio sparire il checkbox brutto di default
            input[type="checkbox"] {
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
            }
            &:hover {
              background-color: $dark_accent_color;
              color: $dark_color;
            }

            .service-name {
              display: none;
              transition: display 3.5s;
            }
          }

          .service-card.selected-service {
            background-color: $primary_color;
            color: $light_color;
            .service-name {
              display: block;
            }
          }
          .service-card:hover span.service-name {
            display: inline-block;
            transition: display 3.5s;
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
  position: fixed;
  z-index: 3;
}
</style>
