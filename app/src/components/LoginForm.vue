<template>
  <div class="root col-sm-6">
    <h3>Welcome Back!</h3>
    <br>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <b-form @submit="onSubmit">
            <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        ><b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
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
          ></b-form-input>
      </b-form-group>
            <b-button class="submit-btn" type="submit" variant="primary">Submit</b-button>
            <li class="nav-item d-flex justify-content-center">
                <router-link class="nav-link" active-class="active" to="/register">
                   New User? Register here!
                </router-link>
            </li>
            <!--TODO: Implement forgot password functionality -->
            <p class="d-flex justify-content-center">Forgot password?</p>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      error: null,
      form: {
        email: '',
        password: '',
      },
    };
  },
  props: {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      this.loginUser(email, password);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
