<template>
    <b-container class="my-5">
        <b-row>
            <b-col lg="3" md="4">
                 <b-img src="https://picsum.photos/125/125/?image=58" rounded="circle" class="w-100"></b-img>
                 <h4 class="mt-4">
                     <i class="far fa-user-graduate" />
                     {{ username }}
                 </h4>
                 <p>{{ information.description }}</p>
                 <div>
                    <hr>
                    <h5 class="my-3"># Personal Information</h5>
                    <i class="far fa-university"></i> Faculty of Information Technology, KMITL.
                    <p>{{ information.fname + ' ' + information.lname }}</p>
                    <p>{{ information.email }}</p>
                    <p>{{ information.phone }}</p>
                    <p>{{ information.citizenid }}</p>
                    <!-- <p>
                        <i class="fab fa-instagram"></i> jacktnp
                    </p>
                    <p>
                        <i class="fab fa-youtube"></i> jacktnp
                    </p> -->
                 </div>
                 <br>
            </b-col>
            <b-col lg="9" md="8" class="pl-5">
                <b-container>
                    <profileStudent :user="username" />
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import profileStudent from '@/components/profile-student'
import axios from 'axios'

export default {
    components: {
        profileStudent
    },
    data(){
        return{
            username: this.$route.params.username,
            information: {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                citizenid: '',
                description: ''
            },
        }
    },
    methods:{
        getUserInfo() {
            axios
            .post("https://projectjobfinder01.herokuapp.com/users/get-member-by-username/", {
                "username": this.username
            })
            .then(
            response => {
                if(response.data[0].flg == 1){
                    this.information.fname = response.data[0].fname;
                    this.information.lname = response.data[0].lname;
                    this.information.email = response.data[0].email;
                    this.information.citizenid = response.data[0].citizenid;
                    this.information.description = response.data[0].description;
                }
            },
            error => {
                console.log('error');
            }
            );
        }
    },
    mounted(){
        this.getUserInfo();
    }
}
</script>