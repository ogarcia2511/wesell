<template>
  <!-- eslint-disable max-len -->
  <div>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/">WeSell</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/about">About</router-link>
        </li>
        <li v-if="user.isLoggedIn && user.data.type == 0" class="nav-item">
          <router-link class="nav-link" active-class="active" to="/create">Create</router-link>
        </li>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <template v-if="user.isLoggedIn">
          <b-nav-item-dropdown right>
              <template #button-content>{{ user.data.name }} ({{ user.auth.email }})</template>
              <b-dropdown-item><router-link style="color:black" to="/profile">My Profile</router-link></b-dropdown-item>
              <b-dropdown-item>
                <router-link style="color:black" to="/mylistings">My Listings</router-link>
              </b-dropdown-item>
              <b-dropdown-item><b-button style="color:black" to ="/" @click.prevent="onSignOut">Sign Out</b-button></b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
          </li>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    onSignOut() {
      this.signOut();
    },
  },
};
</script>

<style scoped>

</style>
