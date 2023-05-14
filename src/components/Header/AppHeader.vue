<script>
export default {
  name: "AppHeader",

  components: {},

  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <nav class="navbar p-0">
      <div class="container justify-content-between">
        <!-- logo -->
        <div>
          <a
            class="navbar-brand"
            href="#"
          >
            <img
              src="../../assets/images/logo-prova.png"
              alt="Logo"
              class="d-inline-block align-text-top logo"
            />
          </a>
        </div>
        <!-- buttons -->
        <div class="col-3 d-flex justify-content-end gap-3">
          <a href="http://127.0.0.1:8000/login"><button>Login</button> </a>
          <a href="http://127.0.0.1:8000/login"><button>Registrati</button> </a>
          <a href="http://127.0.0.1:8000/login"><button>&hearts;</button> </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;

header {
  height: 5rem;
  background-color: #f3e4d4;
  .logo {
    width: 8rem;
    height: 5rem;
  }
}
</style>
