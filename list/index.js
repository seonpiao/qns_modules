var lib = require('qiyilib');
var Path = require('path');
var Channel = require('../util/channel');
var ChannelFilter = require('../util/channelFilter');
var Search = require('../util/search');
var SearchUtil = require('../util/searchUtil');


var ic = new lib.ic.InfoCenter({moduleName:'module.recommend'});

var renderer = require('./list.js');

module.exports = {
    init:function(server){
        server.get('/list.html',this._process);
    },
    unload:function(server){
        server.unget('/list.html',this._process);
    },
    _process:function(req,res){
        var category = req.query.category;

        var threeCategory = [];
        //目前无用
        /*if(threeCategory.length>0){
            var tcs = threeCategory.filter(function(item){
                if(item !== ''){
                    return true;
                }
            });
            threeCategory = tcs;
        }*/
        var key = '';

        Search.search({
            keyWord : key,
            cur : 1,
            sortKey : '3',//option.sort = option.sort=='new'?2:3;
            category : category,
            threeCategory : threeCategory,
            limit : 20,
            isPurchase :  "",//   /m\.iqiyi\.com/i.test(location.href) ? 0 :  // h5端过滤会员视频的搜索结果
            domain : "www",
            from : "html5",
            contentType : Search.formatContentType(category)
        },function(data){
            var results = [];

            if(data.success){
                results = SearchUtil.getData4PTmpl(data.data.list);
            }
            /*var temp = {};
            temp.data ={};
            temp.data.results= results;
            temp.isFinal=data.isFinal;
            temp.code = 'A00000';
            temp.curr = data.data.cur;*/
            /*callback(null, {data:temp});*/
            var filtes = ChannelFilter.getByName(category);
            var html = renderer({category:category,filtes:filtes,results:results});
            res.send(html);
            return;
        });
    }
};