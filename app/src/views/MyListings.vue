<template>
  <div class="home">
      <!-- TODO: Hide and show dynamically based on profile type -->
    <h1>WeSeller View   </h1>
    <WeSellerListings/>
    <h1>Vendor View</h1>
    <VendorListings/>
  </div>
</template>

<script>
// @ is an alias to /src
import WeSellerListings from '@/components/WeSellerListings.vue';
import VendorListings from '@/components/VendorListings.vue';

export default {
  name: 'MyListings',
  components: {
    WeSellerListings,
    VendorListings,
  },
};
</script>
