import { createRouter, createWebHistory } from "vue-router";

// import pages

import AllApartments from "../src/components/pages/AllApartments.vue";
import HomePage from "../src/components/pages/HomePage.vue";
import AppSearch from "../src/components/pages/AppSearch.vue";

// creazione routes

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  LinkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/apartments",
      name: "AllApartments",
      component: AllApartments,
    },

    {
      path: "/AppSearch",
      name: "SearchApartments",
      component: AppSearch,
    },
  ],
});

// export router

export { router };
