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
          >Sign In
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
        password: ""
      }
    };
  },
  methods: {
    authUser() {
      axios
        .post("http://localhost:3000/login", {
          username: this.form.username,
          password: this.form.password
        })
        .then(
          response => {
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
