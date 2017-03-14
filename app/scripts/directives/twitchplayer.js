'use strict';

app.directive('twitchplayer', () => {
    return {
        restrict: 'E',
        scope: {
            name: '=name'
        },
        templateUrl: '../../views/partial/twitchplayer.html'
    }
});