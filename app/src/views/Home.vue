<template>
  <div class="home">
    <img id="logo" alt="WeSell logo" src="../assets/logo.png">
    <h1 v-if="!user.isLoggedIn" class="d-flex justify-content-center">Welcome to WeSell!</h1>
    <h4 v-if="!user.isLoggedIn" class="d-flex justify-content-center" style="color:red">
      Come check out the hottest things selling right now!
    </h4>
    <br><br>
    <ListingsList v-if="user.isLoggedIn" search=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import ListingsList from '@/components/ListingsList.vue';

export default {
  name: 'Home',
  components: {
    ListingsList,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
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
