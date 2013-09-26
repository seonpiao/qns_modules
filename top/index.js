var lib = require('qiyilib');
var Path = require('path');
var getTop = require('../util/getTop');
var renderer = require('./top');

var ic = new lib.ic.InfoCenter({
    moduleName: 'module.top'
});

module.exports = {
    init: function(server) {
        server.get('/billboard.html', this._process.bind(this));
        server.get('/getTopData', this._getTopData);
    },
    unload: function(server) {
        server.unget('/billboard.html', this._process);
        server.unget('/getTopData', this._getTopData);
    },
    _getTopData: function(callback) {
        getTop({}, callback);
    },
    _process: function(req, res) {
        var tvid = req.query.tvid;
        var defaultCid = 9; // 娱乐频道
        var defaultDim = 'wee'; // 7天上榜

        this._getTopData(function(err, data) {
            if (!err) {
                try {
                    var weeData = data[defaultDim][defaultCid];
                    console.log('weeData: ', weeData);
                    var html = renderer({
                        data: weeData
                    });
                    res.send(html);
                } catch (e) {
                    res.send('error');
                }
            } else {
                res.send(JSON.stringify(err));
            }
        });
    }
};