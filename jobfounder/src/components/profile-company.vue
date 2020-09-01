<template>
  <div>
    <div class="text-center">
      <b-button class="mx-auto bg-btn-gradient px-5 py-2" pill v-b-modal.modal-annouce
        ><i class="far fa-bullhorn"></i> New Annoucement</b-button
      >
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-12 pb-3" style="border-bottom: 1px solid rgb(217 217 217)" v-for="job in jobs" :key="job.id">
        <b-card
          no-body
          class="overflow-hidden"
          style="background: transparent;border: 0px;"
        >
          <b-row no-gutters>
            <b-col md="3">
              <b-img
                thumbnail
                :src="job.img"
                rounded="circle"
              ></b-img>
            </b-col>
            <b-col md="9">
              <b-card-body :title="job.title">
                <small style="color: rgb(0 0 0 / 56%)"
                  ><i class="far fa-clock"></i> {{ job.date }}</small
                >
                <b-card-text>
                  {{ job.description }}
                </b-card-text>
                <b-button type="submit" class="bg-btn-gradient px-4 py-1" pill
                  >edit post</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <!-- Modal Annouce -->
    <b-modal id="modal-annouce" size="lg" hide-footer class="p-0" title="New Annoucement">
      <b-row>
        <b-col cols="6">
          <b-img fluid :src="newAnn.img" class="w-100 h-100" />
        </b-col>
        <b-col cols="6">
          <b-form method="POST" @submit.prevent="addJob()">
            <b-form-group
              id="ltitle"
              label="Title:"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="newAnn.title"
                type="title"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="limg"
              label="Image:"
              label-for="img"
            >
              <b-form-input
                id="img"
                v-model="newAnn.img"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-datepicker id="due_date" class="mb-3" v-model="newAnn.due_date"></b-form-datepicker>
            <b-form-textarea
              id="description"
              name="description"
              v-model="newAnn.description"
              rows="4"
              max-rows="8"
              class="mb-3"
            ></b-form-textarea>
            <b-button type="submit" variant="primary" class="w-100">Add</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['user'],
  data(){
    return{
      username: this.user,
      newAnn: {
        title: "",
        description: "",
        due_date: "",
        img: "https://picsum.photos/250/250/?image=54"
      },
      jobs: []
    }
  },
  methods: {
    addJob() {
      axios
      .post("https://projectjobfinder01.herokuapp.com/users/create-work/", {
        "username": this.$store.getters.user.username,
        "title": this.newAnn.title,
        "description": this.newAnn.description,
        "due_date": this.newAnn.due_date,
        "status": 'alive',
        "img": this.newAnn.img
      })
      .then(
        response => {
          console.log("update company info success")
          this.jobs = [];
          this.getJob();
        },
        error => {
          console.log("update company info fail")
        }
      );
    },
    getJob() {
      axios
      .post("https://projectjobfinder01.herokuapp.com/users/get-all-work-by-username", {
        "username": this.username,
      })
      .then(
        response => {
          for (var i = 0; i < response.data.length; i++){
              var obj = {};
              obj['id'] = response.data[i]._id;
              obj['username'] = response.data[i].username;
              obj['title'] = response.data[i].title;
              obj['description'] = response.data[i].description;
              obj['due_date'] = response.data[i].due_date;
              obj['status'] = response.data[i].status;
              obj['date'] = response.data[i].date;
              obj['img'] = response.data[i].img;
              this.jobs.push(obj);
          }
        },
        error => {
          console.log("update company info fail")
        }
      );
    }
  },
  mounted() {
    this.getJob();
  }
}
</script>

<style scoped>
.modal-body{
  padding: 0px !important;
}
</style>