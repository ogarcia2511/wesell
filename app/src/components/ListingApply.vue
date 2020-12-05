<template>
  <div>
    <b-button class="btn btn-info" v-b-modal="modalId">Apply</b-button>
    <b-modal :id="modalId" title="Apply for this Listing" @ok="handleOk">
      <b-form>
        <b-form-group>

        </b-form-group>
        <b-form-group
          label="Upload a resume here."
          description=
          "This is optional -- the vendor will have access to your previous seller metrics.">
          <b-form-file required />
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['modalId', 'listingId'],
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    handleOk() {
      this.applyForListing(this.user.auth.uid, this.listingId);
    },
  },
};
</script>

<style scoped>

</style>
