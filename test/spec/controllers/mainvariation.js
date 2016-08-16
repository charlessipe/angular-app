'use strict';

describe('Controller: MainvariationCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var MainvariationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainvariationCtrl = $controller('MainvariationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainvariationCtrl.awesomeThings.length).toBe(3);
  });
});
