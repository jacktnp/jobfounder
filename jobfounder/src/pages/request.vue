<template>
  <b-container class="mb-5">
    <b-form @submit.prevent="addJobs">
      <b-row>
        <b-col md="8">
          <h4 class="text-center"><span style="font-weight: 800;font-size: 1.5em;">J</span>obs Detail</h4>
          <b-form-group label="ตำแหน่งที่รับสมัคร" label-for="position">
            <b-form-input
              id="position"
              v-model="newJob.position"
              type="text"
              required
              placeholder="ตำแหน่งที่รับสมัคร"
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group label="สกิลที่จำเป็น">
            <b-form-checkbox-group id="relateskill" v-model="newJob.relateskill">
              <b-form-checkbox  :key="key" v-for="(subskill, key) in allskill" :value="subskill.skill">{{ subskill.skill }}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <br />

          <b-row>
            <b-col md="3">
              <b-form-group label="ประเภทงาน">
                <b-form-checkbox-group id="typejob" v-model="newJob.typejob">
                  <b-form-checkbox  :key="key" v-for="(subworktype, key) in allworktype" :value="subworktype.worktype">{{ subworktype.worktype }}</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="เงินเดือนขั้นต่ำ" label-for="minsalary">
                <b-form-input
                  id="minsalary"
                  v-model="newJob.minsalary"
                  type="number"
                  required
                  placeholder="min salary"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="เงินเดือนสูงสุด" label-for="maxsalary">
                <b-form-input
                  id="maxsalary"
                  v-model="newJob.maxsalary"
                  type="number"
                  required
                  placeholder="max salary"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group
                label="สัญญาจ้างขั้นต่ำ (เดือน)"
                label-for="mincontract"
              >
                <b-form-input
                  id="contract"
                  v-model="newJob.contract"
                  type="number"
                  required
                  placeholder="สัญญาจ้างขั้นต่ำ"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <br />

          <label for="">Other Detail & Remark*</label>
          <vue-editor v-model="newJob.detail"></vue-editor>
        </b-col>
        <b-col md="4" style="border-left: 5px solid rgba(189, 189, 189, 0.35)">
          <h4 class="text-center"><span style="font-weight: 800;font-size: 1.5em;">C</span>ontact</h4>
          <!-- Upload Test -->
          <div>
            <p>Logo Company (ratio 1:1)</p>
            <input type="file" @change="previewImage" accept="image/*" >
          </div>
          <div class="my-3">
            <p>Progress: {{uploadValue.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
          </div>
          <div v-if="imageData!=null">
              <img class="preview my-3" :src="newJob.logo" width="100%" height="100%" >
            <!-- <button class="btn btn-outline-dark w-100" @click="onUpload">Upload</button> -->
          </div>
          <!--  -->
          <b-form-group label="ข้อมูลบริษัท" label-for="company">
            <b-form-input
              id="companyname"
              v-model="newJob.companyname"
              type="text"
              required
              placeholder="ชื่อบริษัท"
            ></b-form-input>
          </b-form-group>
          <b-form-textarea
            id="companyaddress"
            v-model="newJob.companyaddress"
            placeholder="ที่อยู่บริษัท"
            rows="2"
            max-rows="6"
          ></b-form-textarea>
          <br>
          <b-form-group>
            <b-form-input
              id="companyphone"
              v-model="newJob.companyphone"
              type="text"
              required
              placeholder="เบอร์ติดต่อ"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="companymail"
              v-model="newJob.companymail"
              type="text"
              required
              placeholder="อีเมลติดต่อ"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="companysite"
              v-model="newJob.companysite"
              type="text"
              required
              placeholder="เว็บไซต์บริษัท"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="outline-success" class="w-100 my-3">ลงประกาศ</b-button>

        </b-col>
      </b-row>

      <!-- <b-button type="reset" variant="outline-danger" class="w-100 my-3">Reset</b-button> -->
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ allskill }}</pre>
    </b-card>
    <ul :key="key" v-for="(job, key) in alljobs">
        <li>{{ job.position }}</li>
    </ul> -->
  </b-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
import main from "@/main.js";
import firebase from "firebase";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      alljobs: {},
      allskill: {},
      allworktype: {},
      newJob: {
        position: "",
        relateskill: [],
        typejob: [],
        minsalary: "",
        maxsalary: "",
        contract: "",
        detail: "",
        companyname: "",
        companyaddress: "",
        companyphone: "",
        companymail: "",
        companysite: "",
        check: 'pending',
        logo: null
      },
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    addJobs: function () {
        // Upload Image
        this.newJob.logo = null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`,snapshot=>{
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.newJob.logo = url;
          });
        }
        );
        setTimeout(() => {
          // Add to DB
          main.jobsRef.push(this.newJob);
          this.newJob.position = '';
          this.newJob.relateskill = [];
          this.newJob.typejob = [];
          this.newJob.minsalary = '';
          this.newJob.maxsalary = '';
          this.newJob.contract = '';
          this.newJob.detail = '';
          this.newJob.companyname = '';
          this.newJob.companyaddress = '';
          this.newJob.companyphone = '';
          this.newJob.companymail = '';
          this.newJob.companysite = '';
          this.newJob.check = 'pending';
          this.newJob.logo = '';
          this.$toast.open({
            message: "ส่งข้อมูลสำเร็จ รออนุมัติจากผู้ดูแลระบบ",
            position: "top-right",
            type: "success",
            duration: 5000,
            dismissible: true
          });
        }, 2000);
    },
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    onUpload(){
      
    }
  },
  mounted () {
    main.jobsRef.on('value', (snapshot) => {
        this.alljobs = snapshot.val()
    });
    main.skillRef.on("value", snapshot => {
      this.allskill = snapshot.val();
    });
    main.worktypeRef.on("value", snapshot => {
      this.allworktype = snapshot.val();
    });
    // jobsRef.jobsRef.once('value').then((snapshot) => {this.alljobs = snapshot.val()})
  }
};
</script>

<style scoped>
</style>
