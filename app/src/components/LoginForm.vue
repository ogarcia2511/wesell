<template>
  <div class="container">
    <h1 class="d-flex justify-content-center">Hello, welcome back to WeSell!</h1>
    <br>
    <form action="javascript:firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
        // Signed in
        // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });">
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
  props: {},
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
