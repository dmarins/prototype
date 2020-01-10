<template>
  <section class="test">
    <h1>Quanto é 2 + 2?</h1>
    <form>
      <input type="radio" id="answer1" name="answer" value="4" />
      <label for="answer1">4</label>

      <input type="radio" id="answer2" name="answer" value="1" />
      <label for="answer2" class="radiolabel">1</label>

      <input type="radio" id="answer3" name="answer" value="2" />
      <label for="answer3">2</label>

      <input type="radio" id="answer4" name="answer" value="5" />
      <label for="answer4">5</label>
      <button class="btn" @click.prevent="save">
        Próxima Questão
      </button>
    </form>
  </section>
</template>

<script>
export default {};
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

label {
  grid-column: 2 / 3;
}

button {
  grid-column: 1 / 3;
}
</style>
