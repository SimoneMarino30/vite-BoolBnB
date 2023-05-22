<script>
import SearchBar from "../Main/SearchBar.vue";
import AppCard from "../Main/AppCard.vue";
import axios from "axios";

export default {
  name: "HomePage",

  components: {
    AppCard,
    SearchBar,
  },

  data() {
    return {
      // Appartamento creato ora come obj statico, da aggiornare quando avremo chiamata API per appartamenti sponsorizzati
      apartment: {
        title: "Appartamento sponsorizzato",
        image:
          "https://www.centrostoricoimmobiliare.it/vendor/paginesi/custom_sdk/src/php_classes/placeholder_immobiliari.jpg",
        address: "Via con la sponsorizzazione, 1",
        beds: 2,
        rooms: 1,
        price: 68,
        mq: 70,
        slug: "prova",
      },
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
  },
};
</script>

<template>
  <main>
    <div class="jumbotron margin-fix">
      <!-- inizio jumbotron -->
      <div class="container h-100">
        <!-- inizio container -->
        <div class="row h-50 d-flex align-items-center">
          <div class="col">
            <!-- main-title -->
            <h1 class="title-main d-flex justify-content-center text-white">
              Benvenuto su BoolBnB
            </h1>
            <!-- piccola descrizione -->
            <p class="d-flex justify-content-center text-white desc-main">
              Affitta Appartamenti in tutta Italia
            </p>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col h-25 d-flex justify-content-center">
            <form submit.prevent class="text-center d-flex">
              <!-- button per la searchBar -->
              <input
                class="form-control"
                type="search"
                :placeholder="placeholder"
                aria-label="Search"
                v-model="wordSearched"
              />
              <router-link
                :to="{ name: 'AllApartments' }"
                class="btn btn-primary mx-2"
                type="submit"
              >
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
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

      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 py-5"
      >
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

.margin-fix{
  margin-top: 106px;

}

.jumbotron {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./src/assets/images/jumbo2.png");
  background-position: center;
  height: 450px;
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
</style>
