<template>
  <section class="test">
    <h1>Qual é a primeira letra do alfabeto?</h1>
    <form>
      <input type="radio" id="answer1" name="answer" value="A" />
      <label for="answer1">A</label>

      <input type="radio" id="answer2" name="answer" value="ALFA" />
      <label for="answer2" class="radiolabel">&#945;</label>

      <input type="radio" id="answer3" name="answer" value="Z" />
      <label for="answer3">Z</label>

      <input type="radio" id="answer4" name="answer" value="OMEGA" />
      <label for="answer4">&#8486;</label>
      <button class="btn" @click.prevent="save">
        Finalizar
      </button>
    </form>
    <div v-show="showMessage">
      <label class="color-green">Exame finalizado com sucesso.</label>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Test3",
  data() {
    return {
      showMessage: false
    };
  },
  methods: {
    ...mapActions("log", {
      register: "register"
    }),
    save() {
      this.register(
        `o candidato respondeu a terceira pergunta e finalizou a prova.`
      );
      this.showMessage = true;
    }
  }
};
</script>

<style scoped>
.test {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2rem;
  margin-top: 40px;
}

form {
  margin-top: 40px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px 1fr;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

input {
  grid-column: 1 / 2;
}

input:hover {
  transform: scale(1.3);
  cursor: pointer;
}

label {
  grid-column: 2 / 3;
}

button {
  grid-column: 1 / 3;
  margin-bottom: 40px;
}

.color-green {
  color: rgb(7, 167, 7);
}
</style>
