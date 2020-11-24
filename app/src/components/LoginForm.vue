<template>
  <div class="hello">
    <h1>Hello, welcome back to WeSell!</h1>
    <br>
    <form action="TODO: SEND DATA TO WEBPAGE TO BE PASSED ON TO FIREBASE" method="TBD">
        <ul>
            <li>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
            </li><br>
            <li>
                <label for="Password">Password:</label>
                <input type="password" id="pass" name="password" required><br>
            </li><br>
            <li class="button">
                <button type="submit">Login</button>
            </li>
            <br><br>
            <!-- TODO: Implement link to register page -->
            <p>New User? Register here!</p>
            <!--TODO: Implement forgot password functionality -->
            <p>Forgot password?</p>
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
