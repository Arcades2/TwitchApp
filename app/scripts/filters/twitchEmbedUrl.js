'use strict';

app.filter('twitchEmbedUrl', ($sce) => {
    return function(channelName) {
        return $sce.trustAsResourceUrl('http://player.twitch.tv/?channel=' + channelName);
    };
});