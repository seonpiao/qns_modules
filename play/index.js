var lib = require('qiyilib');
var Path = require('path');
var getVideoInfo = require('../util/getVideoInfo');

var ic = new lib.ic.InfoCenter({moduleName:'module.play'});

var renderer = require('./play.js');

var Play = {
    init:function(server){
        server.get('/play.html',this._process);
        server.get(/^\/(\d+)\.html$/,this._static);
    },
    unload:function(server){
        server.unget('/play.html',this._process);
        server.unget(/^\/(\d+)\.html$/,this._static);
    },
    _render:function(tvid,req,res){
        getVideoInfo(tvid,function(err,vi){
            if(!err){
                try{
                    var html = renderer(vi);
                    res.send(html);
                }
                catch(e){
                    ic.error(e);
                    res.send('error');
                }
            }
            else{
                res.send(JSON.stringify(err));
            }
        });
    },
    _static:function(req,res){
        var tvid = req.params[0];
        Play._render(tvid,req,res);
    },
    _process:function(req,res){
        var tvid = req.query.tvid;
        Play._render(tvid,req,res);
    }
};

module.exports = Play;