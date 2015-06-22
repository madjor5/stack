(function() {
  'use strict';

  angular.module('app.users')
      .directive('ioUserSummary', ioUserSummary);

  /* @ngInject */
  function ioUserSummary() {
    var directive = {
        bindToController: true,
        controller: ioUserSummaryController,
        controllerAs: 'vm',
        restrict: 'EA',
        templateUrl: 'app/users/user.summary.directive.html'
    };

    ioUserSummaryController.$inject = ['$log'];

    function ioUserSummaryController($log) {
      $log.info('ioUserSummaryController', this);
    }

    return directive;
  }
}());
