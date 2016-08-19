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

    $scope.businessName = "Acme Company"; // not used?

    var surveyResponses = firebase.database().ref();

    // Event handler to get business name from Firebase
    var eventHandler = function(snapshot) {
      $scope.theBusinessName = snapshot.child("businessProfile").child("signature-pointe").child("businessName").val(); // "The Business Name"
      $scope.surveyAnswers = snapshot.child("businessProfile").child("signature-pointe").child("surveyAnswers").val(); // "Signature Pointe Firebase object
      $scope.theQuestions = snapshot.child("businessProfile").child("signature-pointe").child("questions").val(); // "The Questions"
    };

    // tell surveyResponses to listen for the "value" event and then call the success callback, and then call another function where console.log will show the value of 
    // $scope.currentBusinessName to verify that the snapshot data is stored there

    surveyResponses.once("value").
      then(eventHandler).
      then(function() {
        console.log($scope.theBusinessName); // should log the value stored in the $scope property by the event handler   
        console.log($scope.surveyAnswers);
        console.log($scope.theQuestions);
        $scope.firstQuestion = $scope.theQuestions[Object.keys($scope.theQuestions)[0]].question; // cache the first question
        $scope.secondQuestion = $scope.theQuestions[Object.keys($scope.theQuestions)[1]].question; // cache the second question
        $scope.thirdQuestion = $scope.theQuestions[Object.keys($scope.theQuestions)[2]].question; // cache the third question
        $scope.fourthQuestion = $scope.theQuestions[Object.keys($scope.theQuestions)[3]].question; // cache the fourth question
        $scope.$apply();

        
      });


    //var obj = { first: 'someVal' };
    //obj[Object.keys(obj)[0]]; //returns 'someVal'
    //$scope.theQuestions[Object.keys(obj)[0]];

    $scope.submitQuestion = function(){
      surveyResponses.child("businessProfile").child("signature-pointe").child("questions").push({
        'question': $scope.addQuestion
      })
      $scope.addQuestion = '';
    }


    });
