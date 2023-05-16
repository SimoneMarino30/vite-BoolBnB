import { createRouter, createWebHistory } from "vue-router";

// import pages

import AllApartments from "../src/components/pages/AllApartments.vue";
import HomePage from "../src/components/pages/HomePage.vue";

// creazione routes

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  LinkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "home",
      components: HomePage,
    },

    {
      path: "/apartments",
      name: "AllApartments",
      components: AllApartments,
    },
  ],
});

// export router

export { router };
