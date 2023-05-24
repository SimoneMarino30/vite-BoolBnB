<script>
import AppCard from "./AppCard.vue";

export default {
  props: {
    apartments: Array,
    // pages: Array,
  },

  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <div
      v-if="apartments.length"
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 py-5"
    >
      <AppCard
        v-for="apartment in apartments"
        :key="apartment.id"
        :apartment="apartment"
        class="col d-flex"
      />
    </div>

    <!-- <nav aria-label="Apartments pagination">
      <ul class="pagination">
        <li v-for="page in pages" class="page-item">
          <button
            type="button"
            class="page-link"
            @click="$emit('changePage', page.url)"
            :class="{
              disabled: !page.url,
              active: page.active,
            }"
            v-html="page.label"
          ></button>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<style lang="scss" scoped></style>
