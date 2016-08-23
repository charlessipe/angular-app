'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $http, current, places, $firebaseObject, $q) {  


    // Firebase config
    var config = {
      apiKey: "AIzaSyBEt5kwNoMYKzs6FWjS-rbgPQEhiGdofwc",
      authDomain: "survey-pop.firebaseapp.com",
      databaseURL: "https://survey-pop.firebaseio.com"
    };

    // Initialize Firebase
    firebase.initializeApp(config);


    // Check login status function

    $scope.checkLoginStatus = function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user);
          $scope.currentUserEmail = user.email;
          $scope.currentUserId = user.uid;
          console.log($scope.currentUserEmail);
          console.log($scope.currentUserId);
          //$scope.permissions(); // call permissions function
          $scope.$apply();
        } else {
          console.log("Please log into your account");
        }
      });
    }() // end checkLoginStatus 

    /*
    var promise = $scope.checkLoginStatus();
      
    promise.then(function(){
      console.log("The currentUserId is: " + $scope.currentUserId);  
    });
    */

    /*
    var surveyResponses = firebase.database().ref();

    // get the survey code from Firebase

    $scope.getSurveyCode = function(){
      surveyResponses.once("value")
        .then(function(snapshot) {
          //var firstName = snapshot.child("businessProfile/signature-pointe").val(); // "Ada"
          var currentSurveyCode = snapshot.child("businessProfile").child("signature-pointe").child("surveyCode").val(); 

          console.log("The current survey code is: "+ currentSurveyCode);
          return currentSurveyCode;
        });
        
    }
    $scope.currentCode = $scope.getSurveyCode();

    */


    //var ref = new Firebase("https://survey-pop.firebaseio.com/");

    // download the data into a local object
    //$scope.data = surveyResponses;


    // async issue here
    setTimeout(function(){
      console.log("The currentUserId is: " + $scope.currentUserId);

      if($scope.currentUserId == "c4fede9a-73e2-4083-a120-1eb9078c279b"){  // conditional to set currentPlaceId
        $scope.currentPlaceId = "ChIJNwF_A-FbkFQRDDk_Nysa1Dg";
      }
      else if ($scope.currentUserId == "abc"){
        $scope.currentPlaceId = "another place Id";
      }
      else {
        $scope.currentPlaceId = "hi";
      }

      var currentPlaceId = $scope.currentPlaceId;

      console.log("currentPlaceId is: " + currentPlaceId);

      $scope.places = places.query({placeid: currentPlaceId});

      console.log($scope.places);

    },1000);


  });

