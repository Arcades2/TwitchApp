'use strict';

app.directive('thumbnail', function() {
    return {
        restrict: 'E',
        scope: {
            stream: '=stream'
        },
        templateUrl: '../../views/partial/thumbnail.html'
    };
});