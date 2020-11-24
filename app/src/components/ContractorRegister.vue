<template>
  <div class="root col-sm-6">
    <h3>WeSeller Registration</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We won't share your email with anybody else."
        ><b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
        ><b-form-input
          type="password"
          id="input-2"
          v-model="form.password"
          required
          placeholder="hunter2"
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Name:"
        label-for="input-3"
        ><b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Enter name"
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-6"
        label="Date of Birth:"
        label-for="input-6"
        description="You must be at least 18 years old to become a WeSeller."
        ><b-form-datepicker
          id="input-6"
          v-model="form.birthday"
          :max="max"
          class="mb-2"
          ></b-form-datepicker>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Classification:"
        label-for="input-4"
        ><b-form-select
          id="input-4"
          v-model="form.classification"
          :options="classification"
          required
          ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox required value="can work" unchecked-value="rejected">
            I can legally work in the United States.
          </b-form-checkbox>
          <b-form-checkbox required value="accepted terms" unchecked-value="rejected">
            I accept the terms outlined above.
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button class="submit-btn" type="submit" variant="primary">Submit</b-button>
      <b-button class="reset-btn" type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    /* prevent those younger than 18 from becoming sellers.
       stays on the safe side of labor laws */
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() - 18);

    return {
      max: maxDate,
      form: {
        email: '',
        name: '',
        password: '',
        birthday: '',
        checked: [],
      },
      classification: [
        { text: 'Select One', value: null, disabled: true },
        { text: 'Full Time', value: 0 },
        { text: 'Part Time', value: 1 },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.password = '';
      this.form.birthday = '';
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.root {
  margin: auto;
}
.submit-btn {
  margin: 10px;
}
.reset-btn {
  margin: 10px;
}
</style>
