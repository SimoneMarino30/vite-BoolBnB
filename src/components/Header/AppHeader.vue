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
    <div class="container h-100">
      <div class="row d-flex align-items-center h-100">
        <div class="col-3 logo">
          <a href="http://localhost:5174" class=""> BoolBnB </a>
        </div>

        <div class="col-3 d-flex justify-content-end gap-3">
          <a href="http://127.0.0.1:8000/login"> Login </a>
          <a href="http://127.0.0.1:8000/register"> Registrati </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
