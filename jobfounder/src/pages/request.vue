<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col cols="8">
          <h4 class="text-center"><span style="font-weight: 800;font-size: 1.5em;">J</span>obs Detail</h4>
          <b-form-group label="ตำแหน่งที่รับสมัคร" label-for="position">
            <b-form-input
              id="position"
              v-model="form.position"
              type="text"
              required
              placeholder="ตำแหน่งที่รับสมัคร"
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group label="สกิลที่จำเป็น">
            <b-form-checkbox-group
              id="relateskill"
              v-model="form.relateskill"
              :options="skill_option"
              name="relateskill"
            ></b-form-checkbox-group>
          </b-form-group>
          <br />

          <b-row>
            <b-col cols="3">
              <b-form-group label="ประเภทงาน">
                <b-form-checkbox-group
                  id="typejob"
                  v-model="form.typejob"
                  :options="typeo"
                  name="typejob"
                ></b-form-checkbox-group>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="เงินเดือนขั้นต่ำ" label-for="minsalary">
                <b-form-input
                  id="minsalary"
                  v-model="form.minsalary"
                  type="number"
                  required
                  placeholder="min salary"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="เงินเดือนสูงสุด" label-for="maxsalary">
                <b-form-input
                  id="maxsalary"
                  v-model="form.maxsalary"
                  type="number"
                  required
                  placeholder="max salary"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group
                label="สัญญาจ้างขั้นต่ำ (เดือน)"
                label-for="mincontract"
              >
                <b-form-input
                  id="contract"
                  v-model="form.contract"
                  type="number"
                  required
                  placeholder="สัญญาจ้างขั้นต่ำ"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <br />

          <label for="">Other Detail & Remark*</label>
          <vue-editor v-model="form.detail"></vue-editor>
        </b-col>
        <b-col cols="4" style="border-left: 5px solid rgba(189, 189, 189, 0.35)">
          <h4 class="text-center"><span style="font-weight: 800;font-size: 1.5em;">C</span>ontact</h4>
          <b-form-group label="ข้อมูลบริษัท" label-for="company">
            <b-form-input
              id="companyname"
              v-model="form.companyname"
              type="text"
              required
              placeholder="ชื่อบริษัท"
            ></b-form-input>
          </b-form-group>
          <b-form-textarea
            id="companyaddress"
            v-model="form.companyaddress"
            placeholder="ที่อยู่บริษัท"
            rows="2"
            max-rows="6"
          ></b-form-textarea>
          <br>
          <b-form-group>
            <b-form-input
              id="companyphone"
              v-model="form.companyphone"
              type="text"
              required
              placeholder="เบอร์ติดต่อ"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="companymail"
              v-model="form.companymail"
              type="text"
              required
              placeholder="อีเมลติดต่อ"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="companysite"
              v-model="form.companysite"
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
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: {
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
        companysite: ""
      },
      typeo: [
        { text: "Full time", value: "Full time" },
        { text: "Part time", value: "Part time" },
        { text: "Internship", value: "Internship" }
      ],
      skill_option: [
        { text: "HTML", value: "HTML" },
        { text: "CSS", value: "CSS" },
        { text: "Javascript", value: "Javascript" },
        { text: "Vue.js", value: "Vue.js" },
        { text: "React", value: "React" },
        { text: "React Native", value: "React Native" },
        { text: "Flutter", value: "Flutter" },
        { text: "Node.js", value: "Node.js" },
        { text: "Django", value: "Django" },
        { text: "Python", value: "Python" },
        { text: "C", value: "C" }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.position = "";
      this.form.tselected = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped></style>
