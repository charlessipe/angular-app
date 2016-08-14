'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('DashboardCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.businessName = "Signature Pointe";

    var surveyResponses = firebase.database().ref();

    // Event handler to get business name from Firebase
    var eventHandler = function(snapshot) {
      $scope.theBusinessName =  snapshot.child("businessProfile").child("signature-pointe").child("businessName").val(); // "Lovelace"
      $scope.surveyAnswers =  snapshot.child("businessProfile").child("signature-pointe").child("surveyAnswers").val(); // "Signature Pointe Firebase object
    };

    // tell surveyResponses to listen for the "value" event and then call the success callback, and then call another function where console.log will show the value of 
    // $scope.currentBusinessName to verify that the snapshot data is stored there

    surveyResponses.once("value").
      then(eventHandler).
      then(function() {
        console.log("I got the business name: " + $scope.theBusinessName); // should log the value stored in the $scope property by the event handler   
        console.log($scope.surveyAnswers);
        $scope.$apply(function(){});
      });




    });
