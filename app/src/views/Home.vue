<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/logo.png">
    <ListingsList search=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListingsList from '@/components/ListingsList.vue';

export default {
  name: 'Home',
  components: {
    ListingsList,
  },
};
</script>

<style scoped>
#logo {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 2em;
}
</style>
