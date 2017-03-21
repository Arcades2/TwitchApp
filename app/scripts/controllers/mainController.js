'use strict';

app.controller('mainController', ['$scope', 'auth', '$location', 'parse', 'getStreams', '$interval', ($scope, auth, $location, parse, getStreams, $interval) => {
  //Variables
  let clientId = 'o7uz4yl43vuwdurmvikzjji7ixxvsv';
  let token;

  /*****Scope*****/
  $scope.redirect = function () {
    window.location = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=' + clientId + '&redirect_uri=http://localhost:9000&force_verify=true&scope=user_read';
  };
  $scope.disconnect = function () {
                        $scope.authenticated = false;
                        token = "";
                        auth.removeCookie();
                      };
  $scope.authenticated = false;
  $scope.setActualStream = function(name) {
                            $scope.actualStream = name;
                            angular.element('html, body').animate({
                              scrollTop: angular.element('#player').offset().top - 20
                            }, 'slow');
                          };
  /*****EndScope*****/

  //Refresh of streams
  $interval(function() {
    getStreams.getFollowedStreams(clientId, token)
      .then( (response) => {
        $scope.streams = response.streams;
      }, (err) => {
        console.log('err:' + err);
      });
  }, 2*60*1000);

  function init() {
    // Authentication
    //get cookie or check if there is the token in the url
    if (auth.getCookie('token')) {
      token = auth.getCookie('token');
    } else if ($location.hash()) {
      token = parse.parse($location.hash(), '&').access_token;
    }

    // Get User infos
    // Get the username, the followed streams and set the cookie for the future authentication
    if (token) {
      auth.getUser(token)
        .then((data) => {
          $scope.authenticated = true;
          $scope.username = data.token.user_name;
          auth.setCookie(token);
          getStreams.getFollowedStreams(clientId, token)
            .then( (response) => {
              $scope.streams = response.streams;
            }, (err) => {
              console.log(err);
            });
        }, (err) => {
          console.log('error : ' + err);
        });
    }

    // Set a default stream
      getStreams.getTopStream(clientId)
        .then( (response) => {
          $scope.actualStream = response.streams[0].channel.name;
        }, (err) => {
          console.log(err);
      });
  };

  init();
}]);
