<template>
  <div>
    <b-card no-body class="mb-1 dark">
      <b-card-header v-b-toggle:[id] header-tag="header" role="tab">
        <b-row>
          <b-col cols="7">
            <h3>{{ productName }}</h3>
            <h5>{{ companyName }}</h5>
            <p>{{ blurb }}</p>
          </b-col>
          <b-col cols="5" class="text-right">
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
            <b-row>
              <b-col cols="4">
                <b-button class="btn btn-danger" @click="exitContract(user.auth.uid, id)">
                  Exit Contract
                </b-button>
              </b-col>
              <b-col cols="8">
                <b-form class="flex-box">
                    <b-form-input
                      type="number"
                      class="col-sm-8"
                      v-model="sales" />
                    <b-button
                      class="btn btn-success"
                      style="float: right;"
                      @click="logSale(user.auth.uid, id, sales)">
                        Log Sales
                    </b-button>
                </b-form>
              </b-col>
            </b-row>
            <hr>
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

export default {
  props: ['id', 'productName', 'companyName', 'blurb', 'description', 'image', 'price'],
  data() {
    return {
      modalId: `m${this.id}`,
      sales: 0,
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
  margin-right: 1em;
}

.flex-box {
  display:flex;
  justify-content:space-between;
}
</style>
