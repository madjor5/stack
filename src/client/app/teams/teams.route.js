(function() {
  'use strict';

  angular.module('app.teams')
    .config(['$stateProvider', '$urlRouterProvider', config]);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('teams', {
        url: '/teams',
        templateUrl: 'app/home/home.html'
      });
  }
}());
