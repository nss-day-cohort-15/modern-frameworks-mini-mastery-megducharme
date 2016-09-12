"use strict";

app.factory("FlowerFactory", ($q, $http, FirebaseURL) => {

  let getArrangements = () => {
    let arrangements = [];
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}arrangements.json`)
      .success((flowerArrangements) => {
      resolve(arrangements);
    });
  };
};
