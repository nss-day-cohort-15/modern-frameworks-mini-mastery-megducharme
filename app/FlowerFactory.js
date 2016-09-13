"use strict";

app.factory("FlowerFactory", ($q, $http) => {

  let getArrangements = () => {
    console.log("inside the getArrangements function");
    return $q( (resolve, reject) => {
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((flowerArrangements) => {
      resolve(flowerArrangements);
    })
      .error( (error) => {
        reject(error);
      });
  });
}

return {getArrangements};

});
