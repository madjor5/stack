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

  ioUserSummaryController.$inject = ['$log', '$mdDialog', 'userCurrentService'];

  function ioUserSummaryController($log, $mdDialog, userCurrentService) {
    var vm = this;

    // Mocked user information
    vm.user = {};
    userCurrentService.getUser(1)
        .then(function(result) {
          vm.user = result;
        });

    this.close = function() {
      $mdDialog.hide();
    }
  }
}());
