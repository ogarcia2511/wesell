<template>
  <div v-if="user.isLoggedIn" class="home">
    <template v-if="user.data.type == 0">
      <VendorProfile />
    </template>
    <template v-if="user.data.type == 1">
      <ContractorProfile />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import ContractorProfile from '@/components/ContractorProfile.vue';
import VendorProfile from '@/components/VendorProfile.vue';

export default {
  name: 'Profile',
  components: {
    VendorProfile,
    ContractorProfile,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>
