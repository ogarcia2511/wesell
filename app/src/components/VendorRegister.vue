<template>
  <div class="root col-sm-6">
    <h3>Business Registration</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Enter an email for your organization's primary point of contact."
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
        label="Company Name:"
        label-for="input-3"
        ><b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Enter name"
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Organizational Type:"
        label-for="input-4"
        ><b-form-select
          id="input-4"
          v-model="form.classification"
          :options="classification"
          required
          ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-5">
        <b-form-checkbox required name="input-5">
          I can legally hire contractors in the United States.
        </b-form-checkbox>
      </b-form-group>
      <b-form-group id="group-7">
        <b-form-checkbox required name="input-7">
          I accept the terms and conditions above.
        </b-form-checkbox>
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
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
      classification: [
        { text: 'Select One', value: null, disabled: true },
        { text: 'Sole Proprietorship', value: 0 },
        { text: 'LLC', value: 1 },
        { text: 'Corporation', value: 2 },
        { text: '501(c)(3)', value: 3 },
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
