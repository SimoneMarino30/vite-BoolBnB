<script>
import axios from "axios";

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
      services: [],
      servicesWithNames: [],
      requiredServices: [],

      /* slider */
      currentMinPrice: null,
      currentMaxPrice: null,
      currentDistance: null,
    };
  },

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
            services: this.services,
          },
        })
        .then((response) => {
          this.allApartments = response.data.data;
          console.log("appartamenti totali", this.allApartments);

          // Stampa solo gli appartamenti che coincidono con i valori specificati
          const filteredApartments = this.allApartments.filter((apartment) => {
            return (
              //(this.name === null || apartment.name >= this.name) &&
              (this.beds === null || apartment.beds >= this.beds) &&
              (this.rooms === null || apartment.rooms >= this.rooms) &&
              (this.bathrooms === null ||
                apartment.bathrooms >= this.bathrooms) &&
              //dal prezz minimo
              (this.currentMinPrice === null ||
                apartment.price >= this.currentMinPrice) &&
              //al prezzo massimo
              (this.currentMaxPrice === null ||
                apartment.price <= this.currentMaxPrice)
              /*  //servizi selezionati
              this.requiredServices === null */
            );
          });

          console.log(
            "appartamenti filtrati",
            filteredApartments.map((apartment) => ({
              name: apartment.title,
              rooms: apartment.rooms,
              beds: apartment.beds,
              bathrooms: apartment.bathrooms,
              //VOGLIO STAMPARE I SERVIZI CHE HA QUESTO APPARTAMENTO
              services: apartment.services.map((service) => service.name), // Get an array of service names
            }))
          );
          // Aggiorna la lista degli appartamenti filtrati
          this.$emit("filterApartments", filteredApartments);
        });
    },

    //CHIAMA TUTTI SERVIZI DENTRO L'ASIDE
    fetchServices() {
      axios
        .get("http://127.0.0.1:8000/api/services", {
          params: {
            id: this.id,
            name: this.name,
            icon: this.icon,
          },
        })
        .then((response) => {
          this.allServices = response.data.services;
        });
    },
    //CERCA SERVIZI RICHIESTI
    requireServices() {
      axios
        .get("http://127.0.0.1:8000/api/services", {
          params: {
            id: this.id,
            name: this.name,
            icon: this.icon,
          },
        })
        .then((response) => {
          // Stampa tutti i servizi
          this.allServices = response.data.services;
          console.log("servizi totali", this.allServices);

          // Stampa solo i servizi con checkbox attiva
          const requiredServices = this.allServices.filter((service) => {
            return this.services.includes(service.id);
          });
          console.log(
            "servizi richiesti",
            requiredServices.map((service) => ({
              id: service.id,
              name: service.name,
            }))
          );
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
  <div class="main-container d-flex m-0">
    <div
      id="overlayFilters"
      class="overlay-container d-flex"
    >
      <!-- aside -->
      <aside class="px-sm-3 px-md-4 px-lg-5 py-5">
        <!-- SEARCH BAR -->
        <div class="searchBarContainer">
          <form
            class="d-flex"
            role="search"
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

        <!-- FORM -->
        <div class="filters-form">
          <!-- km range -->
          <div class="km-container mt-3 mb-0">
            <label
              for="km"
              class="fs-5"
              >Raggio</label
            >
            <div class="d-flex">
              <!-- displayed km -->
              <input
                class="form-control"
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
                class="rangeSliderDistance my-3"
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
            <label
              for="price"
              class="fs-5"
              >Prezzo</label
            >
            <div class="d-flex flex-row justify-content-between">
              <!-- min price-->
              <input
                class="form-control shorter-input"
                type="number"
                v-model.number="currentMinPrice"
                min="0"
                :max="currentMaxPrice - 1"
                placeholder="Min €"
              />
              <!--slide bar min price-->
              <input
                type="range"
                class="rangeSliderPrice mt-3"
                min="0"
                :max="currentMaxPrice"
                v-model="currentMinPrice"
              />
            </div>
            <div class="d-flex flex-row justify-content-between">
              <!-- max price -->
              <input
                class="form-control shorter-input"
                type="number"
                v-model.number="currentMaxPrice"
                :min="currentMinPrice + 1"
                max="1000"
                placeholder="Max €"
              />
              <!--slide bar max price-->
              <input
                type="range"
                class="rangeSliderPrice mt-3"
                :min="currentMinPrice"
                max="1000"
                v-model="currentMaxPrice"
              />
            </div>

            <!--    <div class="d-flex flex-row justify-content-between m-0">
              <p id="">0 €</p>
              <p id="">1000 €</p>
            </div> -->
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
              <ul class="d-flex flex-wrap">
                <li
                  v-for="service in allServices"
                  :key="service.id"
                >
                  <label
                    :class="[
                      'service-label  form-check px-3 justify-content-center',
                      { 'selected-service': services.includes(service.id) },
                    ]"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      :value="service.id"
                      v-model="services"
                    />
                    <div class="d-flex flex-row">
                      <div
                        class="service-icon d-flex flex-row align-items-center"
                      >
                        <span class="align-items-center"
                          ><font-awesome-icon :icon="service.icon"
                        /></span>
                        <div
                          class="service-name"
                          v-if="services.includes(service.id)"
                        >
                          <span class="ms-2">{{ service.name }}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          @click="searchApartmentsFilter(), requireServices()"
          class="btn btn-primary"
        >
          Filtra
        </button>
      </aside>
    </div>

    <!-- FILTER ICON -->
    <div>
      <button
        class="btn btn-primary filter mt-2"
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
      max-width: 30rem;
      height: 50rem;

      align-items: start;
      padding: 3rem 5rem;
      overflow-y: auto;

      div {
        display: flex;
        flex-direction: column;
      }

      .rangeSliderDistance,
      .rangeSliderPrice {
        -webkit-appearance: none;
        background: $dark_accent_color;
        height: 0.5rem;
        border-radius: 25px;
      }
      .rangeSliderPrice {
        width: 60%;
      }
      .rangeSliderDistance::-webkit-slider-thumb,
      .rangeSliderPrice::-webkit-slider-thumb {
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
          ul {
            width: 100%;
            margin: 0;
            padding: 0;
            gap: 1rem;
            li {
              height: 100%;
              width: auto;

              label {
                color: $light_color;
                border-radius: 50px;
                height: 3rem;
                //width: auto;
                //aspect-ratio: 1;
                background-color: $dark_color;
                position: relative;

                margin: 0;
                display: flex;

                //faccio sparire il checkbox brutto di default
                input[type="checkbox"] {
                  opacity: 0;
                  position: absolute;
                  bottom: 30%;
                  right: 25%;
                }
                &:hover {
                  background-color: $dark_accent_color;
                  color: $dark_color;
                }

                .service-icon {
                  justify-content: center;
                  align-items: center;
                }
              }
            }
          }

          .service-label.selected-service {
            background-color: $primary_color;
            color: $light_color;
            .service-name {
              display: block;
            }
          }
          .service-label:hover span.service-name {
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
