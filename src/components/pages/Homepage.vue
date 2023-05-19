<script>
import SearchBar from "../Main/SearchBar.vue";
import AppCard from '../Main/AppCard.vue';

export default {
  name: "HomePage",

  components: {
    AppCard,
    SearchBar
  },

  data() {
    return {

      // Appartamento creato ora come obj statico, da aggiornare quando avremo chiamata API per appartamenti sponsorizzati
      apartment: {
        title: 'Appartamento sponsorizzato',
        image: 'https://www.centrostoricoimmobiliare.it/vendor/paginesi/custom_sdk/src/php_classes/placeholder_immobiliari.jpg',
        address: 'Via con la sponsorizzazione, 1',
        beds: 2,
        rooms: 1,
        price: 68,
        mq: 70,
        slug: 'prova'
      }
    }
  }

  // Si potrebbe fare nei methods una chiamata per ricevere gli appartamenti sponsorizzati così da visualizzarli nella sezione in evidenza
};
</script>

<template>
  <main>
    <div class="jumbotron">
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
            <div class="text-center">
              <SearchBar />
              <!-- button per la searchBar -->
              <!--  <button class="btn btn-primary">
                <a
                  href="AppSearch"
                  class="linkSearch text-center text-white"
                >
                  Cerca un Appartamento
                </a>
              </button> -->
            </div>
          </div>
        </div>
        <!-- fine container -->
      </div>
      <!-- fine jumbotron -->
    </div>

    <!-- Sezione In Evidenza -->
    <div class="container pt-4">
      <h1 class="d-flex justify-content-center py-3">In Evidenza</h1>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 py-5">
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
        <AppCard :apartment="apartment" class="col d-flex" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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
