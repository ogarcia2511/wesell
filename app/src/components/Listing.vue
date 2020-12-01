<template>
  <div>
    <b-card no-body class="mb-1 dark">
      <b-card-header v-b-toggle:[id] header-tag="header" role="tab">
        <!-- <b-button block v-b-toggle.accordion-1
        class="mr-auto" variant="dark">Accordion 1</b-button> -->
        <b-row>
          <b-col cols="8">
            <h3>{{ productName }}</h3>
            <h5>{{ companyName }}</h5>
            <p>{{ blurb }}</p>
          </b-col>
          <b-col cols="4" class="text-right">
            <button disabled class="price-box border border-success rounded">
              ${{ price }}/sale
            </button>
          </b-col>
        </b-row>
      </b-card-header>
      <b-collapse :id="id" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-row>
          <b-col cols="4">
            <b-card-img thumbnail fluid :src="image" />
          </b-col>
          <b-col cols="8">
            <template v-if="user.isLoggedIn && user.data.type == 1">
              <ListingApply :modalId="modalId" :listingId="id" />
            </template>
            <b-card-text>
              I start opened because <code>visible</code> is <code>true</code>
            </b-card-text>
            <b-card-text>{{ description }}</b-card-text>
          </b-col>
          </b-row>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListingApply from '@/components/ListingApply.vue';

export default {
  components: { ListingApply },
  props: ['id', 'productName', 'companyName', 'blurb', 'description', 'image', 'price'],
  data() {
    return {
      modalId: `m${this.id}`,
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>

<style scoped>
p {
  margin-top: 0;
  margin-bottom: 0;
}
b-card-img {
  width: 50;
  height: 50;
}
.price-box {
  font-family: monospace;
  color: green;
  padding: 2px;
}
</style>
