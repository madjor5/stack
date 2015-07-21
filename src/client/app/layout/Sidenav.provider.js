(function() {
  'use strict';

  angular.module('app.layout')
    .provider('Sidenav', SidenavProvider);

  function SidenavProvider() {
    var leftItems = [];

    var provider = {
      addItem: addItem,
      $get: function() {
        return leftItems;
      }
    };

    return provider;

    function addItem(name, href, sort) {
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
