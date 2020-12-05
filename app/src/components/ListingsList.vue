<template>
  <div class="col-md-10" role="tablist">
    <b-row class="flex-nowrap">
      <b-col cols="5">
        <h4>Active Listings</h4>
      </b-col>
      <div class="input-group col-md-5" style="text-align: right; align-items: right;">
        <input class="form-control py-2" type="search" value="Search" id="example-search-input">
        <span class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
      <b-col class="text-right" cols="2" style="margin-right: 1.5em;">
        <b-dropdown right text="Sort" class="pull-left">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <hr>
    <Listing v-for="listing in listings" :key="listing.id"
      :productName="listing.productName"
      :companyName="listing.companyName"
      :blurb="listing.blurb"
      :description="listing.description"
      :id="listing.id"
      :image="listing.image"
      :price="listing.price" />
  </div>
</template>

<script>
import Listing from '@/components/Listing.vue';

export default {
  components: { Listing },
  props: ['query', 'listings'],
};
</script>

<style scoped>
.col-md-10 {
  margin: auto;
}
</style>
