(function() {
  'use strict';

  angular.module('app.layout')
    .config(['$mdThemingProvider', config]);

  function config($mdThemingProvider) {
    $mdThemingProvider.theme('ioTheme')
      .primaryPalette('grey', {
        'hue-1': '700',
        'hue-2': '100'
      })
      .accentPalette('pink');

    $mdThemingProvider.theme('ioPurple')
      .primaryPalette('purple')
      .backgroundPalette('purple');

    $mdThemingProvider.setDefaultTheme('ioTheme');
  }
}());
