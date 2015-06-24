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

    return directive;
  }

  ioUserSummaryController.$inject = ['$log', '$mdDialog'];

  function ioUserSummaryController($log, $mdDialog) {
    var vm = this;

    this.close = function() {
      $mdDialog.hide();
    }
  }
}());
