'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.places
 * @description
 * # places
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('places', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    
    // Google API key AIzaSyDjqFrrexwOFxK8OQb6gDhslHir22W05ik

    // Public API here
    return $resource('https://crossorigin.me/https://maps.googleapis.com/maps/api/place/details/json', {}, { 

      query: {
        method:'GET',
        params:{
          key: 'AIzaSyDjqFrrexwOFxK8OQb6gDhslHir22W05ik',
          placeid: '@placeid' //'ChIJNwF_A-FbkFQRDDk_Nysa1Dg' //@currentPlaceId //'ChIJNwF_A-FbkFQRDDk_Nysa1Dg' //currentPlaceId // 
        },
        isArray:false
      }
    });




  });
