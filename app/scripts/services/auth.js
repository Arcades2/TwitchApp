'use strict';

app.factory('auth', ['$http', '$q', '$cookies', function($http, $q, $cookies) {
   return {
       getUser: function(token) {
           var deferred = $q.defer();

           $http.get('https://api.twitch.tv/kraken?oauth_token=' + token)
           .then( function(response) {
               deferred.resolve(response.data);
           }, function(err) {
               deferred.reject(err.data);
           });
           
           return deferred.promise;
       },

       setCookie: function(token) {
        $cookies.putObject('token', token);
       },

       getCookie: function() {
           return $cookies.getObject('token');
       },

       removeCookie: function() {
           $cookies.remove('token');
       }
   }; 
}]);