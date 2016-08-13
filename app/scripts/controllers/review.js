'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ReviewCtrl', function ($scope, $firebaseObject) {
    
    // Firebase config
    var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://survey-pop.firebaseio.com/"
    };

    // Initialize Firebase
    firebase.initializeApp(config);

    // cache Firebase reference
    var surveyResponses = firebase.database().ref();

    $scope.getFormValues = function(){

      surveyResponses.child("businessProfile").child("signature-pointe").push({
        'name': "Signature Pointe",
        'code': $scope.surveyCode,
        'question1': $scope.question1,
        'question2': $scope.question2,
        'question3': $scope.question3,
        'question4': $scope.question4,
        'firstName': $scope.firstName,
        'lastName': $scope.lastName,
        'address': $scope.address

      })

      $scope.surveyCode = "";
      $scope.question1 = "";
      $scope.question2 = "";
      $scope.question3 = "";
      $scope.question4 = "";
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.address = "";

    }



  });
