<template>
  <div class="hello">
    <h1>Register User</h1>
    <form v-on:submit="register()">
    <div class="form-input" >
    First Name : 
    <input type="text" v-on:blur="validateFirstName()" v-model="firstName" placeholder="First Name" required><br>
    <span class="error" v-show="errors.firstName != ''">{{errors.firstName}}</span>
    </div>
    <div class="form-input">
    Last Name :
    <input type="text" v-on:blur="validateLastName()" v-model="lastName" placeholder="Last Name" required><br>
    <span class="error" v-show="errors.lastName != ''">{{errors.lastName}}</span>
    </div>
    <div class="form-input">
    Email : 
    <input type="email"  name="email" v-model="email" placeholder="Email"><br>
    </div>
    <div class="form-input">
    Password :
    <input type="password" v-model="password" placeholder="Password" required><br>
    </div>
    <div class="form-input">
    <input type="submit" value="Register User">
    </div>
    </form>
  </div>
</template>

<script>

import { HTTP } from "./../http-common.js";

export default {
  props: {
    msg: String
  },
  data (){
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        errors:{
          firstName: '',
          lastName: '',
          password: '',
          email: ''
        }
    }
  },
  methods: {
    register(){
      var data = {
          'firstName' : this.firstName,
          'lastName' : this.lastName,
          'email' : this.email,
          'password': this.password 
      };
      HTTP.put('/',data).then(data => {
        console.log("User registered: ",data);
      }).catch(error =>{
        console.log(error);
      })
    },
    validateFirstName(){
      if(this.firstName == ''){
        this.errors.firstName = 'First name should not be empty'
      }else{
        this.errors.firstName = '';
      }
    },
     validateLastName(){
      if(this.lastName == ''){
        this.errors.lastName = 'Last name should not be empty'
      }else{
        this.errors.lastName = '';
      }
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
