/* External API for interfacing with backend.
  ESLint turned off for usability purposes. */

WeSellAPI.install = function (Vue, options) {

  // registerVendor(): registers a vendor account
  // params: email (String), name (String), password (String), classification (number)
  // returns isSuccessful (boolean)
  Vue.registerVendor = function () {
  };

  // registerContractor(): registers a contractor account
  // params: email (String), name (String), password (String), birthday (Unix timestamp), classification (number)
  // returns isSuccessful (boolean)
  Vue.registerContractor = function () {
  };

  // loginUser(): logs in a user
  // params: email (String), password (String)
  // returns user id (number), token (String)
  Vue.loginUser = function () {
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
};
