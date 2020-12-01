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
    Vue.getAllListings = function () {

    };

    // getListingById(): gets a listing by ID
    // params: listing id (number)
    // returns listing , returns null if no listing is found
    Vue.prototype.getListingById = function (id) {
      const result = db.collection('listings').doc(`${id}`).get()
        .then(docSnapshot =>{
          if (docSnapshot.exists){
            console.log("document data: ", docSnapshot.data());
            return docSnapshot.data();
          }else{
            console.log("no such document");
            return null;
          }
        }).catch(err=>{
          console.log(err);
          return null;
        });
      
      const getResult = async () => {
        const a = await result;
        console.log(a);
        return a ;
      }
      return getResult();
    
    };

    // getListingsByOwner(): gets all listings by a specific vendor
    // params: user id (number)
    // returns list of [ listing ]
    Vue.getListingsByOwner = function () {

    };

    // createNewListing(): creates a new listing
    // params: listing
    // returns isSuccessful (boolean)
    Vue.prototype.createNewListing = function (listing) {
      
      const tempdocRef = db.collection('listings').doc();
      const listingID = tempdocRef.id;
      listing.id = listingID;
      console.log(listing);
      db.doc(`listings/${listing.id}`)
        .set({
          id: listing.id,
          productName: listing.productName,
          blurb: listing.blurb,
          description: listing.description,
          price: listing.price
          })
          .catch(err => {
          console.log(err);
        });

    };
  },
}

