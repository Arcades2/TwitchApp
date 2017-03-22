'use strict';

app.factory('getStreams', function($http, $q ) {
    return {
        getFollowedStreams: function(clientID, token) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.twitch.tv/kraken/streams/followed',
                headers: {
                    'Client-ID': clientID,
                    'Authorization': 'OAuth ' + token
                }
            })
            .then( function(response) {
                deferred.resolve(response.data);
            }, function(err) {
                deferred.reject(err.data);
             });

             return deferred.promise;
        },

        getTopStream: function(clientID) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.twitch.tv/kraken/streams?limit=1',
                headers: {
                    'Client-ID': clientID
                }
            })
            .then( function(response) {
                deferred.resolve(response.data);
            }, function(err) {
                deferred.reject(err.data);
            });

            return deferred.promise;
        }
    };
});