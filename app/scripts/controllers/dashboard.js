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

    $scope.robot = "I am Mr. Robot";

    var surveyResponses = firebase.database().ref();

    // Get the business name from Firebase
    $scope.getBusinessName = function(){
      surveyResponses.once("value")
        .then(function(snapshot) {
          //var firstName = snapshot.child("businessProfile/signature-pointe").val(); // "Ada"
          var businessName = snapshot.child("businessProfile").child("signature-pointe").child("businessName").val(); // "Lovelace"

          console.log(businessName);
          return businessName;
        });
        
    }
    var currentBusinessName = $scope.getBusinessName();
    console.log("The current business name is:" + currentBusinessName); // undefined

  });
