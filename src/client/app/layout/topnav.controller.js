(function() {
  'use strict';

  angular.module('app.layout')
    .controller('TopnavController', TopnavController);

  TopnavController.$inject = ['$mdDialog', 'userCurrentService'];

  /* @ngInject */
  function TopnavController($mdDialog, userCurrentService) {
    var vm = this;

    vm.user = {};

    userCurrentService.getUser(1).then(
      function(result) {
        vm.user = result;
      }
    )

    vm.showDialog = showDialog;


    function showDialog(ev) {
      $mdDialog.show({
        template: '<md-dialog aria-label="User Profile" flex-gt-md="50" class="user-summary"><io-user-summary user="' + vm.user.ID + '"></io-user-summary></md-dialog>',
        parent: angular.element(document.body),
        targetEvent: ev,
      });
    }
  }
}());
