<script>
import axios from "axios";
import AppList from "../Main/AppList.vue";
export default {
  data() {
    return {
      apartments: {
        list: [],
        pages: [],
      },
    };
  },

  components: { AppList },

  emits: ["changePage"],

  methods: {
    fetchApartments(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/apartments";

      axios.get(endpoint).then((response) => {
        this.apartments.list = response.data.data;
        this.apartments.pages = response.data.links;
      });
    },
  },

  created() {
    this.fetchApartments();
  },
};
</script>

<template>
  <AppList
    :apartments="apartments.list"
    :pages="apartments.pages"
    @changePage="fetchApartments"
  />
</template>

<style></style>
