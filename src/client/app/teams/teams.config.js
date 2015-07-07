(function() {
  'use strict';

  angular.module('app.teams')
    .config(['SidenavProvider', config]);

  function config(SidenavProvider) {
    SidenavProvider.addItem('Teams', 'teams');
  }
}());
