'use strict';

app.factory('getStreams', ($http, $q ) => {
    return {
        getFollowedStreams: function(clientID, token) {
            let deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.twitch.tv/kraken/streams/followed',
                headers: {
                    'Client-ID': clientID,
                    'Authorization': 'OAuth ' + token
                }
            })
            .then( (response) => {
                deferred.resolve(response.data);
            }, (err) => {
                deferred.reject(err.data);
             });

             return deferred.promise;
        },

        getTopStream: function(clientID) {
            let deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.twitch.tv/kraken/streams?limit=1',
                headers: {
                    'Client-ID': clientID
                }
            })
            .then( (response) => {
                deferred.resolve(response.data);
            }, (err) => {
                deferred.reject(err.data);
            });

            return deferred.promise;
        }
    };
});