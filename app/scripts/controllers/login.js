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
        console.log(errorMessage);
        // ...
      });
  }  // end createUser


  $scope.logInUser = function(){
    console.log("start login");

    var loginEmail = $scope.loginEmail;
    var loginPassword = $scope.loginPassword;

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(users.email);

    }).then(function(users) {  // then console.log login email and localId
      console.log(users.uid);
      console.log(users.email);
      $scope.currentUserId = users.uid;
      $scope.currentUserEmail = users.email;
      $scope.$apply();
    });
  } // end logInUser



  $scope.getAuth = function(){

    var user = firebase.auth().currentUser;


    var name, email, photoUrl, uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
    }

    console.log(name);
    console.log(email);
    console.log(uid);

  }

  });
