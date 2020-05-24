<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: 'App',
  components: {
    navbar
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
