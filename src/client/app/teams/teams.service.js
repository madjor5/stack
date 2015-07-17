(function() {
  'use strict';

  var baseURL = 'http://private-de03c4-stack1.apiary-mock.com/';

  angular.module('app.teams')
    .factory('teamsService', teamsService);

    teamsService.$inject = ['$resource', '$log']

    /* @ngInject */
    function teamsService($resource, $log) {
      var Teams = $resource(baseURL + 'teams', {
        page: 1
      });

      var service = {
        getTeams: getTeams
      };

      return service;

      function getTeams() {
        return Teams.query();
      }
    }
}());
