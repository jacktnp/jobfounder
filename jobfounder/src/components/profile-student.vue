<template>
  <div>
    <div class="text-center">
      <b-button class="mx-auto bg-btn-gradient px-5 py-2" pill v-b-modal.modal-newpost
        ><i class="far fa-plus"></i> New Post</b-button
      >
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-12 mb-3" style="border-bottom: 1px solid rgb(217 217 217)" v-for="post in posts" :key="post.id">
        <!--  -->
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img
                :src="post.img"
                class="rounded-0 w-100 h-100"
              ></b-card-img>
            </b-col>
            <b-col md="9">
              <b-card-body :title="post.title">
                <small style="color: rgb(0 0 0 / 56%)" v-if="post.trustby">
                  <span
                    ><i class="fad fa-check-circle" style="color: green;"></i>
                    {{post.trustby}}</span
                  >
                </small>
                <p>
                  {{ post.description}}
                </p>
                <div class="d-flex justify-content-end mt-2">
                  <b-button
                    class="mr-2"
                    style="background: transparent;color: #6c757d;border:0px;" @click="deletePost(post.id)"
                    ><i class="fas fa-trash-alt"></i
                  ></b-button>
                  <b-button class="px-1 py-0" pill>edit post</b-button>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <!-- Modal NewPost -->
    <b-modal id="modal-newpost" size="lg" hide-footer class="p-0 mb-2" title="New Post">
      <b-row>
        <b-col cols="6">
          <b-img fluid :src="newPost.img" class="w-100 h-100" />
        </b-col>
        <b-col cols="6">
          <b-form method="POST" @submit.prevent="addPost()">
            <b-form-group
              id="ltitle"
              label="Title:"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="newPost.title"
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
                v-model="newPost.img"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-textarea
              id="description"
              name="description"
              v-model="newPost.description"
              rows="4"
              max-rows="8"
              class="mb-3"
            ></b-form-textarea>
            <b-form-group
              id="ltrustby"
              label="Trust By:"
              label-for="trustby"
            >
              <b-form-input
                id="trustby"
                v-model="newPost.trustby"
                type="text"
              ></b-form-input>
            </b-form-group>
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
      newPost: {
        title: "",
        description: "",
        due_date: "",
        img: "https://picsum.photos/250/250/?image=54",
        trustby: ""
      },
      posts: []
    }
  },
  methods: {
    addPost() {
      axios
      .post("https://projectjobfinder01.herokuapp.com/users/create-profile/", {
        "username": this.username,
        "title": this.newPost.title,
        "description": this.newPost.description,
        "due_date": this.newPost.due_date,
        "trustby": this.newPost.trustby,
        "img": this.newPost.img
      })
      .then(
        response => {
          console.log("update post info success")
          this.getPost();
        },
        error => {
          console.log("update post info fail")
        }
      );
    },
    getPost() {
      axios
      .post("https://projectjobfinder01.herokuapp.com/users/get-profile-by-username", {
        "username": this.username,
      })
      .then(
        response => {
          this.posts = [];
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
              this.posts.push(obj);
          }
        },
        error => {
          console.log("update company info fail")
        }
      );
    },
    deletePost(id) {
      axios
        .post("https://projectjobfinder01.herokuapp.com/users/delete-profile/" + id)
        .then(
          response => {
            this.getPost();
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted() {
    this.getPost();
  }
}
</script>

<style scoped>
.modal-body{
  padding: 0px !important;
}
</style>