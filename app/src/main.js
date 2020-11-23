import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDvQi2fZdSawJCkCH9bgB05XXiU5q2_tR8',
  authDomain: 'wesell-404.firebaseapp.com',
  databaseURL: 'https://wesell-404.firebaseio.com',
  projectId: 'wesell-404',
  storageBucket: 'wesell-404.appspot.com',
  messagingSenderId: '822118370983',
  appId: '1:822118370983:web:1afc48083871ef6b721582',
  measurementId: 'G-090KKWJK56',
};

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
