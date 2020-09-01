<template>
    <b-container class="my-5">
        <b-row>
            <b-col lg="3" md="4">
                 <b-img src="https://picsum.photos/125/125/?image=58" rounded="circle" class="w-100"></b-img>
                 <h4 class="mt-4">
                     <i class="far fa-building" v-if="userrole == 'company'" />
                     <i class="far fa-chalkboard-teacher" v-else-if="userrole == 'instructor'" />
                     <i class="far fa-user-graduate" v-else-if="userrole == 'student'" />
                     {{ this.$store.getters.user.username }}
                 </h4>
                 <p>{{ information.description }}</p>
                 <div v-if="userrole == 'company'">
                    <div v-if="company.flg == 1">
                        <hr>
                        <h5 class="my-3"># Company Information</h5>
                        <p><i class="far fa-building" /> {{ company.company_name }}</p>
                        <p><i class="far fa-map-marker-alt" /> {{ company.company_address }}</p>
                        <p><i class="far fa-phone" /> {{ company.company_phone }}</p>
                        <p><i class="far fa-envelope" /> {{ company.company_email }}</p>
                        <p><i class="far fa-browser" /> {{ company.company_website }}</p>
                    </div>
                    <div v-else>
                        <p class="text-center">กรุณากรอกข้อมูลบริษัท<br>ก่อนใช้งาน</p>
                    </div>
                 </div>
                 <div>
                    <hr>
                    <h5 class="my-3"># Personal Information</h5>
                    <p v-if="userrole != 'company'">
                        <i class="far fa-university"></i> Faculty of Information Technology, KMITL.
                    </p>
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
                 <b-button class="bg-btn-gradient px-2 py-1" pill v-b-modal.editProfile>edit profile</b-button>
                 <b-button class="bg-btn-gradient px-2 py-1" pill v-b-modal.editCompany v-if="userrole == 'company'">edit company</b-button>
                 <!-- modal.editProfile -->
                 <b-modal id="editProfile" title="Edit Profile" hide-footer>
                    <b-form @submit.prevent="updateUserInfo()">
                        <b-row>
                            <b-col md="6">
                                <b-form-group
                                    id="lfname"
                                    label="First name:"
                                    label-for="fname"
                                >
                                    <b-form-input
                                    id="fname"
                                    v-model="updateInfo.fname"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="llname"
                                    label="Last name:"
                                    label-for="lname"
                                >
                                    <b-form-input
                                    id="lname"
                                    v-model="updateInfo.lname"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="lemail"
                                    label="Email:"
                                    label-for="email"
                                >
                                    <b-form-input
                                    id="email"
                                    v-model="updateInfo.email"
                                    type="email"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="lphone"
                                    label="Phone:"
                                    label-for="phone"
                                >
                                    <b-form-input
                                    id="phone"
                                    v-model="updateInfo.phone"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="12">
                                <b-form-group
                                    id="lcitizenid"
                                    label="Citizenid:"
                                    label-for="citizenid"
                                >
                                    <b-form-input
                                    id="citizenid"
                                    v-model="updateInfo.citizenid"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="12">
                                <b-form-group
                                    id="ldescription"
                                    label="Description:"
                                    label-for="description"
                                >
                                    <b-form-input
                                    id="description"
                                    v-model="updateInfo.description"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <b-button class="w-100" type="submit" variant="primary">Update</b-button>
                    </b-form>
                 </b-modal>
                 <!--  -->
                 <!-- modal.editProfile -->
                 <b-modal id="editCompany" title="Edit Company" hide-footer>
                    <b-form @submit.prevent="updateCompanyInfo()">
                        <b-row>
                            <b-col md="6">
                                <b-form-group
                                    id="lcompany_name"
                                    label="Company name:"
                                    label-for="company_name"
                                >
                                    <b-form-input
                                    id="company_name"
                                    v-model="updateCompany.company_name"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="lcompany_address"
                                    label="Company address:"
                                    label-for="company_address"
                                >
                                    <b-form-input
                                    id="company_address"
                                    v-model="updateCompany.company_address"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="lcompany_phone"
                                    label="Company Phone:"
                                    label-for="company_phone"
                                >
                                    <b-form-input
                                    id="company_phone"
                                    v-model="updateCompany.company_phone"
                                    type="company_phone"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="lcompany_email"
                                    label="Company email:"
                                    label-for="company_email"
                                >
                                    <b-form-input
                                    id="company_email"
                                    v-model="updateCompany.company_email"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="12">
                                <b-form-group
                                    id="lcompany_website"
                                    label="Company site:"
                                    label-for="company_website"
                                >
                                    <b-form-input
                                    id="company_website"
                                    v-model="updateCompany.company_website"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <b-button class="w-100" type="submit" variant="primary">Update</b-button>
                    </b-form>
                 </b-modal>
                 <!--  -->
            </b-col>
            <b-col lg="9" md="8" class="pl-5">
                <b-container>
                    <profileStudent v-if="userrole == 'student'" :user="username" />
                    <profileInstructor v-else-if="userrole == 'instructor'" :user="username" />
                    <profileCompany v-else-if="userrole == 'company' && company.flg == 1" :user="username" />
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import profileStudent from '@/components/profile-student'
import profileInstructor from '@/components/profile-instructor'
import profileCompany from '@/components/profile-company'
import axios from 'axios'

