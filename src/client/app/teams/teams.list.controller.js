(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsListController', TeamsListController);

  TeamsListController.$inject = ['$log', '$state', 'teamsFactory'];

  function TeamsListController($log, $state, teamsFactory) {
    var vm = this;
    vm.teams = teamsFactory.query();

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
