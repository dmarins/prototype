<template>
  <section class="welcome">
    <h1>Olá, {{ this.$route.params.user }}.</h1>
    <h2>Intruções ao candidato</h2>
    <ol>
      <li>Esta prova está dividida em duas partes...</li>
      <li>
        Leia com atenção todos os itens e, somente então, comece a
        resolvê-los...
      </li>
      <li>
        Leia com atenção todos os itens e, somente então, comece a
        resolvê-los...
      </li>
      <li>
        Não será permitida a consulta a quaisquer documentos, nem a outro
        candidato...
      </li>
      <li>Esta prova está dividida em duas partes...</li>
      <li>
        Leia com atenção todos os itens e, somente então, comece a
        resolvê-los...
      </li>
      <li>
        Leia com atenção todos os itens e, somente então, comece a
        resolvê-los...
      </li>
      <li>
        Não será permitida a consulta a quaisquer documentos, nem a outro
        candidato...
      </li>
    </ol>
    <h2>Outra seção</h2>
    <ol>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris...
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
      <li>Esta prova está dividida em duas partes...</li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        vulputate dui. Maecenas ut sapien mauris....
      </li>
    </ol>
    <button class="btn" @click.prevent="iniciar">
      Estou pronto. Vamos iniciar!
    </button>
  </section>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    iniciar() {
      this.$router.push({
        name: "test"
      });
    }
  }
};
</script>

<style scoped>
.welcome {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2rem;
  margin-top: 40px;
}

h2 {
  margin-top: 40px;
}

ol {
  margin-top: 40px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
