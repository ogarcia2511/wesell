<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ListingsList search=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ListingsList from '../components/ListingsList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListingsList,
  },
};
</script>
