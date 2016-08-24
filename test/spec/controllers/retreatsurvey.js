'use strict';

describe('Controller: RetreatsurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var RetreatsurveyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetreatsurveyCtrl = $controller('RetreatsurveyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RetreatsurveyCtrl.awesomeThings.length).toBe(3);
  });
});
