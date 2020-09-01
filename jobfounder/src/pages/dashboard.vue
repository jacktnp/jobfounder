<template>
  <b-container class="my-5">
    <h2>Dashboard</h2>
    <hr>
    <b-card-group columns class="mt-4">
      
      <b-card v-for="port in portfolio" :key="port.id" :img-src="port.img" no-body />

    </b-card-group>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      portfolio: []
    }
  },
  methods:{
    getPortfolio() {
      axios
        .get("https://projectjobfinder01.herokuapp.com/users/get-profile/")
        .then(
          response => {
            for (var i = 0; i < response.data.length; i++){
                var obj = {};
                obj['id'] = response.data[i]._id;
                obj['img'] = response.data[i].img;
                this.portfolio.push(obj);
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted() {
    this.getPortfolio()
  }
}
</script>
