'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.  // 'firebase',
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]) 
  /*.config(function (AnalyticsProvider) {
  // Add configuration code as desired - see below 
  })*/

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl',
        controllerAs: 'review'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/mainvariation', {
        templateUrl: 'views/mainvariation.html',
        controller: 'MainvariationCtrl',
        controllerAs: 'mainvariation'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/retreatsurvey', {
        templateUrl: 'views/retreatsurvey.html',
        controller: 'RetreatsurveyCtrl',
        controllerAs: 'retreatsurvey'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

