<template>
  <b-container>
    <b-form @submit.prevent="login">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </b-container>
</template>

<script>
import main from "@/main.js";
import firebase from "firebase";

export default {
  name: "LoginPage",
  data: function() {
    return { email: "", password: "" , displayName: ""};
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Login Success with ' + this.email)
            this.$router.replace({ path: '/adminpanel' });
          },
          err => {
            alert(err.message);
          }
        );
    //   e.preventDefault();
    },
    loginWithProvider(e) {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          user => {
            this.$router.replace({name: "home"});
          },
          err => {
            alert(err.message);
          }
        );
    }
  },
};
</script>
