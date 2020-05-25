<template>
  <b-container>
    <h2>Config</h2>
    <b-row>
      <b-col md="6" style="border-right: 3px solid rgba(189, 189, 189, 0.35)">
        <b-form @submit.prevent="addSkill">
          <b-form-group label="Add new skill." label-for="skill">
            <b-form-input
              id="skill"
              v-model="skills.skill"
              type="text"
              required
              placeholder="Language or Framework"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-dark" class="w-100 my-3">Add Skill</b-button>
        </b-form>
        <b-list-group>
            <b-list-group-item :key="key" v-for="(skill, key) in allskill">{{ skill.skill }}</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col md="6">
          <b-form @submit.prevent="addWorktype">
          <b-form-group label="Add new work type." label-for="worktype">
            <b-form-input
              id="worktype"
              v-model="worktypes.worktype"
              type="text"
              required
              placeholder="Work Type"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-dark" class="w-100 my-3">Add WorkType</b-button>
        </b-form>
        <b-list-group >
            <b-list-group-item :key="key" v-for="(worktype, key) in allworktype">{{ worktype.worktype }}</b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0"><b>All Skill : </b>{{ allskill }}</pre>
      <br>
      <pre class="m-0"><b>All WorkType :</b> {{ allworktype }}</pre>
    </b-card>
    <ul :key="key" v-for="(job, key) in alljobs">
      <li>{{ job.position }}</li>
    </ul>
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
        //   alert("You don't have a permission")
        }
    });
  },
  data() {
    return {
      allskill: {},
      allworktype: {},
      skills: {
          skill: ""
      },
      worktypes: {
          worktype: ""
      }
    };
  },
  methods: {
    addSkill: function() {
      main.skillRef.push(this.skills);
      this.skills.skill = "";
      this.$toast.open({
        message: "เพิ่มข้อมูล Skill เรียบร้อย",
        position: "top-right",
        type: "success",
        duration: 4000,
        dismissible: true
      });
    },
    addWorktype: function() {
      main.worktypeRef.push(this.worktypes);
      this.worktypes.worktype = "";
      this.$toast.open({
        message: "เพิ่มข้อมูล Work Type เรียบร้อย",
        position: "top-right",
        type: "success",
        duration: 4000,
        dismissible: true
      });
    }
  },
  mounted() {
    main.skillRef.on("value", snapshot => {
      this.allskill = snapshot.val();
    });
    main.worktypeRef.on("value", snapshot => {
      this.allworktype = snapshot.val();
    });
  }
};
</script>
