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

#app, body {
  font-family: 'Prompt', sans-serif;
  background: #F0F2F5;
  height: 100%;
}
.bg-btn-gradient {
    background: rgb(173,219,228);
    background: linear-gradient(137deg, rgba(173,219,228,1) 0%, rgba(83,171,217,1) 0%, rgba(0,126,206,1) 100%);
    border: 0px;
}
.bg-btn-gradient:hover {
    transition: .25s;
    background: rgb(173,219,228);
    background: linear-gradient(137deg, rgba(0,126,206,1) 0%, rgba(83,171,217,1) 0%, rgba(0,126,206,1) 100%);
    border: 0px;
}
</style>
