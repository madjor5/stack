(function() {
  'use strict';

  // Api is at https://app.apiary.io/stack1/editor

  //var baseURL = 'http://private-de03c4-stack1.apiary-mock.com/';
  var baseURL = 'http://stack.api/api/team';

  angular.module('app.teams')
    .factory('teamsService', teamsService);

  teamsService.$inject = ['$resource', '$log'];

  /* @ngInject */
  function teamsService($resource, $log) {

    var service = {
      getTeams: getTeams
    };

    return service;

    function getTeams(page) {
      var Teams = $resource(baseURL);
      return Teams.query();
    }
  }
}());
