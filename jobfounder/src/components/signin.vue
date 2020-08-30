<template>
  <div class="w-75 mx-auto mt-4">
    <b-form @submit.prevent="authUser">
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
        .post("https://projectjobfinder01.herokuapp.com/login", {
          username: this.form.username,
          password: this.form.password
        })
        .then(
          response => {
            if(response.data.status == 'success'){
              console.log("login success")
              this.$store.commit('setUser', response.data);
            }
            // console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>