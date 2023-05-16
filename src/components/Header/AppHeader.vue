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
  <header>
    <nav class="navbar p-0">
      <div class="container">
        <!-- logo -->
        <div>
          <a class="navbar-brand" href="#">
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
          <a href="#"
            ><button class="nav-btn ps-3">
              <font-awesome-icon icon="fa-solid fa-globe" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
@use "../../style/partials/variables.scss" as *;

header {
  height: 5rem;
  background-color: #efe4c8;
  .logo {
    width: 8rem;
    height: 5rem;
  }

  .nav-btn {
    border: none;
    background-color: inherit;
    border-radius: 20px;
    &:hover {
      color: $primary_color;
    }
  }

  .navbar {
    border-bottom: 1px solid #222026;
  }
}
</style>
