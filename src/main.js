import { createApp } from "vue";
// import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

// FONT AWESOME

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/*  import font awesome icon component  */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/*  import specific icons */

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

/brands/;
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/services/;
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import { faFireBurner } from "@fortawesome/free-solid-svg-icons";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faGlobe, faFilter, faLocationDot, faMagnifyingGlass, faEye);
/brands/;
library.add(faFacebook, faInstagram, faTwitter, faGoogle, faGithub);
/services/;
library.add(
  faWifi,
  faSquareParking,
  faPersonSwimming,
  faBellConcierge,
  faSpa,
  faWater,
  faTv,
  faTemperatureLow,
  faFan,
  faToilet,
  faMugHot,
  faMountainSun,
  faFireBurner,
  faSoap,
  faMugHot,
  faWind,
  faSprayCan,
  faRobot,
  faStroopwafel,
  faTree,
  faBabyCarriage,
  faShirt,
  faSprayCanSparkles,
  faFire
);

/string syntax/;
/*  <font-awesome-icon icon="fa-solid fa-filter" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <font-awesome-icon icon="fa-solid fa-location-dot" />
    <font-awesome-icon icon="fa-solid fa-eye" />
    <div>
      <font-awesome-icon icon="fa-solid fa-square-parking" />
      <font-awesome-icon icon="fa-solid fa-wifi" />
      <font-awesome-icon icon="fa-solid fa-bell-concierge" />
      <font-awesome-icon icon="fa-solid fa-spa" />
      <font-awesome-icon icon="fa-solid fa-person-swimming" />
      <font-awesome-icon icon="fa-solid fa-water" />
      <font-awesome-icon icon="fa-solid fa-tv" />
      <font-awesome-icon icon="fa-solid fa-fan" />
      <font-awesome-icon icon="fa-solid fa-temperature-low" />
      <font-awesome-icon icon="fa-solid fa-toilet" />
      <font-awesome-icon icon="fa-solid fa-mug-hot" />
      <font-awesome-icon icon="fa-solid fa-mountain-sun" />
      <font-awesome-icon icon="fa-solid fa-fire-burner" />
      <font-awesome-icon icon="fa-solid fa-soap" />
      <font-awesome-icon icon="fa-solid fa-hot-tub-person" />
      <font-awesome-icon icon="fa-solid fa-wind" />
      <font-awesome-icon icon="fa-solid fa-robot" />
      <font-awesome-icon icon="fa-solid fa-stroopwafel" />
      <font-awesome-icon icon="fa-solid fa-tree" />
      <font-awesome-icon icon="fa-solid fa-baby-carriage" />
      <font-awesome-icon icon="fa-solid fa-shirt" />
      <font-awesome-icon icon="fa-solid fa-spray-can-sparkles" />
      <font-awesome-icon icon="fa-solid fa-fire" />
    </div> */

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

// app.use(router);
app.mount("#app");
