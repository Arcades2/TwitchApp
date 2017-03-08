'use strict';

app.factory('parse', () => {
    return {
        parse: function(str, separator) {
            var parsed = {};
            var pairs = str.split(separator);
            for (var i = 0, len = pairs.length, keyVal; i < len; ++i) {
                keyVal = pairs[i].split("=");
                if (keyVal[0]) {
                    parsed[keyVal[0]] = keyVal[1];
                }
            }
            return parsed;
        }
    }
});