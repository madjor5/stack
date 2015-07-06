(function() {
  'use strict';

  angular.module('app.layout')
    .factory('SidenavService', SidenavService);

  SidenavService.$inject = ['$log'];

  function SidenavService($log) {
    var service = {
      addItem: addItem
    };

    var leftItems = [];

    return service;

    function addItem(name, href, sort) {
      alert('adding');
      var obj = {
        name: name,
        href: href
      };
      if (!sort) {
        sort = leftItems.length;
      }
      obj.sort = sort;

      leftItems[obj.sort] = obj;

      return leftItems;
    }

  }
}());
