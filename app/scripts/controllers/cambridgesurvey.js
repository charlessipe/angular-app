'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CambridgesurveyCtrl
 * @description
 * # CambridgesurveyCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('CambridgesurveyCtrl', function ($scope, $firebaseObject) {
    
    // cache Firebase reference
    var surveyResponses = firebase.database().ref();

    $scope.getFormValues = function(){
      if($scope.surveyCode == "popcorn"){ // check password before push form inputs to Firebase
        surveyResponses.child("businessProfile").child("cambridge-apartments").child("surveyAnswers").push({
          'name': "Cambridge Apartments",
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

        $scope.surveySubmitSuccess = true;
        $scope.wrongSurveyCode = false;
      }
      else {
        $scope.wrongSurveyCode = true;
      }
    }

  });
