<template>
  <b-container>
    <b-row>
        <b-col cols="4">Sidebar</b-col>
        <b-col cols="8">
            <!-- Jobs Loop -->
            <div :key="key" v-for="(job, key) in alljobs">
                <b-card :title="job.position" :sub-title="job.type" class="mb-3" v-if="job.check == 'approve'">
                    <b-card-text>{{ job.minsalary }} - {{ job.maxsalary }} Baht | <b>{{ job.companyname }}</b></b-card-text>
                    <b-button id="show-btn" @click="$bvModal.show(key)">ดูรายละเอียดเพิ่มเติม</b-button>
                </b-card>
                <!-- Modal -->
                <b-modal :id="key" size="lg" hide-footer>
                    <template v-slot:modal-title>
                        {{ job.position }}
                    </template>
                    <div class="d-block text-center">
                        <h3>Hello From This Modal!</h3>
                    </div>
                    <b-button class="mt-3" block @click="$bvModal.hide(key)">Close Me</b-button>
                </b-modal>
            </div>
            <!-- Jobs Loop -->
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import main from "@/main.js";

export default {
  data() {
    return {
      alljobs: {},
    }
  },
  mounted () {
    main.jobsRef.on('value', (snapshot) => {
        this.alljobs = snapshot.val()
    })
  }
}
</script>