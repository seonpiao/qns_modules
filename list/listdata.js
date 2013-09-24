define(function (require) {
    var helpers = require('./$helpers');
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                i = $data.i,
                results = $data.results,
                $escape = $helpers.$escape,
                $string = $helpers.$string,
                $out = '';
            $out += '';
            for (var i = 0; i < results.length; i++) {
                $out += ' <div class="mod-media" data-albumid="';
                $out += $escape($string(results[i].albumId));
                $out += '" data-channelid="';
                $out += $escape($string(results[i].channelId));
                $out += '" data-widget-item="search-result"> <a class="pr fl" href="/play.html?tvid=';
                $out += $escape($string(results[i].firstTvid));
                $out += '&vid=';
                $out += $escape($string(results[i].firstVid));
                $out += '" data-delegate="go" data-page-tmplid="play" data-widget-link="img"> <img width="90" height="60" src="';
                $out += $escape($string(results[i].apic));
                $out += '" alt="" /> ';
                if (results[i].playTime) {
                    $out += ' <p class="picList_info picList_info-right">';
                    $out += $escape($string(results[i].playTime));
                    $out += '</p> ';
                }
                $out += ' </a> <div class="mod-media_body indexHeight-90_60 pr30"> <ul class="mod-media_info mod-media_info-normal"> <li><h4 class="white freeTitle"><a href="/play.html?tvid=';
                $out += $escape($string(results[i].firstTvid));
                $out += '&vid=';
                $out += $escape($string(results[i].firstVid));
                $out += '" data-widget-link="title" data-delegate="go" data-page-tmplid="play"> ';
                $out += $escape($string(results[i].name));
                $out += '</a></h4></li> <li>';
                $out += $escape($string(results[i].focus));
                $out += '</li> ';
                if (results[i].pubtime) {
                    $out += ' <li> <span>时间：</span> <span>';
                    $out += $escape($string(results[i].pubtime));
                    $out += '</span> </li> ';
                }
                $out += ' </ul> ';
                if (results[i].channel) {
                    $out += ' <a class="iconButton-1x iconButton-2x iconButton_detail" href="/';
                    $out += $escape($string(results[i].channel));
                    $out += '/a/';
                    $out += $escape($string(results[i].albumId));
                    $out += '.html" data-widget-link="album" data-delegate="go" data-page-tmplid="';
                    $out += $escape($string(results[i].channel));
                    $out += 'a" data-albumid="{{albumId}}"></a> ';
                }
                $out += ' </div> </div> <div class="hr"></div> ';
            }
            $out += ' ';
            if (results.length <= 0) {
                $out += ' <div style="margin: 90px auto;text-align: center;"> <p class="n-Data">暂无对应的筛选结果，请尝试其他类型，或使用搜索找您喜欢的内容。</p> <div> ';
            }
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        return new Render(data) + '';
    }
})