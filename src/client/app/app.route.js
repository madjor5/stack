(function(){
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', config]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      });
  }
}());
