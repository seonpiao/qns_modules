var lib = require('qiyilib');

var ic = new lib.ic.InfoCenter({moduleName:'module.home'});

module.exports = {
    init:function(server){
        server.get("/",this._process);
        server.get("/index.html",this._process);
    },
    unload:function(server){
        server.unget("/",this._process);
        server.unget("/index.html",this._process);
    },
    _process:function(req,res){
        var url = req.protocol + '://' + 'm.iqiyi.com' + req.originalUrl;
        ic.log('Proxy to ' + url);
        lib.http.request(url,{
            headers:{
                'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
            },
            onsuccess:function(xhr,data){
                res.set({
                    'Content-Type':xhr.getResponseHeader('Content-Type')
                });
                res.send(data + '');
            }
        });
    }
};