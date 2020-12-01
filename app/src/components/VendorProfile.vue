<template>
  <!-- eslint-disable max-len -->
    <div>
    <div class="container">
      <div class="main-body">
          <!-- /Breadcrumb -->
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/businesses-need-seo-760x400.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>Kitton Mittons</h4>
                      <p class="text-secondary mb-1">Mittons for Kittons!</p>
                      <p class="text-muted font-size-sm">Bronx, NY</p>
                      <!-- TODO: Only show these if owner of profile -->
                      <button><router-link to="/create">Create New Listing</router-link></button><br><br>
                      <button action="TODO: Open edit page">Edit Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Website</h6>
                    <span class="text-secondary">ftp://kittonmittons.onion</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Email</h6>
                    <span class="text-secondary">kitton@kittonmittons.onion</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Mobile</h6>
                    <span class="text-secondary">(123)456-78910</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Instagram</h6>
                    <span class="text-secondary">kittmitton2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Facebook</h6>
                    <span class="text-secondary">sabucher99</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Who Are We?</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Here at Kitton Mittons, we are a home grown, organic family kitten mitten weavers!<br>
                      We offer the best prices on organic kittens to families who want quiet kitties without the waste!
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Our Values</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      We value reusability, recycling, and sustainable operations for our production.
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Awards</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      "Most innovative design" - Forbes Magazine, 2020
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Target Market</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      We would like to sell to families with kittens that are loud with their feet.
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Sales Location</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      New York City, NY: Door to Door
                    </div>
                  </div>
                  <hr>
                  <!-- <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Current Products</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Our current product line focuses on people who need cats, without the
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="row gutters-sm">
                <!-- <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">Open Contracts</h6>
                      <small>Calico - 80 % Sold</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Tabby - 72 % Sold</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Egyptian - 89 % Sold</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Norse - 55 % Sold</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="col-md mb-4">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">WeSeller Rating</h6>
                      <small>Overall</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Quality</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Responsiveness</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Reliability</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Friendliness</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <hr>
          </div>
          <hr>
          <div class="row-gutters">
            <h1 class="text-center">Active Sales Listings</h1>
<<<<<<< Updated upstream
            <Listing
              productName="Kitton Mitton Gen 1"
              companyName="kittonmitton Inc."
              blurb="Mittens that make your cat quiet!"
              :description="text"
              id="accordion-1" />

            <Listing
              productName="Kitton Mitton Gen 2"
              companyName="kittonmitton Inc."
              blurb="Our special synthetic fiber design cushions all kitten sounds in this exciting new product!"
              :description="text"
              id="accordion-1" />
=======
            <Listing v-for="listing in listings" :key="listing.id"
              :productName="listing.productName"
              :companyName="listing.companyName"
              :blurb="listing.blurb"
              :description="listing.description"
              :id="listing.id"
              :image="listing.image"
              :price="listing.price" />
>>>>>>> Stashed changes
          </div>
        </div>
        <hr>
        <div class="row-gutters">
          <h2 class="text-center">Incoming Applications</h2>
          <li>
            <ul v-for="app in applications" :key="app.id">
              {{ app.name }}, {{ app.users }}
              <b-button @click="this.acceptContractor(app.name, app.users[0])">Accept</b-button>
              <b-button @click="this.rejectContractor(app.name, app.users[0])">Reject</b-button>
            </ul>
          </li>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Listing from '@/components/Listing.vue';

export default {
  data() {
    return {
      listings: [],
      applications: [],
    };
  },
  components: {
    Listing,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  async created() {
    const listingIds = await this.getListingsByOwner(this.user.auth.uid);

    listingIds.forEach((listingId) => {
      this.getListingById(listingId)
        .then((res) => {
          this.listings.push(res);
          this.applications.push({ id: res.id, name: res.productName, users: res.applications });
        });

      this.listings.forEach(() => {
        this.applications.set('3', '1');
      });
    });
  },
};
</script>

<style scoped>
    body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
    }
    .main-body {
        padding: 15px;
    }
    .card {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1rem;
    }

    .gutters-sm {
        margin-right: -8px;
        margin-left: -8px;
    }

    .gutters-sm>.col, .gutters-sm>[class*=col-] {
        padding-right: 8px;
        padding-left: 8px;
    }
    .mb-3, .my-3 {
        margin-bottom: 1rem!important;
    }

    .bg-gray-300 {
        background-color: #e2e8f0;
    }
    .h-100 {
        height: 100%!important;
    }
    .shadow-none {
        box-shadow: none!important;
    }
</style>
