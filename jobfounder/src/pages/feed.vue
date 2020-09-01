<template>
  <div class="container my-5">
    <h2>Job Feed</h2>
    <hr />
    <div class="row mt-4">
      <div class="col-lg-6" style="border-bottom: 1px solid rgb(217 217 217)" v-for="(feed, index) in feeds" :key="feed.id">
        <!--  -->
        <b-card
          no-body
          class="overflow-hidden"
          style="background: transparent;border: 0px;"
        >
          <b-row no-gutters>
            <b-col md="3">
              <b-img
                thumbnail
                :src="feed.img"
                rounded="circle"
              ></b-img>
            </b-col>
            <b-col md="9">
              <b-card-body :title="feed.title">
                <small style="color: rgb(0 0 0 / 56%)"
                  ><i class="far fa-clock"></i> {{ feed.due_date }}</small
                >
                <b-card-text>
                  {{ feed.description }}
                </b-card-text>
                <b-button type="submit" class="bg-btn-gradient px-4 py-1" pill @click="$bvModal.show('feed'+index)"
                  >Read</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <!-- Modal -->
        <b-modal :id="'feed'+index" size="lg" hide-footer>
          <template v-slot:modal-title>
            <h3>{{ $store.getters.user.username }}</h3>
            <small><i class="far fa-clock"></i> {{ feeds[index].due_date }}</small>
          </template>
            <b-row class="p-0">
              <b-col md="6">
                <img :src="feeds[index].img" class="w-100 h-100">
              </b-col>
              <b-col md="6">
                <h5>{{ feeds[index].title }}</h5>
                <p>{{ feeds[index].description }}</p>
              </b-col>
            </b-row>
        </b-modal>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return{
          feeds: []
      }
  },
  methods: {
    getAllFeed() {
      axios
        .get("https://projectjobfinder01.herokuapp.com/users/get-all-work/")
        .then(
          response => {
            console.log("login success", response.data.length);
            
            for (var i = 0; i < response.data.length; i++){
                var obj = {};
                obj['id'] = response.data[i]._id;
                obj['username'] = response.data[i].username;
                obj['title'] = response.data[i].title;
                obj['description'] = response.data[i].description;
                obj['due_date'] = response.data[i].due_date;
                // obj['date'] = response.data[i].date;
                obj['status'] = response.data[i].status;
                obj['img'] = response.data[i].img;
                this.feeds.push(obj);
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted() {
      this.getAllFeed();
  }
};
</script>
