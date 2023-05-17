<script>
export default {
  props: {
    apartment: Object,
  },
};
</script>

<template>
  <li>
    <!-- init card -->
    <div>
      <div class="px-3 py-3 card-settings">
        <router-link :to="{ name: 'AppartmentDetail' }" :apartment="apartment" class="text-reset">
          <!-- card container  -->
          <div class="card-back py-3 px-3 rounded-4">
            <!-- image card  -->
            <div class="card-image-size">
              <img
                src="../../assets/images/house-10b.jpg"
                class="img-fluid rounded-4"
                alt="#"
              />
            </div>

            <!-- data appartments  -->
            <div class="d-flex flex-column py-2">
              <!-- name appartment  -->
              <h5 class="fs-2">{{ apartment.title }}</h5>
              <!-- address appartment  -->
              <span class="pb-2">{{ apartment.address }}</span>
              <!-- price -->
              <div class="pb-2">
                <span>{{ apartment.price }}</span>
                <span> € a notte</span>
              </div>
              <!-- mq  -->
              <div class="pb-2">
                <span>{{ apartment.mq }}</span>
                <span> mq</span>
              </div>
            </div>
          </div>
          <!-- end card container  -->
        </router-link>
      </div>

      <!-- end card  -->
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
}

.card-back {
  height: 370px;
}
</style>
