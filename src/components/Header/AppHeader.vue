<script>
// STORE
import { store } from "../../data/store.js";

export default {
  name: "AppHeader",

  components: {},

  data() {
    return {
      store,
      /* links: [
        {
          text: "Home",
        },
        {
          text: "Appartamenti",
        },
      ], */
    };
  },

  methods: {
    removeSession(key) {
      window.sessionStorage.removeItem(key);
    },

    logout() {
      window.history.pushState({}, document.title, "/" + "?login=false");

      const urlParams = new URLSearchParams(window.location.search);
      let login = urlParams.get("login");

      console.log(login);

      login == "false";

      console.log(login);

      this.removeSession("login");
      this.removeSession("auth");

      this.removeSession("name");
      this.removeSession("surname");
      this.removeSession("email");

      this.store.user_name = "";
      this.store.user_surname = "";
      this.store.user_email = "";
    },
  },
};
</script>

<template>
  <header class="fixed-top">
    <div class="container p-0">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid text-center">
          <a class="navbar-brand" href="/">
            <img
              src="../../assets/images/logo-prova.png"
              alt="Logo"
              class="d-inline-block align-text-top logo"
            />
          </a>
          <button
            class="navbar-toggler color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarScroll"
          >
            <ul class="navbar-nav my-2 my-lg-0">
              <li class="nav-item link-space">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item link-space">
                <router-link class="nav-link" :to="{ name: 'AllApartments' }">
                  Tutte le Case
                </router-link>
              </li>
              <li class="nav-item link-space nav-link">Chi Siamo</li>
            </ul>
            <!-- buttons -->
            <div
              v-if="store.user_email === ''"
              class="d-flex align-items-center text-center justify-content-center"
            >
              <a href="http://127.0.0.1:8000/login">
                <button class="nav-btn">Login</button>
              </a>
              <span class="fs-3">|</span>

              <a href="http://127.0.0.1:8000/register"
                ><button class="nav-btn">Registrati</button>
              </a>
              <!-- Dropdown LINGUA -->
              <!-- <div class="dropdown">
                <a
                  href="#"
                  class="nav-btn ps-3 dropdown-toggle-no-caret"
                  role="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon icon="fa-solid fa-globe" />
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      >Italiano</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      >English</a
                    >
                  </li>
                </ul>
              </div> -->
            </div>

            <div
              v-else
              class="d-flex align-items-center text-center justify-content-center"
            >
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ store.user_name }}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://127.0.0.1:8000/dashboard"
                      target="_blank"
                      >Area personale</a
                    >
                  </li>
                  <li>
                    <button
                      @click="logout()"
                      id="logout_button"
                      type="button"
                      class="dropdown-item"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;

header {
  @include link_hover;
  color: $light_color;
  background-color: $light_color;
  height: 127px;
  // background-color: rgba(34, 32, 38, 0.7);
  /* Colore di sfondo con trasparenza */

  .link-space {
    margin: 0 6rem;
    color: $dark_color;
  }

  .color {
    background-color: $light_color;
  }

  .logo {
    width: 15rem;
    height: 7rem;
  }

  .nav-btn {
    color: $dark_color;
    border: none;
    background-color: inherit;
    border-radius: 20px;
  }

  .dropdown-toggle {
    background-color: transparent;
    border: none;
    color: inherit;
  }

  .dropdown-menu {
    color: $light_color;
    background-color: rgba(34, 32, 38, 0.7);

    text-align: center;
    min-width: 5rem;
    top: 150%;
    left: -50%;

    #logout_button {
      color: inherit;
      &:hover {
        color: $dark_accent_color;
        background-color: inherit;
      }
    }
  }
}
</style>
