define(function (require) {
    var helpers = require('./$helpers');
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                i = $data.i,
                selected_album = $data.selected_album,
                $escape = $helpers.$escape,
                $string = $helpers.$string,
                $out = '';
            $out += ' <!DOCTYPE html> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/> <meta name="apple-touch-fullscreen" content="YES"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="format-detection" content="telephone=no"> <link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://www.qiyipic.com/20130423143600/fix/H5-57x57.png"/> <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://www.qiyipic.com/20130423143600/fix/H5-72x72.png"/> <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://www.qiyipic.com/20130423143600/fix/H5-114x114.png"/> <title>猜你喜欢</title> <link rel="stylesheet" type="text/css" href="http://static.qiyi.com/css/201308301542/h5.css"/> </head> <body> <!-- 头部 开始 --> <header class="header-index"> <section class="mod-header bd-pd clearfix"> <h1 class="topLogo"> <a href="/index.html#stat_logo" data-delegate="go" data-page-tmplid="index" class="logo">爱奇艺</a> </h1> <div class="topMenu"> <a href="/search.html#stat_search" data-header-btnelem="search" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> <a href="/billboard.html" data-header-btnelem="billboard" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_rank"></i></a> <a href="/user.html" data-header-btnelem="user" data-delegate="go" data-page-tmplid="user" class="dib"><i class="iconButton-1x iconButton-2x iconButton_personal"></i></a> <a href="/record.html" data-header-btnelem="record" data-delegate="go" data-page-tmplid="user" class="dib pr"><i class="iconButton-1x iconButton-2x iconButton_playRec"></i><i class="updateTip dn"></i></a> </div> </section> <nav class="mod-mainNav"> <div class="header_opt header_opt-title"> <div class="header_opt_left"><a class="iconButton-1x iconButton-2x iconButton_goBack" href="javascript:history.back()"></a></div> <div class="header_opt_center textOverflow"> <a class="fs14"><span>猜你喜欢</span></a> </div> <div class="header_opt_right"> <a class="iconButton-1x iconButton-2x iconButton_goHome" href="/index.html"></a> </div> </div> </nav> </header> <!-- 头部 结束 --> <!-- 内容 开始 --> <section class="h5_wrap bd-pd"> <!-- 此处的外层div没有mb15 --> <div class="mt15"> <ul class="picList_90-118-flow" data-widget-container="list"> ';
            for (var i = 0; i < selected_album.length; i++) {
                $out += ' <li> <div> <a class="picList_pic" href="';
                $out += $escape($string(selected_album[i].path));
                $out += 'a/';
                $out += $escape($string(selected_album[i].album_id));
                $out += '.html" title=""> <img width="90" height="120" src="';
                $out += $escape($string(selected_album[i].pic_url));
                $out += '" alt="" /> <p class="picList_info picList_info-right">';
                $out += $escape($string(selected_album[i].time_length));
                $out += '</p> <p class="picList_type picList_type-hd">超清</p> </a> <p class="picList_title"> <a class="picList_title_main textOverflow" href="';
                $out += $escape($string(selected_album[i].path));
                $out += 'a/';
                $out += $escape($string(selected_album[i].album_id));
                $out += '.html">';
                $out += $escape($string(selected_album[i].album_name));
                $out += '</a> </p> </div> </li> ';
            }
            $out += ' </ul> </div> </section> <!-- 内容 结束 --> <!-- 底部 开始 --> <footer class="h5_footer"> <!--搜索框--> <div class="searchBox fbLeft mb25"> <div class="searchBox_input"> <a class="input-block-level footer_input" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"></a> </div> <div class="searchBox_btn"> <a class="btn-primary" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> </div> </div> <!--搜索框end--> <!--帮助反馈这一行--> <div class="fbJustify mb25"> <div><a href="http://www.iqiyi.com/?src=fromhtml5bottempc" data-elem="pc" title="pc版"><i class="icon-1x icon-2x icon_pc mr5"></i><span class="vl">PC版</span></a></div> <div><a href="/feedback.html?entry=phoneshouye" data-delegate="go" data-page-tmplid="feedback" title="用户反馈"><i class="icon-1x icon-2x icon_feedback mr5"></i><span class="vl">用户反馈</span></a></div> <div><a href="javascript:void(0)" title="回顶部" data-widget-totop="totop"><i class="icon-1x icon-2x icon_toTop mr5"></i><span class="vl">回顶部</span></a></div> </div> <!--帮助反馈这一行end--> <!--公司介绍这一行--> <div class="footer_links mb25"> <span><a href="http://www.iqiyi.com/common/aboutus.html">公司介绍</a></span> <span><a href="http://www.iqiyi.com/common/news.html">新闻动态</a></span> <span><a href="http://www.iqiyi.com/common/contactus.html">联系方式</a></span> <span><a href="http://www.iqiyi.com/common/employ.html">招聘英才</a></span> <span><a href="http://www.iqiyi.com/common/helpandsuggest.html?entry=yedi">帮助与反馈</a></span> <span><a href="http://www.iqiyi.com/common/20100420/n4813.html">about us</a></span> </div> <!--公司介绍这一行end--> <!--公司介绍下一行--> <div class="footer_cr"> <p>悦享品质 Always Fun，Always Fine</p> <p>爱奇艺 &copyright; 2013 iQIYI.COM</p> </div> <!--公司介绍下一行end--> </footer> <div class="backToTop" data-widget-totop="scroll" style="display:none;"> <a href="javascript:void(0)" class="iconButton-1x iconButton-2x iconButton_backToTop"></a> </div> </body> </html> ';
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        return new Render(data) + '';
    }
})