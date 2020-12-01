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

//file global constant used to interact with the databases
const db = firebase.firestore();
// const admin = require('firebase-admin');
// const fieldValue = admin.firestore.FieldValue;

firebase.auth().onAuthStateChanged((user) => {
  let data = null;

  if (user) {
    db.doc(`users/${user.uid}`)
      .get()
      .then((res) => { store.dispatch("setData", res.data()); });
  } else {
    data = null;
    store.dispatch("setData", data);
  }

  store.dispatch("setUser", user);
});


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
        .doc(user.uid)
        .set({
          name,
          classification,
          type,
        });

        db.collection("vendors")
        .doc(user.uid)
        .set({
          email,
          name,
          listings: []
        });

        this.$router.replace({ name: 'Home' });
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
        .doc(user.uid)
        .set({
          name,
          birthday,
          classification,
          type,
        });

        this.$router.replace({ name: 'Home' });
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
      - main image (String -- link to image)
      - expected price per sale (number)
      - users: Array of [ WeSellers id ]
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
    Vue.prototype.getAllListings = async function () {
      const snapshot = await db.collection('listings').get();
      return snapshot.docs.map(doc => doc.data());
    };

    // getListingById(): gets a listing by ID
    // params: listing id (number)
    // returns listing , returns null if no listing is found
    Vue.prototype.getListingById = async function (id) {
      const res = await db.collection('listings').doc(`${id}`).get();
      if (res.exists) {
        return res.data();
      } else {
        return null;
      }
    };

    // getListingsByOwner(): gets all listings by a specific vendor
    // params: user id (number)
    // returns list of [ listing ]
    Vue.prototype.getListingsByOwner = async function (vendorId) {
      console.log("click")
      let res = await db.doc(`vendors/${vendorId}`).get();
      console.log(res);
      let data = res.data();

      console.log(data.listings);
      return data.listings;
    };

    // createNewListing(): creates a new listing
    // params: listing
    // returns isSuccessful (boolean)
    Vue.prototype.createNewListing = function (listing) {
      let docRef = db.collection('listings').doc();
      const listingId = docRef.id;
      console.log(listing);
      console.log(docRef.id);
      docRef.set({
        id: listingId,
        productName: listing.productName,
        companyName: listing.companyName,
        blurb: listing.blurb,
        description: listing.description,
        price: listing.price,
        users: [],
        applications: [],
        sales: {},
        image: 'https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej.jpg',
        vendorId: listing.vendorId,
        })
        .catch(err => {
        console.log(err);
      });

      console.log("listing created!");
      docRef = db.doc(`vendors/${listing.vendorId}`);
      docRef.update({
        listings: firebase.firestore.FieldValue.arrayUnion(listingId),
      });
    };

    // applyForListing(): as a WeSeller, makes a request to join a listing
    // params: user id (String), listing id (String)
    // returns isSuccessful (bool)
    Vue.prototype.applyForListing = function (uid, listingId) {
      let docRef = db.doc(`listings/${listingId}`);

      docRef.update({
        applications: firebase.firestore.FieldValue.arrayUnion(uid),
      });
    };

    // getContractorById(): gets a contractor given uid
    Vue.prototype.getContractorById = async function (uid) {
      let res = await db.doc(`users/${uid}`).get();
      let data = res.data();

      return data;
    }

    // acceptContractor(): as vendor, accepts + adds WeSeller
    Vue.prototype.acceptContractor = function (uid, listingId) {
      let docRef = db.doc(`listings/${listingId}`);

      docRef.update({
        users: firebase.firestore.FieldValue.arrayUnion(uid),
        applications: firebase.firestore.FieldValue.arrayRemove(uid)
      });

      this.$router.go({
        name: "Home"
      });
    };

    // acceptContractor(): as vendor, rejects WeSeller
    Vue.prototype.rejectContractor = function (uid, listingId) {
      let docRef = db.doc(`listings/${listingId}`);

      docRef.update({
        applications: firebase.firestore.FieldValue.arrayRemove(uid)
      });

      this.$router.go({
        name: "Home"
      });
    };

    // logSale(): as user, logs a successful sale
    Vue.prototype.logSale = function (uid, listingId, n) {
      let docRef = db.doc(`listings/${listingId}`);

      docRef.update({
        sales: { uid: firebase.firestore.FieldValue.increment(n) }
      });
    };
  },
}

