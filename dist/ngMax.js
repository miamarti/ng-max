(function () {
    'use strict';
    (angular.module('ngMax', ['ng'])).directive('ngMax', function () {
      return {
          restrict: 'A',
          scope: {
              ngModel: '=ngModel',
              ngMax: '=ngMax'
          },
          link: function (scope, elem) {
              elem.bind('keyup', function () {
                  scope.$apply(function () {
                      if (scope.ngModel && (scope.ngModel.replace(/\//g, '').length > scope.ngMax)) {
                          scope.ngModel = scope.ngModel.substring(0, scope.ngMax);
                      }
                  });
                  scope.$watch('ngModel', function (value) {
                      if (value) {
                          scope.ngModel = scope.ngModel.substring(0, scope.ngMax);
                      }
                  });
              });
          }
      };
  });
})(window, document);
