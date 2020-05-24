<template>
  <b-container>
    <h2>Admin Panel</h2>
    <!-- Jobs Loop -->
    <div :key="key" v-for="(job, key) in alljobs">
      <b-card :title="job.position" class="mb-3">
        <div class="d-flex justify-content-end">
            <b-button class="btn-success btn-sm mr-1" id="show-btn" @click="updateJobs(key, 'approve')"
            >Approve</b-button
            >
            <b-button class="btn-danger btn-sm mr-1" id="show-btn" @click="updateJobs(key, 'reject')"
            >Reject</b-button
            >
            <b-button class="btn-sm" id="show-btn" @click="$bvModal.show(key)"
            >ดูรายละเอียดเพิ่มเติม</b-button
            >
        </div>
      </b-card>
      <!-- Modal -->
      <b-modal :id="key" size="lg" hide-footer>
        <template v-slot:modal-title>
          Using <code>$bvModal</code> Methods
        </template>
        <div class="d-block text-center">
          <h3>Hello From This Modal!</h3>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide(key)"
          >Close Me</b-button
        >
      </b-modal>
    </div>
    <!-- Jobs Loop -->
  </b-container>
</template>

<script>
import main from "@/main.js";

export default {
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
        this.updateKey = ''
    },
  },
  mounted() {
    main.jobsRef.on("value", snapshot => {
      this.alljobs = snapshot.val();
    });
  }
};
</script>
