'use strict';

app.directive('thumbnail', () => {
    return {
        restrict: 'E',
        scope: {
            stream: '=stream'
        },
        templateUrl: '../../views/partial/thumbnail.html'
    };
});