export default {
    components: {
        profileStudent, profileInstructor, profileCompany
    },
    data(){
        return{
            username: this.$store.getters.user.username,
            userrole: this.$store.getters.user.role,
            updateInfo: {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                citizenid: '',
                description: ''
            },
            updateCompany: {
                company_name: '',
                company_address: '',
                company_phone: '',
                company_email: '',
                company_website: ''
            },
            company: {
                company_name: '',
                company_address: '',
                company_phone: '',
                company_email: '',
                company_website: '',
                flg: 0
            },
            information: {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                citizenid: '',
                description: '',
                flg: 0
            },
        }
    },
    methods:{
        getCompanyInfo() {
            axios
            .post("https://projectjobfinder01.herokuapp.com/users/get-company-data-by-user/", {
                "username": this.$store.getters.user.username
            })
            .then(
            response => {
                if(response.data[0].flg == 1){
                    this.company.company_name = response.data[0].company_name;
                    this.company.company_address = response.data[0].company_address;
                    this.company.company_phone = response.data[0].company_phone;
                    this.company.company_email = response.data[0].company_email;
                    this.company.company_website = response.data[0].company_website;
                    this.company.flg = response.data[0].flg;
                }
                else{
                    this.company.flg = response.data[0].flg;
                }
            },
            error => {
                console.log('error');
            }
            );
        },
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
                    this.information.flg = 1;
                }
            },
            error => {
                console.log('error');
            }
            );
        },
        updateCompanyInfo: function() {
            axios
            .post("https://projectjobfinder01.herokuapp.com/users/update-company-by-username/", {
                "username": this.$store.getters.user.username,
                "company_name": this.updateCompany.company_name,
                "company_address": this.updateCompany.company_address,
                "company_phone": this.updateCompany.company_phone,
                "company_email": this.updateCompany.company_email,
                "company_website": this.updateCompany.company_website,
                "flg": 1
            })
            .then(
            response => {
                console.log("update company info success")
                this.getCompanyInfo();
            },
            error => {
                console.log("update company info fail")
                console.log(error);
            }
            );
        },
        updateUserInfo() {
            axios
            .post("https://projectjobfinder01.herokuapp.com/update-user-information-by-username", {
                "username": this.username,
                "fname": this.updateInfo.fname,
                "lname": this.updateInfo.lname,
                "email": this.updateInfo.email,
                "phone": this.updateInfo.phone,
                "citizenid": this.updateInfo.citizenid,
                "description": this.updateInfo.description,
                "profile_img": '#',
                "flg": 1
            })
            .then(
            response => {
                console.log('update success')
                this.getUserInfo();
            },
            error => {
                console.log(error);
            }
            );
        },
    },
    mounted(){
        this.getUserInfo();
        if(this.userrole == 'company'){this.getCompanyInfo();};
    }
}
</script>