<template>
<div>
      <h2>Hästar</h2>
    <!--Hämta funktionen för att lägga till produkt från componenten "addProducts"-->
    <addHorses @horseAdded="getHorses()" />
    <Horse
      @deleteHorse="deleteHorse(horse._id)"
      v-for="horse in horses"
      :horse="horse"
      :key="horse._id"
    />
</div>
</template>

<script>
import Header from "../components/Header.vue";
import Horse from "../components/Horse.vue";
import addHorses from "../components/addHorses.vue";

export default {
  data() {
    return {
      horses: [],
    };
  },
  components: {
    Header,
    Horse,
    addHorses,
  },
  methods: {
    async getHorses() {
      //Get anrop för att skriva ut hästar
      const resp = await fetch("http://localhost:3000/horses", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      const data = await resp.json();

      this.horses = data;
    },
    async deleteHorse(_id) {
      //Delete-anrop för att radera häst
      const resp = await fetch("http://localhost:3000/horses/" + _id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      //Alertbox vid raderad häst
      alert("Häst raderad!");
      this.getHorses();
    },
  },
  //Ladda in hästar på nytt
  mounted() {
    this.getHorses();
  },
};
</script>


<style scoped>
h2 {
  text-align: center;
  font-size: 2em;
}
</style>