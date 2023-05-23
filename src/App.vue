<script>
// STORE
import { store } from "./data/store.js";

// AXIOS
import axios from "axios";

// import header
import AppHeader from "./components/Header/AppHeader.vue";

// import footer
import AppFooter from "./components/Footer/AppFooter.vue";

export default {

  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppFooter },

  methods: {

    checkLogin() {
      // Recupero dati URL e salvo in una variabile
      const urlParams = new URLSearchParams(window.location.search);
      // console.log(urlParams);

      // Recupero con .get() il valore del primo elemento dell'url
      const login = urlParams.get('login');
      // console.log(login);

      // Se login nell'url è true (stabilito dal return nella funzione store di AuthenticatedSessionController)
      if (login == 'true') {

        // Salvo dati login in sessione
        this.setSession('login', login);
        // Salvo dati "auth" in sessione, con metodo .get('parametro') recupero il valore del parametro tra parentesi
        // console.log(urlParams.get('auth'));
        this.setSession('auth', urlParams.get('auth'));

        // Dopo aver salvato i dati di sessione li recupero con metodo getSession(), sia per 'login' che per 'auth'
        // const value = this.getSession('login');
        // const id = this.getSession('auth');

        // console.log('CONDIZIONE LOGIN == TRUE - ', value, ' - VALORE AUTH(user_id): ' + id);

        // Ora faccio chiamata axios per recuperare informazioni utente dall'API
        this.fetchUser()


        // Se login nell'url è false (stabilito dal return nella funzione store di AuthenticatedSessionController)
      } else if (login == 'false') {

        // Cancello dati dalla sesione, sia login che auth
        this.removeSession('login');
        this.removeSession('auth');

        this.removeSession('name');
        this.removeSession('surname');
        this.removeSession('email');
      }
    },


    // Utilizzo di "sessionStorage.setItem()" per salvare i dati nella sessione
    setSession(key, value) {
      window.sessionStorage.setItem(key, value);
    },


    // Utilizzo di "sessionStorage.getItem()" per recuperare i dati dalla sessione
    getSession(key) {
      return window.sessionStorage.getItem(key);
    },


    // Utilizzo di "sessionStorage.removeItem()" per eliminare i dati dalla sessione
    removeSession(key) {
      window.sessionStorage.removeItem(key);
    },


    // Funzione per recuperare i dati dell'utente
    fetchUser() {
      axios
        .get(`${this.store.apiUrl}login`, {
          params: {
            // Recupero il valore di auth nell'url e lo inserisco come parametro della chiamata API
            'user_id': this.getSession('auth'),
          }
        })
        .then(response => {
          console.log(response.data);

          // this.setSession('user', response.data);
          // console.log(this.getSession('user'));
          // this.store.user = this.getSession('user');
          // Salvo dati in sessione
          this.setSession("name", response.data.name);
          this.setSession("surname", response.data.surname);
          this.setSession("email", response.data.email);

          // Salvo l'utente
          this.saveUser();

          // this.store.user = response.data;
        })
    },

    // Funzione per salvare dati utente
    saveUser() {
      this.store.user_name = this.getSession("name");
      this.store.user_surname = this.getSession("surname");
      this.store.user_email = this.getSession("email");
    },

  },

  created() {
    this.checkLogin();

    // console.log(this.getSession('user'));
    if (this.getSession('auth')) {
      this.saveUser();
      // this.store.user = this.getSession('user');
      // console.log('User: ', this.store.user)
    }
  },

  mounted() {
    // CRIPTARE URL
    this.$router.push('/');
  },
};
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <main>
    <router-view></router-view>
  </main>

  <!-- footer -->
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/mixins.scss" as *;
@use "./style/partials/variables.scss" as *;
@include link_hover;
</style>
