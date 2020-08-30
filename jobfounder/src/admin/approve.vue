<template>
  <b-container>
    <h2>Admin Panel</h2>
    <!-- Jobs Loop -->
    <div :key="key" v-for="(job, key) in alljobs">
      <b-card :title="job.position+' | '+job.companyname" class="mb-3" v-if="job.check != 'reject'">
          <span class="badge badge-pill badge-dark">{{ job.check }}</span>
        <div class="d-flex justify-content-end">
            <b-button class="btn-success btn-sm mr-1" id="show-btn" @click="updateJobs(key, 'approve')"
            >Approve</b-button
            >
            <b-button class="btn-danger btn-sm mr-1" id="show-btn" @click="updateJobs(key, 'reject')"
            >Reject</b-button
            >
            <b-button class="btn-warning btn-sm mr-1" id="show-btn" @click="deleteJob(key)"
            >Delete</b-button
            >
            <b-button class="btn-sm" id="show-btn" @click="$bvModal.show(key)"
            >ดูรายละเอียดเพิ่มเติม</b-button
            >
        </div>
      </b-card>
      <!-- Modal -->
      <b-modal :id="key" size="lg" hide-footer>
        <template v-slot:modal-title>
          {{ job.position }} | <small> {{ job.companyname }} </small>
        </template>
        <div class="d-block text-center" v-html="job.detail"></div>
      </b-modal>
    </div>
    <!-- Jobs Loop -->
    <hr>
    <h2>Reject List</h2>
  </b-container>
</template>

<script>
import main from "@/main.js";
import firebase from "firebase";

export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace({ path: "/login" })
          // alert("You don't have a permission")
        }
    });
  },
  data() {
    return {
      alljobs: {},
      check: '',
      updateKey: '',
    };
  },
  methods: {
    updateJobs (key, check) {
        this.updateKey = key
        this.check = check
        main.jobsRef.child(this.updateKey).update({
            check: check,
        })
        if(this.check == 'approve'){
            this.$toast.open({
                message: "อนุมัติข้อมูล",
                position: "top-right",
                type: "success",
                duration: 3000,
                dismissible: true
            })
        }
        else{
            this.$toast.open({
                message: "ปฎิเสธข้อมูล",
                position: "top-right",
                type: "error",
                duration: 3000,
                dismissible: true
            })
        }
        this.updateKey = ''
    },
    deleteJob (key) {
        main.jobsRef.child(key).remove()
    }
  },
  mounted() {
    main.jobsRef.on("value", snapshot => {
      this.alljobs = snapshot.val();
    });
  },
};
</script>
