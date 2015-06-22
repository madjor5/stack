(function() {
  'use strict';

  angular.module('app.layout')
    .controller('TopnavController', TopnavController);

  TopnavController.$inject = ['$mdDialog'];

  /* @ngInject */
  function TopnavController($mdDialog) {
    var vm = this;

    vm.user = {
      'ID'          : 1,
      'Name'        : 'Rolan Hunt',
      'Thumbnail'   : 'https://randomuser.me/api/portraits/med/men/23.jpg'
    }

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
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
