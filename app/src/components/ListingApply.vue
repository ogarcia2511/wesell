<template>
  <div>
    <b-button v-b-modal="modalId">Apply</b-button>
    <b-modal :id="modalId" title="Apply for this Listing" @ok="handleOk">
      <b-form @submit.stop.prevent="handleSubmit">
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
export default {
  props: ['modalId'],
  methods: {
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit(bvModalEvt);
    },
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>

<style scoped>

</style>
