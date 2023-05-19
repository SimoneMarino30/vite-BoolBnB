<script>
export default {
  props: {
    apartment: Object,
  },
};
</script>
<template>
  <!-- init card -->
  <div class="">
    <div class="py-3 d-flex justify-content-center w-100">
      <router-link :to="{
        name: 'AppDetail',
        params: {
          slug: apartment.slug,
        },
      }" :apartment="apartment" class="text-reset w-100">
        <!-- card container  -->
        <div class="card-box px-3 py-3 text-center rounded-4">
          <!-- title appartment  -->
          <h2 class="fw-semibolder fs-4">{{ apartment.title }}</h2>
          <!-- image appartment  -->
          <div class="image image-card rounded-4">
            <img :src="apartment.image" class="image-frame rounded-4" alt="#" />
          </div>
          <!-- detail container  -->
          <div class="details mb-3 rounded-2">
            <h2 class="py-1">{{ apartment.address }}</h2>
            <p>
              {{ apartment.beds }} <font-awesome-icon icon="fa-solid fa-bed" />
              -
              {{ apartment.rooms }}
              <font-awesome-icon icon="fa-solid fa-house" />
              -
              {{ apartment.mq }}mq
            </p>
          </div>
          <h2 class="fs-4">€ {{ apartment.price }}</h2>
          <!-- end deatil  -->
        </div>
        <!-- end container  -->
      </router-link>
    </div>
    <!-- end card  -->
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:200,400|Playfair+Display");

.card-box {
  background-color: #F1F1F1;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);

  h2 {
    font-family: "Playfair Display";
    color: #333;
  }

  .image {
    position: relative;
    z-index: 2;
    width: 85%;
    height: 250px;
    margin: 0 auto -10rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
    transition: all ease-in 0.15s;
  }

  .image-frame {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .details {
    width: 95%;
    margin: 0 auto;
    padding-top: 10.5rem;
    padding-bottom: 1rem;
    background-color: #FFEBC8;
    color: #333;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
    transition: all ease-in 0.15s;

    h2 {
      font-family: "Playfair Display";
      font-size: 1rem;
    }

    p {
      font-family: sans-serif;
      font-size: 1rem;
      font-weight: 200;
    }
  }

  .card-box:hover .details {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 5px rgba(0, 0, 0, 0.22);
    transform: translate(0px, -2px) scale(1.01);
  }

  .card-box:hover .image {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translate(0px, -3px) scale(1.02);
  }
}
</style>
