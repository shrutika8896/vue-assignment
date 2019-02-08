<template>
<form  v-on:submit="login()">
        <h1>Login</h1>
    <div>
    Email : 
    <input type="email"  name="email" v-model="email" placeholder="Email" required><br>
    </div>
    <div class="form-input">
    Password :
    <input type="password" v-model="password" placeholder="Password" required><br>
    </div>
    <div class="form-input">
    <input type="submit" value="Register User">
    </div>
    </form>
</template>

<script>

import { HTTP } from "./../http-common.js";

export default {
  name: 'Login',
  data (){
      return{
          email: '',
          password: ''
      }
  },
  methods: {
    login(){
      var data = {
          'email' : this.email,
          'password': this.password 
      };
      HTTP.post('/login',data).then(data => {
        console.log("User logged in: ",data);
      }).catch(error =>{
        console.log(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-input{
    margin: 5px;
    align-content: right
}
.error{
  color: red;
}
input:required:invalid, input:focus:invalid {
  /* insert your own styles for invalid form input */
  -moz-box-shadow: none;
}

</style>
