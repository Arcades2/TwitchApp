'use strict';

app.factory('auth', ['$http', '$q', ($http, $q) => {
   return {
       getUser: function(token) {
           let deferred = $q.defer();

           $http.get('https://api.twitch.tv/kraken?oauth_token=' + token)
           .then( (response) => {
               console.log(response.data);
               deferred.resolve(response.data);
           }, (err) => {
               deferred.reject(err.data);
           });
           
           return deferred.promise;
       }
   }; 
}]);