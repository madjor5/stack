(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsDetailsController', TeamsDetailsController);

  TeamsDetailsController.$inject = ['$log', '$stateParams', 'teamsService'];

  function TeamsDetailsController($log, $stateParams, teamsService) {
    var vm = this;
    vm.team = teamsService.getTeam($stateParams.Id);
    vm.members = teamsService.getTeamMembers($stateParams.Id);

    vm.teamlead = {
      searchTxt         : '',
      selectedItem      : null
    };

    vm.members.$promise.then(function(data) {
      $log.debug(data, vm.team);
      if (vm.team.Teamlead) {
        angular.forEach(vm.members, function(m) {
          if (m.PersonID === vm.team.Teamlead) {
            vm.teamlead.selectedItem = m;
            vm.teamlead.searchTxt = m.Name;
          }
        });
      }
    });

    vm.teamLeadTextChange = function() {
      // $log.debug('textchange', vm.teamlead);
    };

    vm.teamLeadItemChange = function(itm) {
      if (itm) {
        vm.teamlead.selectedItem = itm;
        vm.team.Teamlead = itm.PersonID;
      }
    };
  }
}());
