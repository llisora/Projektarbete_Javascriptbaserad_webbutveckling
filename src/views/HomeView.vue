<template>
  <div>
    <h2>Välkommen till Hästdatabasen!</h2>
    <p>Här kan du lägga till, radera och uppdatera hästar under fliken "Hästar" i menyn.</p>
    <p>
      Hästdatabasen är skapad av mig, Lisa Bäcklin, som ett projektarbete i
      <br />kursen JavaScriptbaserad Webbutveckling.
    </p>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

p {
  text-align: center;
}
.center {
  text-align: center;
}
</style>
