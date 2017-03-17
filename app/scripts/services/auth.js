'use strict';

app.factory('auth', ['$http', '$q', '$cookies', ($http, $q, $cookies) => {
   return {
       getUser: function(token) {
           let deferred = $q.defer();

           $http.get('https://api.twitch.tv/kraken?oauth_token=' + token)
           .then( (response) => {
               deferred.resolve(response.data);
           }, (err) => {
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