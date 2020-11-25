<template>
  <div class="col-md-10" role="tablist">
    <Listing
      productName="Product Name"
      companyName="Test Co."
      blurb="A short paragraph describing
      the product itself. Maybe add a company
      name here?"
      :description="text"
      id="accordion-1" />

    <Listing
      productName="Product Name"
      companyName="Test Co."
      blurb="A short paragraph describing
      the product itself. Maybe add a company
      name here?"
      :description="text"
      id="accordion-2" />

    <Listing
      productName="Product Name"
      companyName="Test Co."
      blurb="A short paragraph describing
      the product itself. Maybe add a company
      name here?"
      :description="text"
      id="accordion-3" />

  </div>
</template>

<script>
import Listing from '@/components/Listing.vue';

export default {
  components: { Listing },
  props: ['search'],
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<style scoped>
.col-md-10 {
  margin: auto;
}
</style>
