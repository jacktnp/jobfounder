<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-2">
                <h2>Explore</h2>
            </div>
            <div class="col-md-10 d-flex justify-content-end">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button class="my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></b-button>
                </b-nav-form>
            </div>
        </div>
        
        <hr>
        <div class="row mt-4">
            <div class="col-lg-6" v-for="student in students" :key="student.id">
                <!--  -->
                <b-card no-body class="overflow-hidden p-2" style="border-radius: 1.75em;">
                    <b-row no-gutters>
                    <b-col md="3" class="d-flex align-items-center justify-content-center">
                        <b-img class="w-100" src="https://picsum.photos/400/400/?image=20" rounded="circle"></b-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body :title="student.username">
                            <!-- <small style="color: rgb(0 0 0 / 56%)"><i class="far fa-clock"></i> 31 sep 2020</small> -->
                            <b-card-text>
                                <i class="far fa-university"></i> KMITL Faculty of Information Technology
                                <br>
                                <i class="fab fa-instagram"></i> jacktnp
                            </b-card-text>
                            <a href="#">
                                <b-button class="float-right bg-btn-gradient px-2 py-1" pill>view profile</b-button>
                            </a>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
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
          students: []
      }
  },
  methods: {
    getAllStudent() {
      axios
        .get("https://projectjobfinder01.herokuapp.com/users/get-member-by-role/")
        .then(
          response => {
            
            for (var i = 0; i < response.data.length; i++){
                var obj = {};
                obj['id'] = response.data[i]._id;
                obj['username'] = response.data[i].username;
                this.students.push(obj);
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted() {
      this.getAllStudent();
  }
};
</script>
