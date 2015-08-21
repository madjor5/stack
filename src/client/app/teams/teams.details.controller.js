(function() {
  'use strict';

  angular.module('app.teams')
    .controller('TeamsDetailsController', TeamsDetailsController);

  TeamsDetailsController.$inject = ['$log', '$stateParams', 'teamsFactory', 'teamsService'];

  function TeamsDetailsController($log, $stateParams, teamsFactory, teamsService) {
    var vm = this;
    vm.team = teamsFactory.get({id: $stateParams.Id});
    vm.members = teamsFactory.query({id: $stateParams.Id, action: 'members'});

    vm.teamlead = {
      searchTxt         : '',
      selectedItem      : null
    };

    vm.members.$promise.then(function(data) {
      angular.forEach(vm.members, function(m) {
        if (m.Teamlead === true) {
          vm.teamlead.selectedItem = m.MemberId;
          vm.teamlead.searchTxt = m.Firstname + m.Lastname;
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
      $log.info(vm.team);
      vm.team.$update();
    };
  }
}());
