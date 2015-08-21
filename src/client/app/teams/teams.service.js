(function() {
  'use strict';

  // Api is at https://app.apiary.io/stack1/editor

  //var baseURL = 'http://private-de03c4-stack1.apiary-mock.com/';
  var baseURL = 'http://stack.api/api/teams';

  angular.module('app.teams')
    .factory('teamsService', teamsService);

  teamsService.$inject = ['$resource', '$log'];

  /* @ngInject */
  function teamsService($resource, $log) {

    var service = {
      getTeams: getTeams,
      getTeam: getTeam,
      getTeamMembers: getTeamMembers,
      updateTeam: updateTeam
    };

    var TeamArray = [];

    return service;

    function getTeams(page) {
      var Teams = $resource(baseURL);
      return Teams.query();
    }

    function getTeam(id) {
      var Team = $resource(baseURL + '/' + id);
      TeamArray[id] = Team;
      return Team.get();
    }

    function getTeamMembers(id) {
      var Members = $resource(baseURL + '/' + id + '/members');
      return Members.query();
    }

    function updateTeam(team) {
      team.$update();
      $log.info('test', team);
    }
  }
}());
