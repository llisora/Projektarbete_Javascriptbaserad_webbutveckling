<template>
  <div><Header /> <RouterView /></div>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    RouterView,
  },
};
</script>



<style scoped>
main {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
</style>
