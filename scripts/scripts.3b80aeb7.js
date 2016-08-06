"use strict";angular.module("angularAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/review",{templateUrl:"views/review.html",controller:"ReviewCtrl",controllerAs:"review"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",["$scope","$http","current","places","$firebaseObject",function(a,b,c,d,e){var f={apiKey:"apiKey",authDomain:"projectId.firebaseapp.com",databaseURL:"https://survey-pop.firebaseio.com/"};firebase.initializeApp(f);var g=firebase.database().ref();a.submitSurvey=function(){var b=a.question1,c=a.question2,d=a.question3;g.push({question1:b,question2:c,question3:d}),console.log("survey submitted")},a.data=g,a.current=c.query(),setTimeout(function(){console.log(a.data)},1e3),a.places=d.query(),console.log(a.places),a.refreshCurrent=function(){a.current=c.query({location:a.location})}}]),angular.module("angularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=8d34b5da21d8bfcce9e172bf4c8a8264",{},{query:{method:"GET",params:{location:"Seattle,us"},isArray:!1}})}]),angular.module("angularAppApp").factory("yelp",["$resource",function(a){}]),angular.module("angularAppApp").factory("places",["$resource",function(a){return a("https://crossorigin.me/https://maps.googleapis.com/maps/api/place/details/json",{},{query:{method:"GET",params:{key:"AIzaSyDjqFrrexwOFxK8OQb6gDhslHir22W05ik",placeid:"ChIJNwF_A-FbkFQRDDk_Nysa1Dg"},isArray:!1}})}]),angular.module("angularAppApp").controller("ReviewCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").controller("DashboardCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>Survey Pop allows you to easily survey your customers and view their feedback in a simple dashboard.</p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <span class="label label-success">{{firstnum + secondnum}}</span> </div>'),a.put("views/dashboard.html",'<div class="row"> <div class="col-sm-12"> <h1>Survey Pop User Dashboard</h1> <h2>Find Out What Your Customers Are Thinking</h2> <p>Log In - Register</p> <p>Your Business Name: Signature Pointe <input type="text" name="businessName" ng-model="businessName"> <button class="btn btn-sm btn-primary" ng-click="changeBusiness()">Edit</button></p> <p><strong>Google Places Rating:</strong> {{places.result.rating}}</p> <p><strong>Latest Google Reviews:</strong></p><p> <div class="panel panel-info"> <div class="panel-body"> Review </div> <div class="panel-footer"><p>{{places.result.reviews[0].text}} <strong>{{places.result.reviews[0].rating}} Stars</strong></p></div> </div> <div class="panel panel-info"> <div class="panel-body"> Review </div> <div class="panel-footer"><p>{{places.result.reviews[1].text}} <strong>{{places.result.reviews[1].rating}} Stars</strong></p></div> </div> <div class="panel panel-info"> <div class="panel-body"> Review </div> <div class="panel-footer"><p>{{places.result.reviews[2].text}} <strong>{{places.result.reviews[2].rating}} Stars</strong></p></div> </div> <div class="panel panel-info"> <div class="panel-body"> Review </div> <div class="panel-footer"><p>{{places.result.reviews[3].text}} <strong>{{places.result.reviews[3].rating}} Stars</strong></p></div> </div> <div class="panel panel-info"> <div class="panel-body"> Review </div> <div class="panel-footer"><p>{{places.result.reviews[4].text}} <strong>{{places.result.reviews[4].rating}} Stars</strong></p></div> </div> </p><p>Add Question: <input type="text" name="question1" ng-model="question1"> <button class="btn btn-sm btn-primary" ng-click="submitQuestion()">Add Question</button></p> <h2>Current Survey Questions</h2> <p>Question 1: Tell us a general description of your experience. <input type="text" name="businessName" ng-model="currentQuestion"> <button class="btn btn-sm btn-primary">Edit</button></p><button class="btn btn-sm btn-primary">Show Responses</button> <p>Question 2: How was your interactions with our staff? <input type="text" name="businessName" ng-model="currentQuestion"> <button class="btn btn-sm btn-primary">Edit</button></p> <button class="btn btn-sm btn-primary">Show Responses</button> <p>Question 3: What do you not like about living here? <input type="text" name="businessName" ng-model="currentQuestion"> <button class="btn btn-sm btn-primary">Edit</button></p> <button class="btn btn-sm btn-primary">Show Responses</button> <p></p> </div> </div>'),a.put("views/main.html",'<div class="container"> <div class="row"> <div class="col-sm-12"> <h1>Survey Pop</h1> <h2>Find Out What Your Customers Are Thinking</h2> <p>Log In - Register</p> <p><a href="#/dashboard">View the User Dashboard</a></p> <p><a href="#/review">View the Survey</a></p> </div> </div> </div> <!--\n<div ng-app class="jumbotron" ng-controller="MainCtrl">\n  <h1>Weather for {{current.name}}</h1>\n  <p class="lead">\n    <div ng-init="location=\'Seattle\'">\n        <p>\n          <label for="location">Location:\n            <input type="text" name="location" ng-model="location">\n          </label>\n        </p>\n        <p>\n          <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button>\n        </p>\n      <dl>\n        <dt>Currently</dt>\n        <dd>{{current.weather[0].main}}</dd>\n        <dd>{{current.weather[0].description}}</dd>\n        <dt>Temperature</dt>\n        <dd>{{current.main.temp}}</dd>\n        <dt>Wind</dt>\n        <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd>\n        <dt>Clouds</dt>\n        <dd>{{current.clouds.all}}%</dd>\n      </dl>\n    </div>\n  </p>\n</div>\n--> <!--\n<div class="jumbotron">\n  <h1>Simple Customer Survey Software</h1>\n  <p class="lead">\n    <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br>\n    Always a pleasure scaffolding your apps.\n  </p>\n  <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>\n</div>\n\n<div class="row marketing">\n  <h4>HTML5 Boilerplate</h4>\n  <p>\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\n  </p>\n\n  <h4>Angular</h4>\n  <p>\n    AngularJS is a toolset for building the framework most suited to your application development.\n  </p>\n\n  <h4>Karma</h4>\n  <p>Spectacular Test Runner for JavaScript.</p>\n</div>\n-->'),a.put("views/review.html",'<h2>Complete the Survey Questions</h2> <form ng-submit="submitSurvey()"> <p>Enter Your Survey Code <input type="text" name="surveyCode" ng-model="surveyCode"></p> <p>Question 1: Tell us a general description of your experience.</p> <input type="text" class="form-control" ng-model="question1" placeholder="question 1" aria-describedby="basic-addon1"> <p>Question 2: How was your interactions with our staff? </p> <input type="text" class="form-control" ng-model="question2" placeholder="question 2" aria-describedby="basic-addon1"> <p>Question 3: What do you not like about living here?</p> <input type="text" class="form-control" ng-model="question3" placeholder="question 3" aria-describedby="basic-addon1"> <p>Enter your name and mailing address so we can mail you a $5 Starbucks Card.</p> <p>First Name <input type="text" name="surveyCode" ng-model="surveyCode"> </p> <p>Last Name <input type="text" name="surveyCode" ng-model="surveyCode"></p> <p>Mailing Address (to receive your $5 Starbucks Card) <input type="text" class="form-control" placeholder="address" aria-describedby="basic-addon1"> <input type="submit" id="submit" value="Submit">Submit </p><p>{{question1}} {{question2}} {{question3}}</p> </form>')}]);