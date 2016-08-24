'use strict';

describe('Controller: CambridgesurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var CambridgesurveyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CambridgesurveyCtrl = $controller('CambridgesurveyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CambridgesurveyCtrl.awesomeThings.length).toBe(3);
  });
});
