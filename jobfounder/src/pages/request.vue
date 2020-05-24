<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        label="ตำแหน่งที่รับสมัคร"
        label-for="position"
      >
        <b-form-input
          id="position"
          v-model="form.position"
          type="text"
          required
          placeholder="ตำแหน่งที่รับสมัคร"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="ประเภทงาน">
        <b-form-checkbox-group
          id="typejob"
          v-model="form.typejob"
          :options="typeo"
          name="typejob"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-row>
        <b-col cols="4">
          <b-form-group
            label="เงินเดือนขั้นต่ำ"
            label-for="minsalary"
          >
            <b-form-input
              id="minsalary"
              v-model="form.minsalary"
              type="number"
              required
              placeholder="เงินเดือนขั้นต่ำ"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="เงินเดือนสูงสุด"
            label-for="maxsalary"
          >
            <b-form-input
              id="maxsalary"
              v-model="form.maxsalary"
              type="number"
              required
              placeholder="เงินเดือนสูงสุด"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="สัญญาจ้างขั้นต่ำ (เดือน)"
            label-for="mincontract"
          >
            <b-form-input
              id="contract"
              v-model="form.contract"
              type="number"
              required
              placeholder="สัญญาจ้างขั้นต่ำ (เดือน)"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        position: "",
        typejob: [],
        minsalary: '',
        maxsalary: '',
        contract: '',
      },
      typeo: [
        { text: "Full time", value: "Full time" },
        { text: "Part time", value: "Part time" },
        { text: "Internship", value: "Internship" }
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
