<template>
  <div class="root">
    <transition name="slide-fade">
    <div>
      <div class="welcome col-sm-6" v-if="!vendorSelect && !contractorSelect">
        <h3>Welcome.</h3>
        <p>We're so glad you decided to join our community of innovators and businesspeople.
          Click an account type below to begin the registration.</p>
      </div>
      <div class="row">
        <div class="selector col-sm-6" v-if="!vendorSelect && !contractorSelect">
          <button class="btn btn-primary" @click="vendorSelect = true">
            Register as Business
          </button>
        </div>
        <div class="selector col-sm-6" v-if="!vendorSelect && !contractorSelect">
          <button class="btn btn-primary" @click="contractorSelect = true">
            Register as WeSeller
          </button>
        </div>
      </div>
    </div>
    </transition>
    <transition name="slide-fade">
      <ContractorRegister v-if="contractorSelect"/>
      <VendorRegister v-if="vendorSelect"/>
    </transition>
  </div>
</template>

<script>
import ContractorRegister from '@/components/ContractorRegister.vue';
import VendorRegister from '@/components/VendorRegister.vue';

export default {
  components: { ContractorRegister, VendorRegister },
  data() {
    return {
      vendorSelect: false,
      contractorSelect: false,
    };
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
  transition: all .9s;
}
.root {
  margin: auto;
}
.welcome {
  text-align: center;
  margin: auto;
  padding-bottom: 20%;
}
.selector {
  text-align: center;
}
</style>
