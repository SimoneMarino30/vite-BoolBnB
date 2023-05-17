<script>
export default {
  name: "AppartmentDetail",
  data(){
    return {
      appartments: {
                id : 5,
                user_id : 1,
                title : 'Design Loft Virgil',
                description : 'Appartamento in stile loft con interni moderni e dettagli di design. Dispone di una grande area living con cucina a vista e soppalco con la zona notte.',
                rooms : 2,
                beds : 2,
                bathrooms : 1,
                mq : 50,
                address : 'via dei Fori Imperiali, 1',
                latitude : '41.894939',
                longitude : '12.484137',
                price : 140,
                image : 'house-9b.jpg',
                slug : 'design-loft-virgil',
                visibility : 1,
                services : [
                    {
                      id : 1,
                      name : 'Wifi',
                      icon : 'fa-solid fa-wifi',
                        
                    },
                    {
                      id: 2,
                      name: 'Parcheggio',
                      icon: 'fa-solid fa-square-parking',
                    },
                    {
                      id: 3,
                      name: 'Piscina',
                      icon: 'fa-solid fa-person-swimming',
                    },
                    {
                      id: 4,
                      name: 'Portineria',
                      icon: 'fa-solid fa-bell-concierge',
                    },
                    {
                      id: 5,
                      name: 'Sauna',
                      icon: 'fa-solid fa-spa',
                    },
                    {
                      id: 6,
                      name: 'Vista mare',
                      icon: 'fa-solid fa-water',
                    },
                    {
                      id: 7,
                      name: 'Tv',
                      icon: 'fa-solid fa-tv',
                    },
                    {
                      id: 8,
                      name: 'Riscaldamento',
                      icon: 'fa-solid fa-temperature-low ',
                    },
                    {
                      id: 9,
                      name: 'Ariacondizionata',
                      icon: 'fa-solid fa-fan',
                    },
                    {
                      id: 10,
                      name: 'Bagno privato',
                      icon: 'fa-solid fa-toilet',
                    },
                    {
                      id: 11,
                      name: 'Colazione inclusa',
                      icon: 'fa-solid fa-mug-hot',
                    },
                    {
                      id: 12,
                      name: 'Vista panoramica',
                      icon: 'fa-solid fa-mountain-sun',
                    },
                    {
                      id: 13,
                      name: 'Cucina',
                      icon: 'fa-solid fa-fire-burner',
                    },
                    {
                      id: 14,
                      name: 'Lavatrice',
                      icon: 'fa-solid fa-soap',
                    },
                    {
                      id: 15,
                      name: 'Asciugacapelli',
                      icon: 'fa-solid fa-wind',
                    },
                    {
                      id: 16,
                      name: 'Idromassaggio',
                      icon: 'fa-solid fa-hot-tub-person',
                    },
                    {
                      id: 17,
                      name: 'Domotica',
                      icon: 'fa-solid fa-robot',
                    },
                    {
                      id: 18,
                      name: 'Barbeque',
                      icon: 'fa-solid fa-stroopwafel',
                    },
                    {
                      id: 19,
                      name: 'Giardino',
                      icon: 'fa-solid fa-tree',
                    },
                    {
                      id: 20,
                      name: 'Culla',
                      icon: 'fa-solid fa-baby-carriage',
                    },
                    {
                      id: 21,
                      name: 'Ferro da stiro',
                      icon: 'fa-solid fa-shirt',
                    },
                    {
                      id: 22,
                      name: 'Set di cortesi',
                      icon: 'fa-solid fa-spray-can-sparkles',
                    },
                    {
                      id: 23,
                      name: 'Camino',
                      icon: 'fa-solid fa-fire',
                    },
                    {
                      id: 24,
                      name: 'Acessibilità',
                      icon: 'fa-solid fa-wheelchair-move',
                    }
                ]
            },
    }
  },
   
};
</script>

