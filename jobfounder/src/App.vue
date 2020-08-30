<template>
  <div id="app">
      <home />
  </div>
</template>

<script>
import store from './vuex/store'
import home from './pages/home'

export default {
  name: 'App',
  components: {
    home
  },
  store
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;700&display=swap');

#app {
  font-family: 'Prompt', sans-serif;
  background: #F0F2F5;
}
</style>
