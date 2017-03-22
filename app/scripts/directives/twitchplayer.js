'use strict';

app.directive('twitchplayer', function() {
    return {
        restrict: 'E',
        scope: {
            name: '=name'
        },
        templateUrl: '../../views/partial/twitchplayer.html'
    };
});