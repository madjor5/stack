(function() {
  'use strict';

  angular.module('app.layout')
    .controller('SidenavController', SidenavController);

  SidenavController.$inject = ['$log', 'Sidenav'];

  function SidenavController($log, Sidenav) {
    var vm = this;

    this.sidenav = Sidenav;
  }
}());
