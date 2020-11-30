<template>
  <div class="home">
    <h1>WeSeller Profile Template</h1>
    <ProfileTemplate/>
    <h1>Vendor Profile Template</h1>
    <ProfileTemplateVendor/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileTemplate from '@/components/ProfileTemplate.vue';
import ProfileTemplateVendor from '@/components/ProfileTemplateVendor.vue';

export default {
  name: 'Profile',
  components: {
    ProfileTemplate,
    ProfileTemplateVendor,
  },
};
</script>
