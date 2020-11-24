<template>
  <div id="app">
    <Navbar class="nb" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nb {
  margin-bottom: 50px;
}

#brand {
  margin-right: 50px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
