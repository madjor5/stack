(function(){
  'use strict';

  angular.module('app.users')
      .factory('userCurrentService', userCurrentService);

  userCurrentService.$inject = ['$log', '$q', '$http'];
  /* @ngInject */
  function userCurrentService($log, $q, $http) {
    // Array of fetched users
    var users = [];

    var service = {
      getUser: getUser,
      users: users
    }

    return service;

    function getUser(id) {
      $log.info(this);
      var q = $q.defer();
      var _this = this;
      if (this.users[id]) {
        q.resolve(users[id]);
      } else {
        $http.get('http://api.randomuser.me/?seed=e285619a403c515')
          .then(
            function(result) {
              _this.users[id] = result.data.results[0].user;
              q.resolve(_this.users[id]);
            },
            function(error) {
              $log.error(error);
              q.reject(error);
            }
          )
      }

      return q.promise;
    }
  }

}());
