<template>
  <div>
    <b-button v-b-modal="modalId">Apply</b-button>
    <b-modal :id="modalId" title="Apply for this Listing" @ok="handleOk">
      <b-form>
        <b-form-group>

        </b-form-group>
        <b-form-group>
          <b-form-checkbox required name="accept terms">I accept the terms.</b-form-checkbox>
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
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      console.log(this.user.auth.uid);
      console.log(this.$props.listingId);
      // this.applyForListing(this.user.auth.uid, this.id);
      console.log('applied');
    },
  },
};
</script>

<style scoped>

</style>
