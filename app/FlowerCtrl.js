"use strict";

app.controller("FlowerCtrl", function( $scope, FlowerFactory) {

  $scope.flowers = [];
  FlowerFactory.getArrangements()
  .then ( (flowerArrangementArray) => {
    console.log(flowerArrangementArray);
    $scope.flowers = flowerArrangementArray;
    return $scope.flowers;
  });
});
