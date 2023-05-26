<script>
import AppCard from "../Main/AppCard.vue";
import Loader from "./Loader.vue";
import axios from "axios";

// STORE
import { store } from "../../data/store.js";

export default {
  name: "HomePage",

  components: {
    AppCard,
    Loader,
  },

  data() {
    return {
      sponsoredApartments: [],
      store,
      isLoading: false,
    };
  },

  methods: {
    searchAdress() {
      axios.get("http://127.0.0.1:8000/api/apartments", {
        params: {
          adress: this.address,
          name: this.title,
        },
      });
    },

    // Recupero appartamenti sponsorizzati
    fetchSponsoredApartments() {
      (this.isLoading = true),
        axios
          .get(store.sponsoredApartmentsUrl)
          .then((response) => {
            console.log(response.data.apartments);
            this.sponsoredApartments = response.data.apartments.data;
          })
          .finally(() => {
            // Stoppo caricamento pagina
            this.isLoading = false;
          });
    },
  },

  created() {
    this.fetchSponsoredApartments();
  },
};
</script>

<template>
  <main>
    <div class="jumbotron margin-fix">
      <!-- inizio jumbotron -->
      <div class="container h-100 position-relative d-flex justify-content-center align-items-center">
        <!-- inizio container -->

        <!-- <div>
          <h1 class="title-main d-flex justify-content-center text-white">
            Benvenuto su BoolBnB
          </h1>
          <p class="d-flex justify-content-center text-white desc-main">
            Affitta Appartamenti in tutta Italia
          </p>
        </div> -->

        <div class="my-card">
          <h5 class="text-center mb-0">Benvenuto su BoolBnB</h5>
          <span class="text-muted"> Cerca la soluzione migliore per te </span>
          <!-- BUTTON -->
          <div class="my-button-container mt-3">
            <form submit.prevent class="text-center d-flex justify-content-center">
              <router-link :to="{ name: 'AllApartments' }" class="btn btn-primary mx-2" type="submit">
                <span class="btn-icon">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" aria-hidden="true" />
                </span>
                <span class="btn-text ms-2">Scopri di più</span>
              </router-link>
            </form>
          </div>
        </div>
        <!-- fine container -->
      </div>
      <!-- fine jumbotron -->
    </div>

    <!-- Sezione In Evidenza -->
    <div class="container pt-4">
      <h1 class="d-flex justify-content-center py-3">In Evidenza</h1>

      <Loader v-if="isLoading" />

      <div v-else-if="sponsoredApartments.length > 0 && !isLoading"
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 py-5">
        <AppCard v-for="apartment in sponsoredApartments" :key="apartment.id" :apartment="apartment" class="col d-flex" />
      </div>

      <div v-else-if="!isLoading" class="text-center">
        <h2>Non ci sono appartamenti in evidenza.</h2>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;

.margin-fix {
  margin-top: 106px;
}

.jumbotron {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./src/assets/images/jumbo-classico.jpg");
  background-position: center;
  height: 540px;
}

main {
  padding-top: 2px;
}

.title-main {
  font-size: 60px;
}

.desc-main {
  font-size: 30px;
  padding-top: 10px;
}

.linkSearch {
  font-size: 20px;
}

.wrapper {
  top: 105%;
}

// EFFETTO HOVER BUTTON JUMBOTRON
.my-card {
  padding: 2rem;
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  bottom: -4rem;

  .btn {
    position: relative;
    display: inline-block;
    padding: 15px;
    background-color: $primary_color;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    color: #fff;
    border-radius: 25px;
    -webkit-transition: width 1s;
    transition: 1s;

    &:hover {
      background-color: $main_color;
    }
  }

  .btn .btn-text {
    max-width: 0;
    display: inline-block;
    -webkit-transition: color 0.25s 1.5s, max-width 2s;
    transition: color 0.25s 1.5s, max-width 2s;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    color: $secondary_color;
    animation-fill-mode: forwards;
    animation-name: stretch;
    animation-duration: 4s;
    animation-delay: 400ms;
  }

  @keyframes stretch {
    100% {
      max-width: 300px;
      color: white;
    }
  }
}

// MEDIA QUERY
@media screen and (min-width: 0) {
  .my-card {
    right: 3rem;
  }

  .container {
    h1.d-flex {
      margin-top: 3rem;
    }
  }
}

@media screen and (min-width: 575px) {
  .my-card {
    right: 0;
  }
}

@media screen and (min-width: 767px) {
  .container {
    h1.d-flex {
      margin-top: 2rem;
    }
  }
}
</style>
