<template>
  <div class="container">
    <h1 class="d-flex justify-content-center">Hello, welcome back to WeSell!</h1>
    <br>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <form @submit="onSubmit">
        <ul>
            <li class="d-flex justify-content-center">
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" required><br>
            </li><br>
            <li class="d-flex justify-content-center">
                <label for="Password">Password:</label>
                <input type="password" id="pass" name="password" required><br>
            </li><br>
            <li class="d-flex justify-content-center button">
                <button type="submit">Login</button>
            </li>
            <br><br>
            <li class="nav-item d-flex justify-content-center">
                <router-link class="nav-link" active-class="active" to="/register">
                   New User? Register here!
                </router-link>
            </li>
            <!--TODO: Implement forgot password functionality -->
            <p class="d-flex justify-content-center">Forgot password?</p>
        </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      error: null,
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
