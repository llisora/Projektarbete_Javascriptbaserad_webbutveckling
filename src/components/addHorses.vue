<template>
  <div class="mb-3">
    <form @submit.prevent="addHorse()">
      <label for="addHorse" class="form-label">Namn:</label>
      <br />
      <input v-model="name" type="text" class="form-control" />
      <br />
      <label for="addHorse" class="form-label">Ålder:</label>
      <br />
      <input v-model="age" type="text" class="form-control" />
      <br />
      <label for="addHorse" class="form-label">Ras:</label>
      <br />
      <input v-model="breed" type="text" class="form-control" />
      <br />
      <label for="addHorse" class="form-label">Ägare:</label>
      <br />
      <input v-model="owner" type="text" class="form-control" />
      <br />
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary">Lägg till häst</button>
      </div>
    </form>
    <br />
      <span> {{ success }}</span>
      <span> {{ error }}</span>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  data() {
    return {
      //Tömmer värdena
      name: "",
      age: "",
      breed: "",
      owner: "",
      success: "",
      error: ""
    };
  },
  components: {
    Header,
  },
  emits: ["horseAdded"],
  methods: {
    async addHorse() {
      if (
        //Om dessa fält inte är tomma kör funktionen
        this.name &&
        this.age &&
        this.breed &&
        this.owner  != ""
      ) {

        let horseBody = {
          name: this.name,
          age: this.age,
          breed: this.breed,
          owner: this.owner,
        };
        //Post-anrop för att lägga till hästar
        const resp = await fetch("http://localhost:3000/horses", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(horseBody),
        });

        const data = await resp.json();

        this.name = "";
        this.age = "";
        this.breed = "";
        this.owner = "";

        this.$emit("horseAdded");
        //Meddelande och alertbox
        this.success = "Häst tillagd!";
        alert("Häst tillagd!");
        this.error = "";
      } else {
        //Felmeddelande
        this.error = "Se till att fylla i alla fält!";
      }
    },
  },
};
</script>
<style scoped>
.mb-3 {
  max-width: 80%;
  margin: auto;
}
</style>