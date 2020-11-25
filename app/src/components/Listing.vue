<template>
  <div>
    <b-card no-body class="mb-1 dark">
      <b-card-header v-b-toggle:[id] header-tag="header" class="p-1" role="tab">
        <!-- <b-button block v-b-toggle.accordion-1
        class="mr-auto" variant="dark">Accordion 1</b-button> -->
        <h3>{{ productName }}</h3>
        <h5>{{ companyName }}</h5>
        <p>{{ blurb }}</p>
      </b-card-header>
      <b-collapse :id="id" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-row>
          <b-col cols="4">
            <b-card-img thumbnail fluid src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej.jpg"/>
          </b-col>
          <b-col cols="8">
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
export default {
  props: ['id', 'productName', 'companyName', 'blurb', 'description', 'photoLink'],
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
</style>
