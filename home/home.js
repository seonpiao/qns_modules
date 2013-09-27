define(function (require) {
    var helpers = require('./$helpers');
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                cData = $data.cData,
                data = $data.data,
                c = $data.c,
                i = $data.i,
                len = $data.len,
                $escape = $helpers.$escape,
                $string = $helpers.$string,
                $out = '';
            $out += '<!DOCTYPE html> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/> <meta name="apple-touch-fullscreen" content="YES"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="format-detection" content="telephone=no"> <link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://www.qiyipic.com/20130423143600/fix/H5-57x57.png"/> <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://www.qiyipic.com/20130423143600/fix/H5-72x72.png"/> <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://www.qiyipic.com/20130423143600/fix/H5-114x114.png"/> <title>爱奇艺视频</title> <link rel="stylesheet" type="text/css" href="http://static.qiyi.com/css/201309171747/h5.css"/> <script type="text/javascript" src="http://static.qiyi.com/js/201308301544/phone1.2.js"></script> <script type="text/javascript"> Q.PageInfo = Q.PageInfo || {}; Q.PageInfo.page_begin = new Date(); </script> <script type="text/javascript"> Q.projectName = \'html5\'; Q.verurl = \'http://static.iqiyi.com/js/html5/h5ver.js\'; Q.liburl = \'http://static.qiyi.com/js/h5lib/20130813174841/h5lib.js\'; </script> <script type="text/javascript"> if (!Q.PageInfo) { Q.PageInfo = {}; } //Q.PageInfo.adPlayerId = \'qc_100001_100102\'; Q.PageInfo.projectVersion = \'20130918114127\'; Q.PageInfo.templateLastModify = \'2013/09/18 15:30:00\'; </script> <script> Q.PageInfo = Q.PageInfo || {}; Q.PageInfo.cname = "首页"; Q.PageInfo.page = "home"; </script> <script type="text/javascript"> Q.load(\'home\'); </script> <style type="text/css"> .two .indexHeight-118{height:122px;padding: 0 5px;} .two .indexHeight-118 li{width: 145px;} .two .picList_90-118 .picList_pic img {width: 145px;height: 90px;} .two .picList_90-118 li>div {width: 145px;} </style> </head> <body> <!-- 头部 开始 --> <div id="1000000000382" style="display:none;"></div> <div id="bankheader"></div> <header class="header-index" id="headerEl"> <section class="mod-header bd-pd clearfix"> <h1 class="topLogo"> <a href="/index.html#stat_logo" data-delegate="go" data-page-tmplid="index" class="logo">爱奇艺</a> </h1> <div class="topMenu"> <a href="/search.html#stat_search" data-header-btnelem="search" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> <a href="/billboard.html" data-header-btnelem="billboard" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_rank"></i></a> <a href="/user.html" data-header-btnelem="user" data-delegate="go" data-page-tmplid="user" class="dib"><i class="iconButton-1x iconButton-2x iconButton_personal"></i></a> <a href="/record.html" data-header-btnelem="record" data-delegate="go" data-page-tmplid="user" class="dib pr"><i class="iconButton-1x iconButton-2x iconButton_playRec"></i><i class="updateTip dn"></i></a> </div> </section> <!--频道标签--> <nav class="mod-mainNav"> <div data-widget-nav="nav" class="mainNav"> <div data-nav-slide="slide" class="mainNav_menus"> <ul data-nav-chlist="chlist"> <a href="/index.html" data-delegate="go" data-page-tmplid="index" data-nav-item="normal" class="mainNav_item selected">首页</a> <a href="/zixun/" data-delegate="go" data-page-tmplid="yule" data-nav-item="normal" class="mainNav_item">资讯</a> <a href="/yule/" data-delegate="go" data-page-tmplid="yule" data-nav-item="normal" class="mainNav_item">娱乐</a> <a href="/dianshiju/" data-delegate="go" data-page-tmplid="dianshiju" data-nav-item="normal" class="mainNav_item">电视剧</a> <a href="/dianying/" data-delegate="go" data-page-tmplid="dianying" data-nav-item="normal" class="mainNav_item">电影</a> <a href="/zongyi/" data-delegate="go" data-page-tmplid="zongyi" data-nav-item="normal" class="mainNav_item">综艺</a> <a href="javascript:void(0)" class="mainNav_item mainNav_item-more" data-nav-btn="more">更多</a> </ul> </div> </div> </nav> <!--频道标签end--> </header> <!-- 头部 结束 --> <!-- 焦点图 开始 --> <!--焦点图--> <section class="mod-scrollFocus" data-widget-focus="slidefocus"> <div data-focus-elem="imgwrapper" class="shade-scrollFocus"> <ul class="scrollFocus_img" data-focus-elem="slide"> <li data-focus-elem="frame"> <!-- <a href="/zongyi/a/203060900.html#stat_focus" data-delegate="go" data-page-tmplid="zongyia" data-albumid="203060900" class="scrollFocus_link"> <img src="http://pic8.qiyipic.com/thumb/20130922/html5FocusPic_b9dc66eb7bf84e9196f81ae23fd5d349.jpg" width="320" height="133" /> <p class="focus_title">快乐男声：5进3海清花痴欧豪</p> </a> --> <a href="/play.html?tvid=203060900&vid=9681acebfb51067cca79a71b0f5524e0#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="203060900" class="scrollFocus_link"> <img src="http://pic8.qiyipic.com/thumb/20130922/html5FocusPic_b9dc66eb7bf84e9196f81ae23fd5d349.jpg" width="320" height="133"/> <p class="focus_title">快乐男声：5进3海清花痴欧豪</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/zongyi/a/201167407.html#stat_focus" data-delegate="go" data-page-tmplid="zongyia" data-albumid="201167407" class="scrollFocus_link"> <img data-lazy="http://pic7.qiyipic.com/thumb/20130922/html5FocusPic_d5d1b37578864ec8bcd7cab40c14812a.jpg" width="320" height="133" /> <p class="focus_title">杨幂自黑被拥戴袁姗姗效仿遭轰</p> </a> --> <a href="/play.html?tvid=201167407&vid=e1c225c2daac0cf347f4210dbbe989d5#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="201167407" class="scrollFocus_link"> <img data-lazy="http://pic7.qiyipic.com/thumb/20130922/html5FocusPic_d5d1b37578864ec8bcd7cab40c14812a.jpg" width="320" height="133"/> <p class="focus_title">杨幂自黑被拥戴袁姗姗效仿遭轰</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/zongyi/a/203118800.html#stat_focus" data-delegate="go" data-page-tmplid="zongyia" data-albumid="203118800" class="scrollFocus_link"> <img data-lazy="http://pic1.qiyipic.com/thumb/20130921/html5FocusPic_07307e7d91dd484e9e23cb9157e1d090.jpg" width="320" height="133" /> <p class="focus_title">电视剧有戏：酒后乱性寡妇野战</p> </a> --> <a href="/play.html?tvid=203118800&vid=5a3e430f158fd680544dd73520544081#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="203118800" class="scrollFocus_link"> <img data-lazy="http://pic1.qiyipic.com/thumb/20130921/html5FocusPic_07307e7d91dd484e9e23cb9157e1d090.jpg" width="320" height="133"/> <p class="focus_title">电视剧有戏：酒后乱性寡妇野战</p> </a> </li> <li data-focus-elem="frame"> <a href="http://ota.iqiyi.com/adf/4d4b1714c7514fd2a9697feeb2e18a1b" target="_blank" class="scrollFocus_link"> <img data-lazy="http://pic6.qiyipic.com/thumb/20130921/html5FocusPic_a9a9c7d9a0654f50bcc96e2f88c7b6df.jpg" width="320" height="133"/> <p class="focus_title">爱奇艺视频</p> </a> <!----> </li> <li data-focus-elem="frame"> <!-- <a href="/dianshiju/a/605082.html#stat_focus" data-delegate="go" data-page-tmplid="dianshijua" data-albumid="605082" class="scrollFocus_link"> <img data-lazy="http://pic4.qiyipic.com/thumb/20130912/html5FocusPic_f7dd45fa10d74f8e96c0e11acc83ceb8.jpg" width="320" height="133" /> <p class="focus_title">《璀璨人生》何润东变腹黑男</p> </a> --> <a href="/play.html?tvid=746347&vid=e2083252b4004974a7df0b92e99ab10d#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="605082" class="scrollFocus_link"> <img data-lazy="http://pic4.qiyipic.com/thumb/20130912/html5FocusPic_f7dd45fa10d74f8e96c0e11acc83ceb8.jpg" width="320" height="133"/> <p class="focus_title">《璀璨人生》何润东变腹黑男</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/sports/a/633362.html#stat_focus" data-delegate="go" data-page-tmplid="sportsa" data-albumid="633362" class="scrollFocus_link"> <img data-lazy="http://pic7.qiyipic.com/thumb/20130922/html5FocusPic_f1e5b8b2b51f4fe8a2e77006b72aab3a.jpg" width="320" height="133" /> <p class="focus_title">我是冠军！詹姆斯新赛季宣传片</p> </a> --> <a href="/play.html?tvid=774653&vid=bcf7e91932cb4ac28169fa348e1c7909#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="633362" class="scrollFocus_link"> <img data-lazy="http://pic7.qiyipic.com/thumb/20130922/html5FocusPic_f1e5b8b2b51f4fe8a2e77006b72aab3a.jpg" width="320" height="133"/> <p class="focus_title">我是冠军！詹姆斯新赛季宣传片</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/zongyi/a/203090700.html#stat_focus" data-delegate="go" data-page-tmplid="zongyia" data-albumid="203090700" class="scrollFocus_link"> <img data-lazy="http://pic3.qiyipic.com/thumb/20130921/html5FocusPic_eaf9205882c3453e8f4f748dd4e5dc2d.jpg" width="320" height="133" /> <p class="focus_title">快乐大本营：快男6强CP归来</p> </a> --> <a href="/play.html?tvid=203090700&vid=c8e0a0fcde3e5c3b79115ae8db86f228#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="203090700" class="scrollFocus_link"> <img data-lazy="http://pic3.qiyipic.com/thumb/20130921/html5FocusPic_eaf9205882c3453e8f4f748dd4e5dc2d.jpg" width="320" height="133"/> <p class="focus_title">快乐大本营：快男6强CP归来</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/dianshiju/a/568553.html#stat_focus" data-delegate="go" data-page-tmplid="dianshijua" data-albumid="568553" class="scrollFocus_link"> <img data-lazy="http://pic8.qiyipic.com/thumb/20130920/html5FocusPic_d1be35ccc10145ccb8e776fa41ef0894.jpg" width="320" height="133" /> <p class="focus_title">绝命老白 众叛亲离</p> </a> --> <a href="/play.html?tvid=702687&vid=6608c8da85fb42b4a0b7ee4d9d081ea1#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="568553" class="scrollFocus_link"> <img data-lazy="http://pic8.qiyipic.com/thumb/20130920/html5FocusPic_d1be35ccc10145ccb8e776fa41ef0894.jpg" width="320" height="133"/> <p class="focus_title">绝命老白 众叛亲离</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/dianshiju/a/627384.html#stat_focus" data-delegate="go" data-page-tmplid="dianshijua" data-albumid="627384" class="scrollFocus_link"> <img data-lazy="http://pic0.qiyipic.com/thumb/20130919/html5FocusPic_2d28887a30394c1e99b697b31e756532.jpg" width="320" height="133" /> <p class="focus_title">谁是真英雄</p> </a> --> <a href="/play.html?tvid=768370&vid=9c05db0be1c74ff29d8bec12cb4ea415#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="627384" class="scrollFocus_link"> <img data-lazy="http://pic0.qiyipic.com/thumb/20130919/html5FocusPic_2d28887a30394c1e99b697b31e756532.jpg" width="320" height="133"/> <p class="focus_title">谁是真英雄</p> </a> </li> <li data-focus-elem="frame"> <!-- <a href="/shishang/a/202736800.html#stat_focus" data-delegate="go" data-page-tmplid="shishanga" data-albumid="202736800" class="scrollFocus_link"> <img data-lazy="http://pic0.qiyipic.com/thumb/20130921/html5FocusPic_79a6b815198f45af87365431aa429a57.jpg" width="320" height="133" /> <p class="focus_title">勾人曲线 维密新款贴身内衣问世</p> </a> --> <a href="/play.html?tvid=202736800&vid=5552d973c9fefb230d3094a9a28d6a9d#stat_focus" data-delegate="go" data-page-tmplid="play" data-albumid="202736800" class="scrollFocus_link"> <img data-lazy="http://pic0.qiyipic.com/thumb/20130921/html5FocusPic_79a6b815198f45af87365431aa429a57.jpg" width="320" height="133"/> <p class="focus_title">勾人曲线 维密新款贴身内衣问世</p> </a> </li> </ul> </div> <div class="scrollFocus_page"> <span class="selected" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> <span class="" data-focus-elem="btn"></span> </div> </section> <!--焦点图end--> <!-- 焦点图 结束 --> <!-- 内容 开始 --> <section class="h5_wrap bd-pd"> <!-- 编辑推荐 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-flex mb10"> <h2> <a class="titleInfo" href="javascript:void(0)"> <i class="icon-1x icon-2x icon_bjtj mr5"></i> <span class="vl">编辑推荐</span> <i class="icon-1x icon-2x icon_scroll"></i> </a> </h2> <!-- 精彩--> <div class="h5_zbj-wrap clearfix"> <a data-widget-wonderfulvideo="btn" href="javascript:void(0)" class="h5_zbj-btn"> <i class="icon-1x icon-2x icon_star-popUp"></i><span class="vl">精彩</span> </a> <div class="h5_zbj-content" data-widget-wonderfulvideo="list"> <ul> <li><a href="http://m.iqiyi.com/zongyi/s/1300000684.html">娱乐猛回头</a></li> <li><a href="http://m.iqiyi.com/zongyi/s/1300001696.html">笑霸来了</a></li> <li><a href="http://m.iqiyi.com/play.html?tvid=202106400&amp;vid=74642f0618a0647ebecd7c08771d1fb1">爱奇艺早班机</a></li> <li><a href="http://m.iqiyi.com/zongyi/s/1300000790.html">电视剧有戏</a></li> <li><a href="http://m.iqiyi.com/zongyi/s/1300000683.html">环球影讯</a></li> </ul> </div> </div> <!-- 精彩 end--> </div> <div data-widget-lazyloader-filename="hotPoint" data-lazyloader-config="type:ready" data-widget-hotpoint="wrapper" style="position:relative;width:100%"> <div data-widget-hotpoint="wrapperchild" class="mod_bd"> <ul class="fbLeft picList_90-60-flex indexHeight-60"> <li> <a href="http://m.iqiyi.com/topic/1226.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic2.qiyipic.com/thumb/20130920/html5FocusPic_5fef0599b70a4d338d55e5df00f821ba.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1226.html" target="_self">最火辣美女摇臀热舞</a></p> </li> <li> <a href="http://m.iqiyi.com/play.html?tvid=202687200&amp;vid=0ba4e9506d795a9106baa627aaf3ef80" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic1.qiyipic.com/thumb/20130918/html5FocusPic_a82bea6ea10d47c3afacaf6ad0b9628f.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/play.html?tvid=202687200&amp;vid=0ba4e9506d795a9106baa627aaf3ef80" target="_self">性爱大师授性学</a> </p> </li> <li> <a href="http://m.iqiyi.com/topic/1550.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic4.qiyipic.com/thumb/20130906/focusPic_e169c493995e43d8b3664954b1c7ffbc.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1550.html" target="_self">开学比拼校花忙</a></p> </li> <li> <a href="http://m.iqiyi.com/topic/1568.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic3.qiyipic.com/thumb/20130909/focusPic_d73d3f8ebb4742159c8d38729428ac31.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1568.html" target="_self">用绳命在偷情</a></p> </li> <li> <a href="http://m.iqiyi.com/topic/1552.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic7.qiyipic.com/thumb/20130907/focusPic_4f572db3a88e434b94b7018a67487359.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1552.html" target="_self">快男无节操预测</a></p> </li> <li> <a href="http://m.iqiyi.com/topic/1571.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic5.qiyipic.com/thumb/20130910/focusPic_e18cc6ebc25c4579a800d38b132eb50c.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1571.html" target="_self">高端装逼指南</a></p> </li> <li> <a href="http://m.iqiyi.com/topic/1574.html" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic4.qiyipic.com/thumb/20130911/focusPic_40ea7ea7656446dcbad7c95f27ba8244.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/topic/1574.html" target="_self">麻辣教师欢乐季</a></p> </li> <li> <a href="http://m.iqiyi.com/play.html?tvid=232552&amp;vid=60c343f131c04e51ac1aaa831e8549f2" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic7.qiyipic.com/thumb/20130904/focusPic_9f43695defee4447870de912aa4d9efa.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/play.html?tvid=232552&amp;vid=60c343f131c04e51ac1aaa831e8549f2" target="_self">韩庚正能量新单</a></p> </li> <li> <a href="http://m.iqiyi.com/play.html?tvid=769384&amp;vid=63024f6aa48a44969aa6fcb6417a3ff0" target="_self" class="picList_pic"><img width="90" height="60" src="http://pic8.qiyipic.com/thumb/20130917/html5FocusPic_42e82de8862b4e08aff14c8bfd0b4dc6.jpg"/></a> <p class="picList_title"><a href="http://m.iqiyi.com/play.html?tvid=769384&amp;vid=63024f6aa48a44969aa6fcb6417a3ff0" target="_self">精神分裂的爱</a></p> </li> </ul> </div> </div> </div> <!-- 编辑推荐 结束 --> <!-- 资讯 开始--> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/zixun/#stat_channel" data-delegate="go" data-page-tmplid="zixun"> <i class="icon-1x icon-2x icon_advice mr5"></i><span class="vl">资讯</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/zixun/#stat_channel_more" data-delegate="go" data-page-tmplid="zixun">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            var cData = data['25'];
            var c = null;
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203166900"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203166900"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 资讯 结束 --> <!-- 娱乐 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/yule/#stat_channel" data-delegate="go" data-page-tmplid="yule"> <i class="icon-1x icon-2x icon_ent mr5"></i><span class="vl">娱乐</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/yule/#stat_channel_more" data-delegate="go" data-page-tmplid="yule">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['7'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 娱乐 结束 --> <!-- 电视剧 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/dianshiju/#stat_channel" data-delegate="go" data-page-tmplid="dianshiju"> <i class="icon-1x icon-2x icon_tv mr5"></i><span class="vl">电视剧</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/dianshiju/#stat_channel_more" data-delegate="go" data-page-tmplid="dianshiju">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['2'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 电视剧 结束 --> <!-- 电影 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/dianying/#stat_channel" data-delegate="go" data-page-tmplid="dianying"> <i class="icon-1x icon-2x icon_movie mr5"></i><span class="vl">电影</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/dianying/#stat_channel_more" data-delegate="go" data-page-tmplid="dianying">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> <li> <div> <a class="picList_pic" href="/play.html?tvid=734823&vid=23bf543ef133475ca001ec5a97eeb566" data-delegate="go" data-page-tmplid="play" data-albumid="598134"> <img width="90" height="120" src="http://pic8.qiyipic.com/thumb/20130821/a598134u2_120_160.jpg"/> <p class="picList_info picList_info-right">43:22</p> </a> <p class="picList_title"> <a class="picList_title_main" href="/play.html?tvid=734823&vid=23bf543ef133475ca001ec5a97eeb566" data-delegate="go" data-page-tmplid="play" data-albumid="598134"> 绿茶妹 </a> <a class="picList_title_sub" href="/play.html?tvid=734823&vid=23bf543ef133475ca001ec5a97eeb566" data-delegate="go" data-page-tmplid="play" data-albumid="598134"> 邪恶青春的励 </a> </p> </div> </li> <li> <div> <a class="picList_pic" href="/play.html?tvid=720338&vid=3ecd1e95175240a7acaf3542d346687c" data-delegate="go" data-page-tmplid="play" data-albumid="584570"> <img width="90" height="120" src="http://pic7.qiyipic.com/thumb/20130913/a584570u1_120_160.jpg"/> <p class="picList_info picList_info-right">01:35:45</p> </a> <p class="picList_title"> <a class="picList_title_main" href="/play.html?tvid=720338&vid=3ecd1e95175240a7acaf3542d346687c" data-delegate="go" data-page-tmplid="play" data-albumid="584570"> 夜店北京 </a> <a class="picList_title_sub" href="/play.html?tvid=720338&vid=3ecd1e95175240a7acaf3542d346687c" data-delegate="go" data-page-tmplid="play" data-albumid="584570"> 风骚男女玩转 </a> </p> </div> </li> <li> <div> <a class="picList_pic" href="/play.html?tvid=726765&vid=d58364779dbb4511bce2121f5f6dc58b" data-delegate="go" data-page-tmplid="play" data-albumid="587952"> <img width="90" height="120" src="http://pic1.qiyipic.com/thumb/20130911/a587952u1_120_160.jpg"/> <p class="picList_info picList_info-right">01:42:20</p> </a> <p class="picList_title"> <a class="picList_title_main" href="/play.html?tvid=726765&vid=d58364779dbb4511bce2121f5f6dc58b" data-delegate="go" data-page-tmplid="play" data-albumid="587952"> 校花诡异事件 </a> <a class="picList_title_sub" href="/play.html?tvid=726765&vid=d58364779dbb4511bce2121f5f6dc58b" data-delegate="go" data-page-tmplid="play" data-albumid="587952"> 中国版人鬼情 </a> </p> </div> </li> <li> <div> <a class="picList_pic" href="/play.html?tvid=714198&vid=d70b3fa1665e4db082bd38f014348a3b" data-delegate="go" data-page-tmplid="play" data-albumid="578029"> <img width="90" height="120" src="http://pic0.qiyipic.com/thumb/20130812/a578029u1_120_160.jpg"/> <p class="picList_info picList_info-right">28:09</p> </a> <p class="picList_title"> <a class="picList_title_main" href="/play.html?tvid=714198&vid=d70b3fa1665e4db082bd38f014348a3b" data-delegate="go" data-page-tmplid="play" data-albumid="578029"> 我是裸模 </a> <a class="picList_title_sub" href="/play.html?tvid=714198&vid=d70b3fa1665e4db082bd38f014348a3b" data-delegate="go" data-page-tmplid="play" data-albumid="578029"> 女大学生当裸 </a> </p> </div> </li> <li> <div> <a class="picList_pic" href="/play.html?tvid=757707&vid=71e351fb9cbe484c94b2d097bf5e1055" data-delegate="go" data-page-tmplid="play" data-albumid="617738"> <img width="90" height="120" src="http://www.qiyipic.com/thumb/20130904/a617738_120_160.jpg"/> <p class="picList_info picList_info-right">35:38</p> </a> <p class="picList_title"> <a class="picList_title_main" href="/play.html?tvid=757707&vid=71e351fb9cbe484c94b2d097bf5e1055" data-delegate="go" data-page-tmplid="play" data-albumid="617738"> 天神传 </a> <a class="picList_title_sub" href="/play.html?tvid=757707&vid=71e351fb9cbe484c94b2d097bf5e1055" data-delegate="go" data-page-tmplid="play" data-albumid="617738"> 泷泽萝拉演绎 </a> </p> </div> </li> <li class="fixJustify"></li> </ul> </div> </div> <!-- 电影 结束 --> <!-- 片花 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/pianhua/#stat_channel" data-delegate="go" data-page-tmplid="pianhua"> <i class="icon-1x icon-2x icon_trailer mr5"></i><span class="vl">片花</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/pianhua/#stat_channel_more" data-delegate="go" data-page-tmplid="pianhua">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['10'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 片花 结束 --> <!-- 微电影 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/weidianying/#stat_channel" data-delegate="go" data-page-tmplid="weidianying"> <i class="icon-1x icon-2x icon_minimovie mr5"></i><span class="vl">微电影</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/weidianying/#stat_channel_more" data-delegate="go" data-page-tmplid="weidianying">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['16'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 微电影 结束 --> <!-- 少儿 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/shaoer/#stat_channel" data-delegate="go" data-page-tmplid="shaoer"> <i class="icon-1x icon-2x icon_child mr5"></i><span class="vl">少儿</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/shaoer/#stat_channel_more" data-delegate="go" data-page-tmplid="shaoer">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['15'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 少儿 结束 --> <!-- 动漫 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/dongman/#stat_channel" data-delegate="go" data-page-tmplid="dongman"> <i class="icon-1x icon-2x icon_anime mr5"></i><span class="vl">动漫</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/dongman/#stat_channel_more" data-delegate="go" data-page-tmplid="dongman">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['4'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 动漫 结束 --> <!-- 综艺 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/zongyi/#stat_channel" data-delegate="go" data-page-tmplid="zongyi"> <i class="icon-1x icon-2x icon_variety mr5"></i><span class="vl">综艺</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/zongyi/#stat_channel_more" data-delegate="go" data-page-tmplid="zongyi">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['6'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 综艺 结束 --> <!-- 搞笑 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/fun/#stat_channel" data-delegate="go" data-page-tmplid="fun"> <i class="icon-1x icon-2x icon_funny mr5"></i><span class="vl">搞笑</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/fun/#stat_channel_more" data-delegate="go" data-page-tmplid="fun">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['22'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 搞笑 结束 --> <!-- 生活 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/life/#stat_channel" data-delegate="go" data-page-tmplid="life"> <i class="icon-1x icon-2x icon_life mr5"></i><span class="vl">生活</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/life/#stat_channel_more" data-delegate="go" data-page-tmplid="life">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['21'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 生活 结束 --> <!-- 时尚 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/shishang/#stat_channel" data-delegate="go" data-page-tmplid="shishang"> <i class="icon-1x icon-2x icon_fashion mr5"></i><span class="vl">时尚</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/shishang/#stat_channel_more" data-delegate="go" data-page-tmplid="shishang">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['13'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 时尚 结束 --> <!-- 音乐 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/yinyue/#stat_channel" data-delegate="go" data-page-tmplid="yinyue"> <i class="icon-1x icon-2x icon_music mr5"></i><span class="vl">音乐</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/yinyue/#stat_channel_more" data-delegate="go" data-page-tmplid="yinyue">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['5'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 音乐 结束 --> <!-- 纪录片 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/jilupian/#stat_channel" data-delegate="go" data-page-tmplid="jilupian"> <i class="icon-1x icon-2x icon_docu mr5"></i><span class="vl">纪录片</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/jilupian/#stat_channel_more" data-delegate="go" data-page-tmplid="jilupian">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['3'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 纪录片 结束 --> <!-- 体育 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/sports/#stat_channel" data-delegate="go" data-page-tmplid="sports"> <i class="icon-1x icon-2x icon_sports mr5"></i><span class="vl">体育</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/sports/#stat_channel_more" data-delegate="go" data-page-tmplid="sports">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['17'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 体育 结束 --> <!-- 旅游 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/lvyou/#stat_channel" data-delegate="go" data-page-tmplid="lvyou"> <i class="icon-1x icon-2x icon_travel mr5"></i><span class="vl">旅游</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/lvyou/#stat_channel_more" data-delegate="go" data-page-tmplid="lvyou">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['9'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 旅游 结束 --> <!-- 教育 开始 --> <div class="modList mb15 two"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="/edu/#stat_channel" data-delegate="go" data-page-tmplid="edu"> <i class="icon-1x icon-2x icon_edu mr5"></i><span class="vl">教育</span> </a></h2> <div class="mod_more mod_more-text"> <a href="/edu/#stat_channel_more" data-delegate="go" data-page-tmplid="edu">更多>></a> </div> </div> <div class="mod_bd"> <ul class="picList_90-118 indexHeight-118"> ';

            cData = data['12'];
            if (cData) {
                for (var i = 0, len = cData.length; i < len; i++) {
                    c = cData[i];

                    $out += ' <li> <div> <a class="picList_pic" href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> <img src="';
                    $out += $escape($string(c.apic));
                    $out += '"/> <p class="picList_info picList_info-right">';
                    $out += $escape($string(c.playTime));
                    $out += '</p> </a> <p class="picList_title"> <a href="/play.html?tvid=';
                    $out += $escape($string(c.firstTvid));
                    $out += '&vid=';
                    $out += $escape($string(c.firstVid));
                    $out += '" data-delegate="go" data-page-tmplid="play" data-albumid="203139000"> ';
                    $out += $escape($string(c.name));
                    $out += ' </a> </p> </div> </li> ';

                }
            }

            $out += ' <li class="fixJustify"></li> </ul> </div> </div> <!-- 教育 结束 --> <!-- 其他频道 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="#" title=""><i class="icon-1x icon-2x icon_otherChannel mr5"></i><span class="vl">其他频道</span></a></h2> </div> <div class="mod_bd"> <ul class="picList_btn"> <li><a class="btn-primary" href="/caijing/#stat_remen" data-delegate="go" data-page-tmplid="ad">财经</a></li> <li><a class="btn-primary" href="/qiche/#stat_remen" data-delegate="go" data-page-tmplid="ad">汽车</a></li> <li><a class="btn-primary" href="/youxi/#stat_remen" data-delegate="go" data-page-tmplid="ad">游戏</a></li> <li><a class="btn-primary" href="/ad/#stat_remen" data-delegate="go" data-page-tmplid="ad">广告</a></li> <!--li><a class="btn-primary" href="/qiyichupin/#stat_remen" data-delegate="go" data-page-tmplid="qiyichupin">爱奇艺出品</a></li--> <li><a class="btn-primary" href="/vip/#stat_remen">VIP</a></li> </ul> </div> </div> <!-- 其他频道 结束 --> <!-- 爱奇艺移动产品 开始 --> <div class="modList mb15"> <div class="mod_title mod_title-normal mb10"> <h2><a class="titleInfo" href="#" title=""><i class="icon-1x icon-2x icon_iqiyiMobile mr5"></i><span class="vl">爱奇艺移动产品</span></a></h2> <div class="mod_more mod_more-text" style="display:none;"><a href="#" title="更多">更多>></a></div> </div> <div class="mod_bd"> <ul class="picList_product" data-widget-app="con"></ul> </div> </div> <!-- 爱奇艺移动产品 结束 --> </section> <div class="addDesk" id="addtohome" style="display:none"> <i class="addDesk_logo"></i> <div class="addDesk_text"> 亲！爱奇艺喊你看视频<br/> 先点击<span class="icon-1x icon-2x icon_btnAdd"></span>，<br/> 再“添加到主屏”。 </div> <i class="icon-1x icon-2x icon_closeAdd" id="closeit"></i> <i class="arrow_addDesk"></i> </div> <!-- 内容 结束 --> <!-- 底部 开始 --> <footer class="h5_footer"> <!--搜索框--> <div class="searchBox fbLeft mb25"> <div class="searchBox_input"> <a class="input-block-level footer_input" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"></a> </div> <div class="searchBox_btn"> <a class="btn-primary" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> </div> </div> <!--搜索框end--> <!--帮助反馈这一行--> <div class="fbJustify mb25"> <div><a href="http://www.iqiyi.com/?src=fromhtml5bottempc" data-elem="pc" title="pc版"><i class="icon-1x icon-2x icon_pc mr5"></i><span class="vl">PC版</span></a> </div> <div><a href="/feedback.html?entry=phoneshouye" data-delegate="go" data-page-tmplid="feedback" title="用户反馈"><i class="icon-1x icon-2x icon_feedback mr5"></i><span class="vl">用户反馈</span></a></div> <div><a href="javascript:void(0)" title="回顶部" data-widget-totop="totop"><i class="icon-1x icon-2x icon_toTop mr5"></i><span class="vl">回顶部</span></a></div> </div> <!--帮助反馈这一行end--> <!--公司介绍这一行--> <div class="footer_links mb25"> <span><a href="http://www.iqiyi.com/common/aboutus.html">公司介绍</a></span> <span><a href="http://www.iqiyi.com/common/news.html">新闻动态</a></span> <span><a href="http://www.iqiyi.com/common/contactus.html">联系方式</a></span> <span><a href="http://www.iqiyi.com/common/employ.html">招聘英才</a></span> <span><a href="http://www.iqiyi.com/common/helpandsuggest.html?entry=yedi">帮助与反馈</a></span> <span><a href="http://www.iqiyi.com/common/20100420/n4813.html">about us</a></span> </div> <!--公司介绍这一行end--> <!--公司介绍下一行--> <div class="footer_cr"> <p>悦享品质 Always Fun，Always Fine</p> <p>爱奇艺 &copy;2013 iQIYI.COM</p> </div> <!--公司介绍下一行end--> </footer> <div class="backToTop" data-widget-totop="scroll" style="display:none;"> <a href="javascript:void(0)" class="iconButton-1x iconButton-2x iconButton_backToTop"></a> </div> <script type="text/javascript"> var imgs = document.querySelectorAll(\'.two .picList_pic img\'); for(var i = 0 ;i < imgs.length; i++){ var img = imgs[i]; img.src = img.src.replace(/_120_160.jpg/g, \'_145_90.jpg\'); } </script> <!-- Begin 艾瑞 --> <script> var _iwt_UA = "UA-iqiyi-000001", _iwt_no_flash = 1; //客户项目编号,根据实际生成 (function (D) { var s = D.createElement("script"), h = D.getElementsByTagName("head")[0]; s.src = "http://static.qiyi.com/js/pingback/iwt.js"; s.type = "text/javascript"; s.charset = "utf-8"; s.onload = s.onreadystatechange = function () { if (!s.readyState || "loaded" == s.readyState || "complete" == s.readyState) { s.onload = s.onreadystatechange = null; } }; h.appendChild(s); })(document); </script> <!-- End 艾瑞 --> <script> var _comscore = _comscore || []; _comscore.push({ c1: "2", c2: "7290408" }); (function () { var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; s.onload = s.onreadystatechange = function () { if (!s.readyState || "loaded" == s.readyState || "complete" == s.readyState) { s.onload = s.onreadystatechange = null; } }; el.parentNode.insertBefore(s, el); })(); </script> <noscript><img src="http://b.scorecardresearch.com/p?c1=2&c2=7290408&cv=2.0&cj=1"/></noscript> <script> window._hmt = window._hmt || []; (function () { var hm = document.createElement("script"); hm.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//hm.baidu.com/h.js?5df871ab99f94347b23ca224fc7d013f"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); </script> <!-- 底部 结束 --> </body> </html>';
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        return new Render(data) + '';
    }
})