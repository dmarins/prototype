<template>
  <section>
    <ul>
      <li v-for="(message, index) in this.messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Supervisor",
  computed: {
    ...mapGetters("log", {
      messages: "messages"
    })
  }
};
</script>

<style></style>
