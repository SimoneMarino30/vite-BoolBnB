<script>
import axios from "axios";
// Componenti
import AppCard from "./AppCard.vue";
import AppForm from "./AppForm.vue";
import MapPage from "../pages/MapPage.vue";
export default {
  name: "AppDetail",
  data() {
    return {
      apartment: null,
    };
  },
  created() {
    console.log(this.$route.params.slug);
    axios
      .get(`http://127.0.0.1:8000/api/apartments/${this.$route.params.slug}`)
      .then((response) => {
        this.apartment = response.data;
      });
  },
  components: { AppCard, AppForm, MapPage },
};
</script>
<template>
  <!-- <AppCard v-if="apartment" :apartment="apartment" /> -->
  <div class="container detail-appartment py-2 px-5 my-4 rounded-4">
    <div class="row py-3">
      <h2>{{ apartment.title }}</h2>
      <div class="col-12 pt-3">
        <!-- image appartment  -->
        <div class="appartment-image-frame rounded-4">
          <img :src="apartment.image" class="image-appartment rounded-4" alt="#" />
        </div>
      </div>
    </div>
    <!-- detail  -->
    <div class="row">
      <div class="col-12 col-lg-8 d-flex flex-column py-3 pe-5">
        <div class="pb-2">
          <h2 class="fw-semibold">{{ apartment.address }}</h2>
        </div>
        <div class="border-bottom border-secondary">
          <ul class="fix-list d-flex flex-row">
            <li>
              {{ apartment.rooms }}
              <span v-if="apartment.rooms < 2"> Camera</span>
              <span v-else>Camere</span>
            </li>
            <li>
              {{ apartment.beds }}
              <span v-if="apartment.beds < 2"> Letto</span>
              <span v-else>Letti</span>
            </li>
            <li>
              {{ apartment.bathrooms }}
              <span v-if="apartment.bathrooms < 2"> Bagno</span>
              <span v-else>Bagni</span>
            </li>
            <li>
              {{ apartment.mq }} <span>Mq</span>
            </li>
          </ul>
        </div>
        <!-- description appartment  -->
        <div class="pt-3 pb-1 border-bottom border-secondary">
          <h3 class="title-section">Descrizione dell'appartamento:</h3>
          <p class="fs-5">
            {{ apartment.description }}
          </p>
        </div>
        <!-- service  -->
        <div class="pt-3 pb-4 border-bottom border-secondary">
          <h3 class="title-section pb-2">Servizi presenti:</h3>
          <div class="">
            <!-- <ul class="d-flex flex-row flex-wrap p-0">
              <li class="py-2 px-3 m-2 service-card rounded-5" v-for="service in apartment.services" :key="service.id">
                <span><font-awesome-icon :icon="service.icon" /></span>
                <span class="service-name ms-2">{{ service.name }}</span>
              </li>
            </ul> -->
            <div class="container">
              <div class="row p-0">
                <div class="col-12 col-sm-11 col-md-5 col-lg-5 col-xl-3  service-card rounded-5 py-2 px-3 my-2 mx-2" v-for="service in apartment.services" :key="service.id">
                  <span><font-awesome-icon :icon="service.icon" /></span>
                  <span class="service-name ms-2">{{ service.name }}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <!-- end detail  -->
      <!-- init form  -->
      <div class="col-12 col-lg-4 my-4">
        <AppForm :apartment_id="apartment.id" />
      </div>
      <!-- end form  -->
    </div>
  </div>
  <!-- end container  -->

  <!-- map container -->
    <div class="container  detail-appartment py-2 px-5 my-4 rounded-4">
      <div class="row">
        <div class="col-12 py-5">
          <h2 class="pb-3">Noi Siamo qui</h2>
            <MapPage 
            :lat="apartment.latitude"
            :lon="apartment.longitude"/>
        </div>
      </div>
    </div>
  <!-- end map container -->

</template>
<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;

// appartment detail ****************************
.detail-appartment {
  background-color: #F1F1F1;
  color: $dark_color;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin: 18rem auto;

  .appartment-image-frame {
    // background-image: url(../../assets/images/house-10b.jpg);
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;
    height: 450px;
    box-shadow: 3px 8px 10px rgba(0, 0, 0, 0.5);
    width: 100%;

    .image-appartment {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .fix-list {
    padding-left: 0;

    li {
      font-size: 1.2rem;
      padding: 0 0.9rem 0 0;
    }
  }

  .service-card {
    color: white;
    background-color: $dark_color;
    font-size: 0.90rem;
    

    .service-name {
      // display: none;
      
    }
  }

  .service-card:hover span.service-name {
    // display: inline-block;
  }

  .title-section{
    font-weight: 600;
  }
  
}

</style>