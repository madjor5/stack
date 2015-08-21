(function() {
  'use strict';

  angular.module('app.teams')
    .factory('teamsFactory', teamsFactory);

  teamsFactory.$inject = ['$resource', '$log'];

  /* @ngInject */
  function teamsFactory($resource, $log) {
    return $resource('http://stack.api/api/teams/:id/:action',
      {
        id: '@TeamId'
      },
      {
        'update': {method: 'PUT'}
      });
  }
}());
