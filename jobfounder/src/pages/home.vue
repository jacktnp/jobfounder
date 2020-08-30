<template>
  <b-container>
    <b-row>
        <b-col md="3" class="filter mb-4">
          <b-nav-form class="w-100">
            <b-form-input size="sm" class="mr-sm-2" style="width: 75%" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" style="width: 21%" type="submit">Search</b-button>
          </b-nav-form>
          <br>
          <br>
          <h4><b>Filter</b></h4>
          <p>- by skill</p>
          <b-badge :key="key" v-for="(skill, key) in allskill" href="#" variant="secondary" class="mr-1">{{ skill.skill }}</b-badge>
          <br>
          <br>
          <p>- by work type</p>
          <b-badge :key="key" v-for="(worktype, key) in allworktype" href="#" variant="dark" class="mr-1">{{ worktype.worktype }}</b-badge>
        </b-col>
        <b-col md="9" class="jobs">
            <!-- Jobs Loop -->
            <div :key="key" v-for="(job, key) in alljobs">
              <div @click="$bvModal.show(key)">
              <b-card v-if="job.check == 'approve'" :img-src="job.logo" :img-alt="job.companyname" img-left class="mb-4">
                <b-card-text>
                  <h4>{{ job.position }} <small><b>({{ job.companyname }})</b></small></h4>
                  <small :key="key" v-for="(askill, key) in job.relateskill" class="mr-1">#{{ askill }}</small>
                  <p>Salary : {{ job.minsalary }} - {{ job.maxsalary }} Baht</p>
                </b-card-text>
              </b-card>
              </div>
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
      allskill: {},
      allworktype: {},
    }
  },
  mounted () {
    main.jobsRef.on('value', (snapshot) => {
        this.alljobs = snapshot.val()
    }),
    main.skillRef.on('value', (snapshot) => {
        this.allskill = snapshot.val()
    }),
    main.worktypeRef.on('value', (snapshot) => {
        this.allworktype = snapshot.val()
    })
  }
}
</script>

<style>
.form-inline{
  width: 100%;
}
@media (max-width: 768px) {
  .filter{
    order: 2;
  }
  .jobs{
    order: 1;
  }
}
</style>