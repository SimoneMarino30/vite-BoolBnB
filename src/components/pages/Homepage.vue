<script>
export default {
  name: "HomePage",
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
              <!-- button per la searchBar -->
              <button class="btn btn-primary">
                <a href="AppSearch" class="linkSearch text-center text-white">
                  Cerca un Appartamento
                </a>
              </button>
            </div>
          </div>
        </div>
        <!-- fine container -->
      </div>
      <!-- fine jumbotron -->
    </div>
    <div class="container">
      <h1 class="d-flex justify-content-center py-3">In Evidenza</h1>
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
