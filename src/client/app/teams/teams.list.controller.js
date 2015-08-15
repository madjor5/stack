(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsListController', TeamsListController);

  TeamsListController.$inject = ['$log', '$state', 'teamsService'];

  function TeamsListController($log, $state, teamsService) {
    var vm = this;

    vm.teams = teamsService.getTeams(1);

    vm.goToTeam = function(team, event) {
      $state.go('teams.details', {Id: team.TeamId});
    };

    vm.getTeamlead = function(team) {
      var tl = false;
      team.Members.forEach(function(member, count) {
        if (member.Teamlead) {
          tl = member;
        }
      });
      return tl;
    };
  }
}());
