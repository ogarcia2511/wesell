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
  // returns: id token (String)
  Vue.loginUser = function () {
  };
};
