var lib = require('qiyilib');
var Path = require('path');
var getRecommend = require('../util/getRecommend');
var Channel = require('../util/channel');

var ic = new lib.ic.InfoCenter({moduleName:'module.recommend'});

var renderer = require('./recommend.js');

module.exports = {
    init:function(server){
        var tplPath = Path.join(__dirname,'recommend.html');
        server.get('/recommend.html',this._process);
    },
    unload:function(server){
        server.unget('/recommend.html',this._process);
    },
    _process:function(req,res){
        var category = req.query.category;
        var cdata = Channel.getDataByCname(category);
        if(cdata){
            getRecommend({
                cids:cdata.id + '_30',
                uid:req.cookies.QC006 || '',
                ppuid:req.cookies.P00003 || '',
                area:'h_lizard'
            },function(err,data){
                if(!err){
                    try{
                        var html = renderer(data.channel_rec[0]);
                        res.send(html);
                    }
                    catch(e){
                        res.send('error');
                    }
                }
                else{
                    res.send(JSON.stringify(err));
                }
            });
        }
        else{
            res.status(404).send('Not found');
        }
    }
};