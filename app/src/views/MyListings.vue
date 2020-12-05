<template>
  <div v-if="user.isLoggedIn">
    <template v-if="user.data.type == 0">
      <VendorListings />
    </template>
    <template v-if="user.data.type == 1">
      <ContractorListings />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import ContractorListings from '@/components/ContractorListings.vue';
import VendorListings from '@/components/VendorListings.vue';

export default {
  name: 'MyListings',
  components: {
    ContractorListings,
    VendorListings,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>
