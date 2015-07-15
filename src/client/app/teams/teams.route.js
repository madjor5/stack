(function() {
  'use strict';

  angular.module('app.teams')
    .config(['$stateProvider', '$urlRouterProvider', config]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/teams', '/teams/list');
    $stateProvider
      .state('teams', {
        url: '/teams',
        template: '<ui-view />'
      })
      .state('teams.list', {
        url: '/list',
        templateUrl: 'app/teams/teams.html'
      })
      .state('teams.details', {
        url: '/details',
        templateUrl: 'app/teams/teams.details.html',
        onEnter: function() {
          console.log('test');
        }
      });
  }
}());
