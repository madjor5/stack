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
      angular.forEach(vm.members, function(m) {
        if (m.Teamlead === true) {
          vm.teamlead.selectedItem = m.MemberId;
          vm.teamlead.searchTxt = m.Firstname + m.Lastname;
          $log.debug("data", m, vm.teamlead);
        }
      });
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

    vm.updateTeam = function() {
      teamsService.updateTeam(vm.team);
    };
  }
}());
