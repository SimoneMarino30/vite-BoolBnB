<script>
export default {
  data() {
    return {
      wordSearched: "",
    };
  },
  props: {
    name: String,
    placeholder: String,
    search: String,
  },
  emits: ["newSearch"],
};
</script>

<template>
  <form
    class="d-flex mt-4"
    role="search"
    @submit.prevent="$emit('newSearch', wordSearched)"
  >
    <input
      v-model="wordSearched"
      class="form-control me-2"
      type="search"
      :placeholder="placeholder"
      aria-label="Search"
    />
    <button
      class="btn btn-outline-success"
      type="submit"
    >
      {{ search }}
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
