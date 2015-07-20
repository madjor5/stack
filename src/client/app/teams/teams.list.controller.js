(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsListController', TeamsListController);

  TeamsListController.$inject = ['$log', '$state', '$mdDialog', 'teamsService'];

  function TeamsListController($log, $state, $mdDialog, teamsService) {
    var vm = this;
    $log.info('TeamsListController', vm, teamsService.getTeams());

    vm.teams = teamsService.getTeams(1);

    vm.goToTeam = function(team, event) {
      $log.info("goto", team, event);
      $state.go('teams.details', {Id: team.Id});
    }
  }
}());
