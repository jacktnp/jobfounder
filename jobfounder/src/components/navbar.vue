<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="mb-5" style="box-shadow: 0px 0px 7px rgba(0,0,0,0.25);">
      <b-navbar-brand href="../">JobFounder @ITKMITL</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav>
          <!-- <router-link to="../" :class="[currentPage.includes('home') ? activeClass : '', 'nav-link']">งานทั้งหมด</router-link>
          <router-link to="../request" :class="[currentPage.includes('request') ? activeClass : '', 'nav-link']">รับสมัครงาน</router-link> -->
          <b-nav-item href="../" active>งานทั้งหมด</b-nav-item>
          <b-nav-item href="../request">รับสมัครงาน</b-nav-item>
          <!-- <b-nav-item href="../adminpanel">ผู้ดูแลระบบ</b-nav-item> -->
          <b-nav-item href="../adminpanel">Adminpanel</b-nav-item>
          <b-nav-item href="../adminconfig">Adminconfig</b-nav-item>
          <!-- <b-nav-item href="../login">Login</b-nav-item> -->
          <b-nav-item @click="signout" type="submit">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
import main from "@/main.js";

export default {
  name: "Navbar",
  data(){
    return{
      showlogout: false,
      displayName: ''
    }
  },
  methods: {
    signout(){
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$route.replace({name : "loginPage"});
          alert('Logout Success')
        });
    }
  },
  mounted(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          this.showlogout = true;
          this.displayName = getuser.email;
        } else {
          // No user is signed in.
          this.showlogout = false;
          this.displayName = '';
        }
      });
  }
}
</script>