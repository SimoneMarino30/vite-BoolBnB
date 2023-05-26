import { createRouter, createWebHistory } from "vue-router";
// import pages
import AllApartments from "../src/components/pages/AllApartments.vue";
import HomePage from "../src/components/pages/HomePage.vue";
import AppSearch from "../src/components/pages/AppSearch.vue";
import AppDetail from "../src/components/Main/AppDetail.vue";
import Login from "./components/pages/Login.vue";
import ChiSiamo from "../src/components/pages/ChiSiamo.vue";

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
      path: "/login",
      name: "login",
      component: Login,
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
    {
      path: "/AppDetail/:slug",
      name: "AppDetail",
      component: AppDetail,
    },
    {
      path: "/ChiSiamo",
      name: "ChiSiamo",
      component: ChiSiamo,
    },
  ],
});
// export router
export { router };
