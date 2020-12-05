<template>
  <div class="container">
    <h1 class="text-center">Active Sales Listings</h1>
    <OwnListing v-for="listing in notNullListings" :key="listing.id"
      :productName="listing.productName"
      :companyName="listing.companyName"
      :blurb="listing.blurb"
      :description="listing.description"
      :id="listing.id"
      :image="listing.image"
      :price="listing.price"
      :users="listing.users"
      :idToNameMap="idToNameMap"
      :sales="listing.sales" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OwnListing from '@/components/OwnListing.vue';

export default {
  components: { OwnListing },
  data() {
    return {
      listings: [],
      idToNameMap: {},
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
    notNullListings() {
      return this.listings.filter((l) => l !== null);
    },
  },
  async created() {
    const listingIds = await this.getListingsByOwner(this.user.auth.uid);
    const promises = [];

    listingIds.forEach((listingId) => {
      promises.push(this.getListingById(listingId));
    });

    Promise.all(promises)
      .then((res) => {
        for (let i = 0; i < res.length; i += 1) {
          this.listings.push(res[i]);
        }

        this.listings.forEach((listing) => {
          listing.users.forEach((uid) => {
            this.getContractorById(uid)
              .then((r) => {
                this.$set(this.idToNameMap, uid, r.name);
              });
          });
        });
      });
  },
};
</script>

<style scoped>

</style>
