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

    // See https://firebase.google.com/docs/web/setup#project_setup for how to
    // auto-generate this config
    var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://survey-pop.firebaseio.com/"
    };

    firebase.initializeApp(config);

    var surveyResponses = firebase.database().ref();

    var businessProfile = firebase.database().ref("businessProfile/signature-pointe"); 

    /*
    $scope.submitSurvey = function(){
      var question1 = $scope.question1;
      var question2 = $scope.question2;
      var question3 = $scope.question3;

      surveyResponses.push({ 
        'question1': question1, 
        'question2': question2,
        'question3': question3 
      });

      console.log("survey submitted")
    } */
    

    $scope.submitAnswers = function(){
      businessProfile.push({
        'name': "Signature Pointe",
        'code': "12345",
        'question1': "It was awesome",
        'question2': "I will be back",
        'question3': "I highly recommend this business",
        'firstName': "First Name",
        'lastName': "Last Name",
        'address': "1234 Madison Ave. Newyork, NY 56123"

      })

      console.log("The first answer: " + $scope.question1);
      console.log("The second answer: " + $scope.question2);
      console.log("First name: " + $scope.firstName);

    }

    // Get the business name from Firebase
    $scope.getBusinessName = function(){
      surveyResponses.once("value")
        .then(function(snapshot) {
          //var firstName = snapshot.child("businessProfile/signature-pointe").val(); // "Ada"
          var businessName = snapshot.child("businessProfile").child("signature-pointe").child("-KOvfBfl4zb_dXDKS_k6").child("name").val(); // "Lovelace"

          console.log(businessName);
          return businessName;
        });
        
    }
    var currentBusinessName = $scope.getBusinessName();
    console.log(currentBusinessName);




    //var ref = new Firebase("https://survey-pop.firebaseio.com/");

    // download the data into a local object
    $scope.data = surveyResponses;



    $scope.current = current.query();

    setTimeout(function() { /*something*/ 
      console.log($scope.data);
    }, 1000);
    

    //$scope.yelp = yelp.query();

    $scope.places = places.query();

    console.log($scope.places);

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });

  };

    /*
    // Request API access: http://www.yelp.com/developers/getting_started/api_access
    var Yelp = require('yelp');

    var yelp = new Yelp({
      consumer_key: 'wfmrdaQihSpXxYS1YTwG1A',
      consumer_secret: '4pZdOhA4K1uyko7VhFHtly_N47k',
      token: 'G68wajA06Nij1dlq1coGDigKrc0TuK2M',
      token_secret: 'QtfGTrldDslaqGVZszWVxrQ-e1o',
    });

    // See http://www.yelp.com/developers/documentation/v2/search_api
    yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });
    */

  });