<template>
  <article>
    <ul class="list-group">
      <li class="list-group-item">{{ horse.name }}</li>
      <li class="list-group-item">Ålder: {{ horse.age }}</li>
      <li class="list-group-item">Ras: {{ horse.breed }}</li>
      <li class="list-group-item">Ägare: {{ horse.owner }}</li>
    </ul>
    <br>
    <button class="btn btn-danger" @click="$emit('deleteHorse')">
      Radera
    </button>
    <br>
    <router-link :to="{ name: 'Uppdatera', params: { id: horse._id } }">
      <br>
      <p class="btn btn-secondary">Uppdatera</p></router-link>
  </article>
</template>

<script>
export default {
  emits: ["deleteHorse", "updateHorse"],
  props: {
    horse: Object,
  },
};
</script>


<style scoped>
article {
  max-width: 800px;
  font-size: 1.2em;
  text-align: center;
  padding: 1em 0;
  background-color: white;
  border: solid 1px #999;
  margin: 1em auto 1em;
  cursor: pointer;
}

article:hover {
  background-color: rgb(153, 153, 153);
}

.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

@media screen and (max-width: 800px) {
  article {
    width: 90%;
  }
}
</style>