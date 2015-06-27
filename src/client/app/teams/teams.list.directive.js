(function() {
  'use strict';

  angular.module('app.teams')
    .directive('ioTeamList', ioTeamList);

  function ioTeamList() {
    var directive = {
      templateUrl: 'app/teams/teams.list.directive.html'
    };

    return directive;
  }
}());
