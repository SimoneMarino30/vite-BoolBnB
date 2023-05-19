<script>
export default {
  name: "AppHeader",

  components: {},

  data() {
    return {
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
};
</script>

<template>
  <header class="fixed-top">
    <nav class="navbar p-0">
      <div class="container">
        <!-- logo -->
        <div>
          <a
            class="navbar-brand"
            href="/"
          >
            <img
              src="../../assets/images/logo-prova.png"
              alt="Logo"
              class="d-inline-block align-text-top logo"
            />
          </a>
        </div>

        <router-link :to="{ name: 'home' }"> In Evidenza </router-link>
        <router-link :to="{ name: 'AllApartments' }">
          Tutte le Case
        </router-link>

        <!-- buttons -->
        <div class="d-flex align-items-center">
          <a href="http://127.0.0.1:8000/login"
            ><button class="nav-btn">Login</button>
          </a>
          <span class="fs-3">|</span>

          <a href="http://127.0.0.1:8000/register"
            ><button class="nav-btn">Registrati</button>
          </a>
          <!-- Dropdown -->
          <div class="dropdown">
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
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
@use "../../style/partials/variables.scss" as *;
@use "../../style/partials/mixins.scss" as *;

header {
  @include link_hover;
  color: $light_color;
  height: 5rem;
  background-color: rgb(243 228 212);
  background-color: rgba(
    34,
    32,
    38,
    0.7
  ); /* Colore di sfondo con trasparenza */

  .logo {
    width: 8rem;
    height: 5rem;
  }

  .nav-btn {
    color: inherit;
    border: none;
    background-color: inherit;
    border-radius: 20px;
  }
  .dropdown-menu {
    color: $light_color;
    background-color: rgba(34, 32, 38, 0.7);

    text-align: center;
    min-width: 5rem;
    top: 150%;
    left: -50%;
  }
}
</style>
