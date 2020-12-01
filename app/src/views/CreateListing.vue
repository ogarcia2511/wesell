<template>
  <div class="root col-sm-6">
    <h3>Create a Listing</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Product Name:"
        label-for="input-1"
        ><b-form-input
          id="input-1"
          v-model="form.productName"
          type="text"
          required
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Tagline:"
        label-for="input-2"
        description="Write a quick blurb for your product here."
        ><b-form-input
          id="input-1"
          v-model="form.blurb"
          type="text"
          required
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Full Description:"
        label-for="input-3"
        description="Add more details for your product here."
        ><b-form-textarea
          id="input-3"
          v-model="form.description"
          required
          ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Expected PPS (price per sale):"
        label-for="input-4"
        description="This is typically 8-10% of the product's cost.">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <!-- <input id="input-4" type="text" class="form-control"> -->
          <b-form-input type="number" step="0.01" min="0.00"/>
        </div>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Main Image:"
        label-for="input-5"
        description="Only images (.png, .jpg, etc) are allowed."
        ><b-form-file
          v-model="form.image"
          :state="Boolean(form.image)"
          accept="image/*"
          required
          id="input-5"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          ></b-form-file>
        <div class="mt-3"><b>Selected:</b> {{ form.image ? form.image.name : '' }}</div>
      </b-form-group>
      <b-button class="submit-btn" type="submit" variant="primary">Create</b-button>
      <b-button class="reset-btn" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      show: true,
      form: {
        productName: '',
        blurb: '',
        description: '',
        price: '',
        image: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const listing = this.form;
      listing.companyName = this.user.data.name;
      listing.vendorId = this.user.auth.uid;
      listing.price = this.form.price.toString();
      this.createNewListing(listing);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.productName = '';
      this.form.blurb = '';
      this.form.description = '';
      this.form.price = '';
      this.form.image = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.root {
  margin: auto;
}
.submit-btn {
  margin: 10px;
}
.reset-btn {
  margin: 10px;
}
</style>
