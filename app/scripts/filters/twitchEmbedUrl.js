'use strict';

app.filter('twitchEmbedUrl', function($sce) {
    return function(channelName) {
        return $sce.trustAsResourceUrl('http://player.twitch.tv/?channel=' + channelName);
    };
});