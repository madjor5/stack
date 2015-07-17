(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsListController', TeamsListController);

  TeamsListController.$inject = ['$log', 'teamsService'];

  function TeamsListController($log, teamsService) {
    var vm = this;
    $log.info('TeamsListController', vm, teamsService.getTeams());

    vm.teams = teamsService.getTeams();
  }
}());
