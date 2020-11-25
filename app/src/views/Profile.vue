<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProfileTemplate/>
      words words words
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileTemplate from '@/components/ProfileTemplate.vue';

export default {
  name: 'Profile',
  components: {
    ProfileTemplate,
  },
};
</script>