<template>
  <!-- init container  -->
  <div class="container detail-appartment py-2 px-5 my-4 rounded-4">

    <div class="row py-3">
      <h2>{{ appartments.title }}</h2>
      <span class="fw-bold">{{ appartments.mq }} mq</span>
      <div class="col-12 pt-3">

        <!-- image appartment  -->
        <div class="appartment-image rounded-4">  
        </div>

      </div>
    </div>

    <!-- detail  -->
    <div class="row">
      <div class="col-8 d-flex flex-column py-3 pe-5">
        <h3>Proprietario: Iginio Massari</h3>
        <div class="pb-2">
          <span>Indirizzo: </span>
          <span>{{ appartments.address }}</span>
        </div>
        <div class="border-bottom border-secondary">
          <ul class="fix-list d-flex flex-row">
            <li>
              {{ appartments.rooms }}
              <span v-if="appartments.rooms < 2"> Camera</span>
              <span v-else>Camere</span>
            </li>
            <li>
              {{ appartments.beds }}
              <span v-if="appartments.beds < 2"> Letto</span>
              <span v-else>Letti</span>
            </li>
            <li>
              {{ appartments.bathrooms }}
              <span v-if="appartments.bathrooms < 2"> Bagno</span>
              <span v-else>Bagni</span>
            </li>
          </ul>
        </div>

        <!-- description appartment  -->
        <div class="pt-3 pb-1 border-bottom border-secondary">
          <h3>
            Descrizione dell'appartamento:
          </h3>
          <p>
            {{ appartments.description }}
          </p>
        </div>

        <!-- service  -->
        <div class="pt-3 pb-1 border-bottom border-secondary">
          <h3>
            Servizi presenti:
          </h3>

          <div>
            <ul class="d-flex flex-row flex-wrap p-0">
              <li class="py-2 px-3 m-2 service-card rounded-4 " v-for="service in appartments.services" :key="service.id">
                <span><font-awesome-icon :icon="service.icon" /> : </span>
                <span>{{ service.name }}</span>
              </li>
            </ul>
          </div>

        </div>


      </div>
      <!-- end detail  -->

      <!-- init form  -->
      <div class="col-4 my-4">
        <div class="form-box d-flex flex-column p-2 rounded-4">
          <div class="box">
            <div class="message-box shadow-lg p-4 rounded-4">

              <!-- form detail  -->
              <form>
                <div class="modal-body">
                  <div class="my-4">
                    <h5 class="text-center fw-bold color-primary">
                      Vuoi più informazioni?
                    </h5>
                  </div>
        
                  <div class="mb-3">
                    <label for="name" class="pb-2">Nome</label>
                    <input type="text" id="name" class="form-control" minlength="3" maxlength="50" required />
                  </div>
                  <div class="mb-3">
                    <label for="surname" class="pb-2">Cognome</label>
                    <input type="text" id="surname" class="form-control" minlength="3" maxlength="50" required />
                  </div>
        
                  <div class="mb-3">
                    <label for="email" class="pb-2">Email</label>
                    <input type="email" id="email" class="form-control" minlength="5" maxlength="255" required />
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="pb-2">Oggetto</label>
                    <input type="text" id="subject" class="form-control" minlength="3" maxlength="70" required />
                  </div>
                  <div class="mb-3">
                    <label for="text" class="pb-2">Messaggio</label>
                    <textarea id="text" class="form-control" minlength="4" maxlength="4096" required></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn my-btn-primary rounded-5 mt-2 fw-bold">
                    Contatta il proprietario
                  </button>
                </div>
              </form>
              <!-- end form detail  -->

            </div>
          </div>


        </div>
      </div>
      <!-- end form  -->

    </div>

  </div>
  <!-- end container  -->

</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;

// appartment detail ****************************
.detail-appartment{
  background-color: #f1f1f1;
  color: $dark_color;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
  .appartment-image{
    background-image: url(../../assets/images/house-10b.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 450px;
    box-shadow: 3px 8px 10px rgba(0, 0, 0, 0.50);
    
  }

  .fix-list{
    padding-left: 0;
    li{
      padding: 0 0.9rem 0 0;
    }
  }

  .service-card{
    color: white;
    background-color: $dark_color;
    
  }
}

// form box ************************************
.form-box{
  background-color: $dark_accent_color;
  .message-box {
  background-color: #f1f1f1;
    .form-control:focus {
      outline: none;
      box-shadow: none;
    }

    input:focus,
    textarea:focus {
      border-color: green;
    }

    .my-btn-primary {
      background-color: $success_color;
      color: white;
    }

  }

}
</style>
