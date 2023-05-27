<script>
export default {
  name: "AppWhoWeAre",

  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <!-- Inizio Container -->
    <div class="container">
      <!-- Inizio Row -->
      <div class="row justify-content-md-center">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="img1">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFEiyYs1qZAFA/profile-displayphoto-shrink_800_800/0/1683387668985?e=1690416000&v=beta&t=_NdOc9IXPHt2N1Hjhfe9H78HuWfowROZCqUcQmdmaeY"
                alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">Michele Pio Bombai</h4>
              <p class="card-text text-center">
                Da sempre appassionato di Tecnologia, Videogiochi e
                Programmazione. <br />
                Proprio quest'ultima ho deciso di coltivarla e trasformarla
                nella mia professione portandomi oggi a diventare Jr Full Stack
                Developer. Impaziente di lavorare su nuovi progetti e ampliare
                le mie conoscenze
              </p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="https://www.linkedin.com/in/michele-pio-bombai-071348275" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="me-3" />
                </a>
                <a href="https://github.com/MichelePioBombai" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 responsive">
          <div class="card h-100">
            <div class="img1">
              <img src="" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">Carlo Colletti</h4>
              <p class="card-text text-center"></p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="https://www.linkedin.com/in/michele-pio-bombai-071348275" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="me-3" />
                </a>
                <a href="https://github.com/CarloColletti?tab=repositories" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 responsive medium">
          <div class="card h-100">
            <div class="img1">
              <img src="" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">Simone Marino</h4>
              <p class="card-text text-center"></p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="https://www.linkedin.com/in/michele-pio-bombai-071348275" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="me-3" />
                </a>
                <a href="https://github.com/SimoneMarino30" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fine Row -->

      <!-- Inzio Row -->
      <div class="row justify-content-md-center mt-4">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="img1">
              <img src="" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">Giulia Glave</h4>
              <p class="card-text text-center"></p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="https://www.linkedin.com/in/michele-pio-bombai-071348275" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="me-3" />
                </a>
                <a href="https://github.com/GiuliaGlave" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 responsive">
          <div class="card h-100">
            <div class="img1">
              <img src="../../assets/images/gl.jpeg" />
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">Gianmarco Leone</h4>
              <p class="card-text text-center">
                Sono un appassionato di tecnologia e programmazione fin da bambino. L'emozione di creare codice e
                sperimentare nuove soluzioni è il mio carburante. Sono affascinato dall'evoluzione digitale e non vedo
                l'ora di continuare a imparare e crescere in questo affascinante mondo.
              </p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="https://www.linkedin.com/in/gianmarco-leone-843745212/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="me-3" />
                </a>
                <a href="https://github.com/Gianmarco-Leone" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fine Row -->

      <!-- Fine Container -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 14rem;
}

.card {
  border-radius: 15px;
  color: #907160;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
}

.row {
  padding-bottom: 5rem;
}

.img1 img {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-top: -60px;
  border: 7px solid #907160;
  object-fit: cover;
}

i {
  color: #907160;
  font-size: 15px;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .responsive {
    margin-top: 90px;
  }
}

@media screen and (max-width: 991px) {
  .medium {
    margin-top: 6rem;
  }
}
</style>
