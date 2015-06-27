(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsController', TeamsController);

  TeamsController.$inject = ['$log'];

  function TeamsController($log) {
    var vm = this;

    vm.selectedTeam = null;
  }
}());
