<template>
  <div class="home">
    <h1 class="d-flex justify-content-center">Welcome to WeSell! Where dreams come true</h1>
    <h4 class="d-flex justify-content-center" style="color:red">Come check out the hottest things selling right now!</h4>
    <br><br>
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
