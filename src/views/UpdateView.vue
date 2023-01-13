  <template>
  <div class="mb-3">
    <h1>Ändra häst</h1>
    <form
      @submit.prevent="updateHorse(this.$route.params.id)"
      form
      class="form-label"
    >
      <label for="name">Namn:</label>
      <br />
      <input v-model="horse.name" type="text" class="form-control" />
      <br />
      <label for="breed">Ras:</label>
      <br />
      <input v-model="horse.breed" type="text" class="form-control" />
      <br />
      <label for="age">Ålder:</label>
      <br />
      <input v-model="horse.age" type="text" class="form-control" />
      <br />
      <label for="owner">Ägare:</label>
      <br />
      <input v-model="horse.owner" type="text" class="form-control" />

      <br />
      <input type="submit" value="Uppdatera häst" class="form-control" />
    </form>
    <RouterLink to="/horses">Tillbaka</RouterLink>
    <div>
      <!--Skriv ut meddelande om lyckad uppdatering-->
      <span> {{ success }}</span>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  data() {
    //Hämta det ID som skickades med från lager-sidan så att rätt häst uppdateras
    return {
      id: this.$route.params.id,
      horse: Object,
      success: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    async getHorse(id) {
      //Get anrop för att hämta hästarna
      const resp = await fetch("http://localhost:3000/horses/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      this.horse = data;
    },
    async updateHorse(id) {
      let horseBody = {
        name: this.horse.name,
        breed: this.horse.breed,
        age: this.horse.age,
        owner: this.horse.owner,
      };
      //PUT-anrop för uppdatering
      const resp = await fetch("http://localhost:3000/horses/" + id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(horseBody),
      });
      const data = await resp.json();
      //Skriv ut meddelande
      this.success = "Häst uppdaterad!";
      alert("Häst uppdaterad!");
    },
  },
  //Ladda in den uppdaterade hästen igen
  mounted() {
    this.getHorse(this.$route.params.id);
  },
};
</script>

<style scoped>
.mb-3 {
  max-width: 90%;
  margin: auto;
}

h1 {
  text-align: center;
}
</style>