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
      getTeamMembers: getTeamMembers
    };

    return service;

    function getTeams(page) {
      var Teams = $resource(baseURL + '/list');
      return Teams.query();
    }

    function getTeam(id) {
      var Team = $resource(baseURL + '/getteam/' + id);
      return Team.get();
    }

    function getTeamMembers(id) {
      var Members = $resource(baseURL + '/members/' + id);
      return Members.query();
    }
  }
}());
