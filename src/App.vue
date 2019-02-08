<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Register v-show="active == 'register'"/>
    <login v-show="active == 'login'"/>

      <button v-on:click ="active = 'register'"> Register</button>
      <button v-on:click ="active = 'login'"> Login</button>
  </div>
</template>
<script>

import Register from './components/Register.vue';
import Login from './components/Login.vue';

export default {
  name: 'app',
  components: {
    Register,
    Login
  },
  data(){
  return {
       active : 'register'
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
