<script>
import axios from "axios";

// STORE
import { store } from "../../data/store.js";

// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "AppForm",

  props: {
    apartment_id: Number,
  },

  data() {
    return {
      store,
      message: {
        name: store.user_name != "" ? store.user_name : "",
        surname: store.user_surname != "" ? store.user_surname : "",
        email: store.user_email != "" ? store.user_email : "",
        text: "",
      },
      errors: [],
      success: false,
    };
  },

  methods: {
    sendMessage() {
      this.errors = [];
      this.success = false;
      const message = {
        apartment_id: this.apartment_id,
        name: this.message.name,
        surname: this.message.surname,
        email: this.message.email,
        text: this.message.text,
      };

      // Chiamata axios
      axios
        .post("http://127.0.0.1:8000/api/messages", message)
        .then((response) => {
          this.message.name = "";
          this.message.surname = "";
          this.message.email = "";
          this.message.text = "";
          this.success = true;
        })
        // METODO MIGLIORE MA CAPIRE COME PASSARE ID APPARTAMENTO
        // .post("http://127.0.0.1:8000/api/messages", this.message)
        // .then((response) => {
        //   this.success = true;
        //   this.message = {};
        // })
        .catch((error) => {
          const response_errors = error.response.data.errors;
          for (const field in response_errors) {
            this.errors.push(response_errors[field][0]);
          }
        });
    },
  },
};
</script>

<template>
  <!-- In caso di errore chiamata axios -->
  <div
    v-if="errors.length"
    class="alert alert-danger d-flex justify-content-between"
  >
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <!-- In caso di invio messaggio effettuato -->
  <div
    v-if="success"
    class="alert alert-success d-flex justify-content-between"
  >
    Messaggio inviato con successo
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <div class="form-box d-flex flex-column p-2 rounded-4">
    <div class="box">
      <div class="message-box shadow-lg p-4 rounded-4">
        <!-- form detail  -->
        <form @submit.prevent="sendMessage">
          <div class="modal-body">
            <div class="my-4">
              <h5 class="text-center fw-bold color-primary">
                Vuoi più informazioni?
              </h5>
            </div>

            <div class="mb-3">
              <label
                for="name"
                class="pb-2"
                >Nome</label
              >
              <input
                type="text"
                id="name"
                v-model="message.name"
                class="form-control"
                minlength="3"
                maxlength="100"
                required
              />
            </div>
            <div class="mb-3">
              <label
                for="surname"
                class="pb-2"
                >Cognome</label
              >
              <input
                type="text"
                id="surname"
                v-model="message.surname"
                class="form-control"
                minlength="3"
                maxlength="100"
                required
              />
            </div>

            <div class="mb-3">
              <label
                for="email"
                class="pb-2"
                >Email</label
              >

              <input
                type="email"
                id="email"
                v-model="message.email"
                class="form-control"
                minlength="5"
                maxlength="100"
                required
              />

              <!-- INPUT CON LOGIN -->
              <!-- <input v-else type="email" id="email" class="form-control" v-model="message.email" minlength="5"
                maxlength="100" disabled required :value="store.user_email" /> -->
            </div>
            <div class="mb-3">
              <label
                for="text"
                class="pb-2"
                >Messaggio</label
              >
              <textarea
                id="text"
                v-model="message.text"
                class="form-control"
                minlength="4"
                maxlength="65535"
                required
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn my-btn-primary rounded-5 mt-2 fw-bold"
            >
              Contatta il proprietario
            </button>
          </div>
        </form>
        <!-- end form detail  -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;

.form-box {
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
