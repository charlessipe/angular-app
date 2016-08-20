'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $http, current, places, $firebaseObject) {  


    // Firebase config
    var config = {
      apiKey: "AIzaSyBEt5kwNoMYKzs6FWjS-rbgPQEhiGdofwc",
      authDomain: "survey-pop.firebaseapp.com",
      databaseURL: "https://survey-pop.firebaseio.com"
    };

    // Initialize Firebase
    firebase.initializeApp(config);

    // Check login status

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        $scope.currentUserEmail = user.email;
        $scope.currentUserId = user.uid;
        console.log($scope.currentUserEmail);
        console.log($scope.currentUserId);
        $scope.$apply();
      } else {
        console.log("Please log into your account");
      }
    });
    



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



    $scope.current = current.query();

    $scope.places = places.query();

    console.log($scope.places);

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });

  };


  });

