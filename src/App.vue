<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="!$store.state.email" to="/login">Login</router-link>
    <a v-if="$store.state.email" @click="logout">LogOut</a>
  </nav>
  <router-view />

  <p v-for="item in list" :key="item.id">{{ item.id }} {{ item.email }}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  async mounted() {
    this.$store.commit("initializeStore");
    let result = await axios.get("https://reqres.in/api/users?page=1");
    this.list = result.data.data;
    console.warn(this.list);
  },
};
</script>
