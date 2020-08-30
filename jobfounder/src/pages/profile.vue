<template>
    <b-container class="my-5">
        <b-row>
            <b-col lg="3" md="4">
                 <b-img src="https://picsum.photos/125/125/?image=58" rounded="circle" class="w-100"></b-img>
                 <h3 class="mt-4">
                     <i class="far fa-building" v-if="userrole == 'company'" />
                     <i class="far fa-chalkboard-teacher" v-else-if="userrole == 'instructor'" />
                     <i class="far fa-user-graduate" v-else-if="userrole == 'student'" />
                     SuphakitNch
                 </h3>
                 <p>Text here...</p>
                 <div v-if="userrole == 'company'">
                    <hr>
                    <h5 class="my-3"># Company Information</h5>
                    <p><i class="far fa-building" /> Company name</p>
                    <p><i class="far fa-map-marker-alt" /> Company address</p>
                    <p><i class="far fa-phone" /> Company phone</p>
                    <p><i class="far fa-envelope" /> Company email</p>
                    <p><i class="far fa-browser" /> Company website</p>
                 </div>
                 <div>
                    <hr>
                    <h5 class="my-3"># Personal Information</h5>
                    <p v-if="userrole != 'company'">
                        <i class="far fa-university"></i> KMITL Faculty of Information Technology
                    </p>
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
                    <b-form @submit="onSubmit">
                        <b-row>
                            <b-col md="6">
                                <b-form-group
                                    id="lfname"
                                    label="First name:"
                                    label-for="fname"
                                >
                                    <b-form-input
                                    id="fname"
                                    v-model="update.fname"
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
                                    v-model="update.lname"
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
                                    v-model="update.email"
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
                                    v-model="update.phone"
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
                                    v-model="update.citizenid"
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
                                    v-model="update.description"
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
                    <b-form @submit="onSubmit">
                        <b-row>
                            <b-col md="6">
                                <b-form-group
                                    id="lcompany_name"
                                    label="Company name:"
                                    label-for="company_name"
                                >
                                    <b-form-input
                                    id="company_name"
                                    v-model="company.company_name"
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
                                    v-model="company.company_address"
                                    type="text"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    id="laddrcompany_phoneess"
                                    label="Phone:"
                                    label-for="addrcompany_phoneess"
                                >
                                    <b-form-input
                                    id="addrcompany_phoneess"
                                    v-model="company.addrcompany_phoneess"
                                    type="addrcompany_phoneess"
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
                                    v-model="company.company_email"
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
                                    v-model="company.company_website"
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
                    <profileStudent v-if="userrole == 'student'" />
                    <profileInstructor v-else-if="userrole == 'instructor'" />
                    <profileCompany v-else-if="userrole == 'company'" />
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import profileStudent from '@/components/profile-student'
import profileInstructor from '@/components/profile-instructor'
import profileCompany from '@/components/profile-company'

export default {
    components: {
        profileStudent, profileInstructor, profileCompany
    },
    data(){
        return{
            userrole: this.$store.getters.user.role,
            update: {
                fname: '',
                lname: '',
                email: '',
                phone: '',
                citizenid: '',
            },
            company: {
                username: '',
                company_name: '',
                company_address: '',
                addrcompany_phoneess: '',
                company_email: '',
                company_website: ''
            }
        }
    },
    methods:{
        authUser() {
        axios
            .get("https://projectjobfinder01.herokuapp.com/users/get-member-by-id/"+this.$store.getters.user.id)
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
    },
    mouted(){

    }
}
</script>