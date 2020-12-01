/* External API for interfacing with backend.
  ESLint turned off for usability purposes. */

//import firebase so it can be used here
import firebase from 'firebase';
import store from './store';

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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("setUser", user);
});

//file global constant used to interact with the databases
const db = firebase.firestore();

export default {
  install(Vue, options) {

    Vue.prototype.signOut = function () {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.go({
          name: "Home"
        });
      });
    };

    // registerVendor(): registers a vendor account
    // params: email (String), name (String), password (String), classification (number), type (boolean)
    // returns isSuccessful (boolean)
    Vue.prototype.registerVendor = function (email, password, name, classification) {
      const type = 0;

      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const { user } = cred;

        db.collection("users")
        .add({
          uid: user.uid,
          name,
          classification,
          type,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    };

    // registerContractor(): registers a contractor account
    // params: email (String), name (String), password (String), birthday (Unix timestamp), classification (number), type (boolean)
    // returns isSuccessful (boolean)
    Vue.prototype.registerContractor = function (email, password, name, birthday, classification) {
      const type = 1;

      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const { user } = cred;

        db.collection("users")
        .add({
          uid: user.uid,
          name,
          birthday,
          classification,
          type,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    };

    // loginUser(): logs in a user
    // params: email (String), password (String)
    // returns user id (number), token (String)
    Vue.prototype.loginUser = function (email, password) {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        this.$router.replace({ name: 'Home' });
      })
      .catch((err) => {
        this.error = err.message;
      });
    };

    /* object definition: listing (what users see at a glance)
      - listing id (number) <-- primary key from db
      - product name (String)
      - company name (String)
      - blurb (String)
      - description (String)
      - vendor id (number)
      - vendor name (String)
      - main image (String -- link to image)
      - expected price per sale (number)
      -
    */

    // individual product pages are low priority and prob out of scope but
    // leaving the architecture here anyways.

    /* object definition: product -- expanded listings that include product history
      - listing
      - pictures: Array of [ image (String) ]
      - expanded description (String)
      - metrics?
    */

    // getAllListings(): gets all listings
    // params: none
    // returns list of [ listing ]
    Vue.getAllListings = function () {

    };

    // getListingById(): gets a listing by ID
    // params: listing id (number)
    // returns listing
    Vue.getListingById = function () {

    };

    // getListingsByOwner(): gets all listings by a specific vendor
    // params: user id (number)
    // returns list of [ listing ]
    Vue.getListingsByOwner = function () {

    };

    // createNewListing(): creates a new listing
    // params: listing
    // returns isSuccessful (boolean)
    Vue.createNewListing = function () {

    };
  },
}
