(function(){
  'use strict';

  angular.module('app.layout')
    .config(['$mdThemingProvider', config]);

  function config($mdThemingProvider) {
    $mdThemingProvider.theme('ioTheme')
      .primaryPalette('blue-grey', {
        'hue-1': '700',
        'hue-2': '100'
      })
      .accentPalette('blue');

    $mdThemingProvider.setDefaultTheme('ioTheme');
  }
}());
