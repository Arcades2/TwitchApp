'use strict';

app.controller('mainController', ['$scope', 'auth', '$location', 'parse', 'getStreams', ($scope, auth, $location, parse, getStreams) => {
    var clientId = 'o7uz4yl43vuwdurmvikzjji7ixxvsv';
    var token;
    
    $scope.redirect = function() {
        window.location = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=' + clientId + '&redirect_uri=http://localhost:9000&force_verify=true&scope=user_read';
    };
    $scope.authenticated = false;
    
    if($location.hash()){
        token= parse.parse($location.hash(), '&').access_token;
    }

    if(token) {
        auth.getUser(token)
        .then( (data) => {
            $scope.authenticated = true;
            $scope.username = data.token.user_name;
            getStreams.getFollowedStreams(clientId, token)
                .then( (data) => {
                    console.log(data);
                }, (err) => {
                    console.log('error : ' + err);
                });
        }, (err) => {
            console.log('error : ' + err);
        });
    }
}]);