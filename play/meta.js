define(function (require) {
    var helpers = require('./$helpers');
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                $out = '';
            $out += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/> <meta name="apple-touch-fullscreen" content="YES"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="format-detection" content="telephone=no">';
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        return new Render(data) + '';
    }
})