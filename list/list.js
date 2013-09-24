define(function (require) {
    var dependencies = {
        'listdata': require('./listdata')
    };
    var helpers = require('./$helpers');
    var $render = function (id, data) {
            return dependencies[id](data);
        };
    var Render = function ($data) {
            'use strict';
            var $helpers = this,
                $escape = $helpers.$escape,
                $string = $helpers.$string,
                category = $data.category,
                i = $data.i,
                filtes = $data.filtes,
                j = $data.j,
                include = function (id, data) {
                    if (data === undefined) {
                        data = $data
                    }
                    var content = $helpers.$render(id, data);
                    if (content !== undefined) {
                        $out += content;
                        return content
                    }
                },
                $out = '';
            $out += '<!DOCTYPE html> <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/> <meta name="apple-touch-fullscreen" content="YES"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="format-detection" content="telephone=no"> <link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://www.qiyipic.com/20130423143600/fix/H5-57x57.png"/> <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://www.qiyipic.com/20130423143600/fix/H5-72x72.png"/> <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://www.qiyipic.com/20130423143600/fix/H5-114x114.png"/> <title>列表页</title> <link rel="stylesheet" type="text/css" href="http://static.qiyi.com/css/test2/h5.css"/> <script type="text/javascript" src="http://static.qiyi.com/js/201308301544/phone1.2.js"></script> <script type="text/javascript"> Q.PageInfo = Q.PageInfo || {}; Q.PageInfo.page_begin = new Date(); </script> <script type="text/javascript"> Q.projectName = \'html5\'; Q.verurl = \'http://static.iqiyi.com/js/html5/h5ver.js\'; Q.liburl = \'http://static.qiyi.com/js/h5lib/20130813174841/h5lib.js\'; </script> <script type="text/javascript"> if(!Q.PageInfo){ Q.PageInfo = {}; } Q.PageInfo.projectVersion = \'20130910135437\'; Q.PageInfo.templateLastModify = \'2013/09/03 16:53:00\'; </script> </head> <body> <!-- 头部 开始 --> <header class="header-index"> <section class="mod-header bd-pd clearfix"> <h1 class="topLogo"> <a href="/index.html#stat_logo" data-delegate="go" data-page-tmplid="index" class="logo">爱奇艺</a> </h1> <div class="topMenu"> <a href="/search.html#stat_search" data-header-btnelem="search" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> <a href="/billboard.html" data-header-btnelem="billboard" data-delegate="go" data-page-tmplid="search" class="dib"><i class="iconButton-1x iconButton-2x iconButton_rank"></i></a> <a href="/user.html" data-header-btnelem="user" data-delegate="go" data-page-tmplid="user" class="dib"><i class="iconButton-1x iconButton-2x iconButton_personal"></i></a> <a href="/record.html" data-header-btnelem="record" data-delegate="go" data-page-tmplid="user" class="dib pr"><i class="iconButton-1x iconButton-2x iconButton_playRec"></i><i class="updateTip dn"></i></a> </div> </section> <nav class="mod-mainNav" data-widget-nav="nav"> <div class="header_opt header_opt-title"> <div class="header_opt_left"><a class="iconButton-1x iconButton-2x iconButton_goBack" href="javascript:history.back()"></a></div> <div class="header_opt_center textOverflow"><a href="javascript:void(0);" class="fs14" data-nav-btn="more"><span data-widget-list="name">';
            $out += $escape($string(category));
            $out += '</span><i class="icon-1x icon-2x icon_arrowDown"></i></a></div> <div class="header_opt_right"><a class="iconButton-1x iconButton-2x iconButton_goHome" href="/index.html"></a></div> </div> <div class="layer-moreNav" data-nav-list="list" style="display:none;"> <ul class="moreNav_menus clearfix" data-nav-list="wrap"> </ul> </div> <div class="mod-moreChl_wrap"> <!-- 更多频道 --> <div class="mod-moreChl" data-filter-elem="list"> <div class="fbJustify"> <div style="width:80px;"><a class="btn-fav" href="#" data-widget-link="recommend"><i class="icon-1x icon-2x icon_fav"></i><span>猜你喜欢</span></a></div> <div class="sort-layout"> <a class="iconChl-1x iconChl-2x iconButton_showList selected mr15" href="#" data--list-type="list"></a> <a class="iconChl-1x iconChl-2x iconButton_showImg" href="#" data--list-type="win"></a> </div> <div class="sort-time" data-widget-sort="list"> <a class="iconButton_sort" href="#" data-sort-item="new" data-listsearch-value="new" data-listsearch-type="sort" data-delegate="listsearch">最新</a> <a class="iconButton_sort selected" href="#" data-sort-item="hot" data-listsearch-value="hot" data-listsearch-type="sort" data-delegate="listsearch" >最热</a> </div> </div> <div class="mod-moreChl_info" data-widget-filter="cate"> ';
            for (var i = 0; i < filtes.types.length; i++) {
                $out += ' <ul class="';
                if (filtes.types[i].mb10) {
                    $out += ' mt15 mb5 ';
                }
                $out += ' clearfix"> ';
                for (var j = 0; j < filtes.types[i].alls.length; j++) {
                    $out += ' <li ';
                    if (filtes.types[i].alls[j].sel) {
                        $out += 'class="selected" ';
                    }
                    $out += ' data-i="';
                    $out += $escape($string(i));
                    $out += '" data-listsearch-value="{{name}}" data-listsearch-type="category" data-delegate="listsearch"><a href="#">';
                    $out += $escape($string(filtes.types[i].alls[j].name));
                    $out += '</a></li> ';
                }
                $out += ' </ul> ';
            }
            $out += ' </div> </div> <!-- 收起-展开按钮 iconButton_flod对应的mod-moreChl为显示状态 iconButton_unflod对应的mod-moreChl为隐藏 --> <a class="iconChl-1x iconChl-2x iconButton_flod" href="javascript:void(0);" data-filter-btn="expand"></a> </div> </nav> </header> <!-- 头部 结束 --> <!-- 内容 开始 --> <section class="h5_wrap bd-pd"> <!-- 频道首页列表 开始 --> <ul data-widget-list="h5"> ';
            include('listdata')
            $out += ' </ul> <!-- 频道首页列表 结束 --> </section> <!-- 内容 结束 --> <!-- 加载更多 开始 --> <section class="mod_loadMore" data-widget-next="h5" data-curr="1"> <a href="javascript:void(0);" titile="点击加载更多">点击加载更多</a> </section> <!-- 加载更多 结束 --> <!-- 底部 开始 --> <footer class="h5_footer"> <!--搜索框--> <div class="searchBox fbLeft mb25"> <div class="searchBox_input"> <a class="input-block-level footer_input" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"></a> </div> <div class="searchBox_btn"> <a class="btn-primary" href="/search.html#stat_search" data-delegate="go" data-page-tmplid="search"><i class="iconButton-1x iconButton-2x iconButton_search"></i></a> </div> </div> <!--搜索框end--> <!--帮助反馈这一行--> <div class="fbJustify mb25"> <div><a href="http://www.iqiyi.com/?src=fromhtml5bottempc" data-elem="pc" title="pc版"><i class="icon-1x icon-2x icon_pc mr5"></i><span class="vl">PC版</span></a></div> <div><a href="/feedback.html?entry=phoneshouye" data-delegate="go" data-page-tmplid="feedback" title="用户反馈"><i class="icon-1x icon-2x icon_feedback mr5"></i><span class="vl">用户反馈</span></a></div> <div><a href="javascript:void(0)" title="回顶部" data-widget-totop="totop"><i class="icon-1x icon-2x icon_toTop mr5"></i><span class="vl">回顶部</span></a></div> </div> <!--帮助反馈这一行end--> <!--公司介绍这一行--> <div class="footer_links mb25"> <span><a href="http://www.iqiyi.com/common/aboutus.html">公司介绍</a></span> <span><a href="http://www.iqiyi.com/common/news.html">新闻动态</a></span> <span><a href="http://www.iqiyi.com/common/contactus.html">联系方式</a></span> <span><a href="http://www.iqiyi.com/common/employ.html">招聘英才</a></span> <span><a href="http://www.iqiyi.com/common/helpandsuggest.html?entry=yedi">帮助与反馈</a></span> <span><a href="http://www.iqiyi.com/common/20100420/n4813.html">about us</a></span> </div> <!--公司介绍这一行end--> <!--公司介绍下一行--> <div class="footer_cr"> <p>悦享品质 Always Fun，Always Fine</p> <p>爱奇艺 &copyright; 2013 iQIYI.COM</p> </div> <!--公司介绍下一行end--> </footer> <div class="backToTop" data-widget-totop="scroll" style="display: none;"> <a href="javascript:void(0)" class="iconButton-1x iconButton-2x iconButton_backToTop"></a> </div> <script type="text/javascript"> Q.load(\'nList\'); </script> <!-- 底部 结束 --> </body> </html> ';
            return new String($out)
        };
    Render.prototype = helpers;
    return function (data) {
        helpers.$render = $render;
        return new Render(data) + '';
    }
})