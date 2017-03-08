'use strict';

app.controller('mainController', ['$scope', 'auth', '$location', 'parse', 'getStreams', ($scope, auth, $location, parse, getStreams) => {
  //Varibles
  let clientId = 'o7uz4yl43vuwdurmvikzjji7ixxvsv';
  let token;

  //Scope
  $scope.redirect = function () {
    window.location = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=' + clientId + '&redirect_uri=http://localhost:9000&force_verify=true&scope=user_read';
  };
  $scope.disconnect = function () {
    $scope.authenticated = false;
    token = "";
    auth.removeCookie();
  }
  $scope.authenticated = false;

  // Authentication

    if (auth.getCookie('token')) {
      console.log('cookie');
      token = auth.getCookie('token');
    } else if ($location.hash()) {
      console.log('hash');
      token = parse.parse($location.hash(), '&').access_token;
    }

  // Get User infos
  if (token) {
    auth.getUser(token)
      .then((data) => {
        $scope.authenticated = true;
        $scope.username = data.token.user_name;
        auth.setCookie(token);
      }, (err) => {
        console.log('error : ' + err);
      });
  }
}]);
