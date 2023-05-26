<script></script>

<template>
  <footer class="text-center text-lg-start">
    <!-- Section: Links  -->
    <section class="py-1">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>BoolBnB S.p.a.
            </h6>
            <p>
              Per maggiori informazioni consultare i nostri link di riferimento
            </p>
          </div>
          <!-- Grid column -->

          <!-- STACK -->
          <div id="stack_list" class="col-md-5 col-lg-5 col-xl-4 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase text-center fw-bold mb-4">Stack</h6>

            <div class="row text-center">
              <div class="col-4 mb-4 mb-md-0">
                <a href="https://getbootstrap.com/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                </a>
              </div>

              <div class="col-4 mb-4 mb-md-0">
                <a href="https://vuejs.org/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'vuejs']" />
                </a>
              </div>

              <!-- <div class="col-4 mb-4 mb-md-0">
              <a href="https://vitejs.dev/" target="_blank" class="">Vite</a>
            </div> -->

              <div class="col-4 mb-4 mb-md-0">
                <a href="https://laravel.com/" target="_blank">
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                </a>
              </div>
            </div>
          </div>

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Developers <Span class=""></Span>
            </h6>

            <div class="pb-3">
              <a href="https://github.com/SimoneMarino30" target="_blank" class="">Simone Marino</a>
            </div>

            <div class="pb-3">
              <a href="https://github.com/GiuliaGlave" target="_blank" class="">Giulia Glave</a>
            </div>

            <div class="pb-3">
              <a href="https://github.com/Gianmarco-Leone" target="_blank" class="">Gianmarco Leone</a>
            </div>

            <div class="pb-3">
              <a href="https://github.com/MichelepioBombai" target="_blank" class="">Michele Pio Bombai</a>
            </div>

            <div class="pb-3">
              <a href="https://github.com/CarloColletti?tab=repositories" target="_blank" class="">Carlo Colletti</a>
            </div>
          </div>
          <!-- Grid column -->

          <!--  -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4 copyright-banner">
      © 2023 Copyright: <span class="fw-bold">BoolBnB.com</span>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;

footer {
  @include link_hover;

  #stack_list {
    a {
      font-size: 2rem;
    }
  }
}
</style>
