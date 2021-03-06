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


    var surveyResponses = firebase.database().ref();  // initiate Firebase reference

    // Event handler to get business name from Firebase
    var eventHandler = function(snapshot) {
      
      if($scope.currentUserId == "c4fede9a-73e2-4083-a120-1eb9078c279b"){
        $scope.currentCompanyName = "signature-pointe";
      }
      else if ($scope.currentUserId == "h61hpzK50mU4j6jWT28ELPAqguZ2"){
        $scope.currentCompanyName = "the-retreat";
      }
      else if ($scope.currentUserId == "my5JiNHLWCQ9iCMik6XZEotqhAn1"){
        $scope.currentCompanyName = "cambridge-apartments";
      }
      else {
        $scope.currentCompanyName = "bye";
      }

      console.log("currentCompanyName is: " + $scope.currentCompanyName);
      var theCurrentCompany = $scope.currentCompanyName;

      $scope.theBusinessName = snapshot.child("businessProfile").child(theCurrentCompany).child("businessName").val(); // "The Business Name"
      $scope.surveyAnswers = snapshot.child("businessProfile").child(theCurrentCompany).child("surveyAnswers").val(); // "Signature Pointe Firebase object
      $scope.theQuestions = snapshot.child("businessProfile").child(theCurrentCompany).child("questions").val(); // "The Questions"
    };

    // tell surveyResponses to listen for the "value" event and then call the success callback, and then call another function where console.log will show the value of 
    // $scope.currentBusinessName to verify that the snapshot data is stored there

    surveyResponses.once("value").
      //then($scope.permissions).
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
      surveyResponses.child("businessProfile").child("cambridge-apartments").child("questions").push({  //make this dynamic
        'question': $scope.addQuestion
      })
      $scope.addQuestion = '';
    }


    });
