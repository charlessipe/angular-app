'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.loginEmail;
  $scope.loginPassword;

  $scope.createUser = function(){
      var email = $scope.userEmail;
      var password = $scope.userPassword;

      console.log(email);
      console.log(password);

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        consoloe.log(errorMessage);
        // ...
      });
  }  // end createUser

  });
