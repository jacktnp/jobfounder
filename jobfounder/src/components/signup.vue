<template>
  <div class="w-75 mx-auto mt-4">
    <b-form @submit="authUser">
      <b-form-group id="usernamelabel" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          required
          placeholder="User Name"
          pill
        ></b-form-input>
      </b-form-group>

      <b-form-group id="emaillabel" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="text"
          required
          placeholder="E-mail"
          pill
        ></b-form-input>
      </b-form-group>

      <b-form-group id="passwordlabel" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
      <p class="text-center">
        <b-button type="submit" class="bg-btn-gradient p-2 w-100" pill
          >Sign Up
        </b-button>
      </p>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    authUser() {
      axios
        .post("https://projectjobfinder01.herokuapp.com/register", {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
          role: "company"
        })
        .then(
          response => {
            if(response.data.status == 'success'){
              this.$store.commit('setUser', response.data);
            }
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style>
.bg-btn-gradient {
    background: rgb(173,219,228);
    background: linear-gradient(137deg, rgba(173,219,228,1) 0%, rgba(83,171,217,1) 0%, rgba(0,126,206,1) 100%);
    border: 0px;
}
</style>
