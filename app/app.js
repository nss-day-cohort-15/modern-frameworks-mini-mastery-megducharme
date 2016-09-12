"use strict";

var app = angular.module("FlowerShop", ["ngRoute"])
.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com/");

app.config(function($routeProvider) {

  $routeProvider.
    when("/", {
      templateUrl: "partials/flowershop.html",
      controller: "FlowerCtrl"
    }).

    otherwise("/");

});

app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
