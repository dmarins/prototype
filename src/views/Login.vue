<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="forgot-my-password">
      <a href="#">Perdeu a senha? Clique aqui.</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    logar() {
      this.$router.push({
        name: "welcome",
        params: { user: this.login.email }
      });
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.forgot-my-password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forgot-my-password a:hover {
  color: #607992;
  text-decoration: underline;
}
</style>
