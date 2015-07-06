(function() {
  'use strict';

  angular.module('app.layout')
    .controller('SidenavController', SidenavController);

  SidenavController.$inject = ['$log', 'SidenavService'];

  function SidenavController($log, SidenavService) {
    var vm = this;
    
    $log.info(SidenavService.addItem('test', 'test'));
  }
}());
