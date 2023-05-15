<script></script>

<template>
  <!-- container da togliere forse  -->
  <div class="container">
    <div class="row row-cols-1  row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 py-5">

      <!-- init card -->
      <div class="col px-3 py-3 card-settings" v-for="n in 15">
        <a href="#" class="text-reset">
          <!-- card container  -->
          <div class="card-back py-3 px-3 rounded-4">
  
            <!-- image card  -->
            <div class="card-image-size">
              <img src="../../assets/images/house-10b.jpg" class="img-fluid rounded-4" alt="#">
            </div>
  
            <!-- data appartments  -->
            <div class="d-flex flex-column py-2">
              <!-- name appartment  -->
              <h5 class="fs-2">La Ventana</h5>
              <!-- address appartment  -->
              <span class="pb-2">via dei Fori Imperiali, 1</span>
              <!-- price -->
              <div class="pb-2">
                <span>330</span>
                <span> € a notte</span>
              </div>
              <!-- mq  -->
              <div class="pb-2">
                <span>220</span>
                <span> mq</span>
              </div>
            </div>
          </div>
          <!-- end card container  -->

        </a>

      </div>
      <!-- end card  -->
  
    </div>
  </div>
  <!-- container da togliere forse  -->

</template>

<style lang="scss" scoped>

</style>
