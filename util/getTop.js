var lib = require('qiyilib');
var fetch = require('qns').fetch;
var async = require('async');
var ic = new lib.ic.InfoCenter({
    moduleName: 'getTop'
});

var allData;
var format = function(data) {
    var result = {};
    var dimCounts = [
        'album_count_yesterday',
        'album_count_lastweek',
        'album_count_his'
    ];
    for (var i = 0, l = data.length; i < l; i++) {
        var item = data[i];
        result[item.cid] = item.albums;
    }
    return result;
};
var getTopData = function(params, callback) {
    var cids = ['2', '1', '16', '6', '4', '3', '10', '7', '5', '17', '13', '9', '22', '21', '20', '12', '15',
        '8', '24', '25', '26'
    ];
    var url = 'http://top.inter.qiyi.com/index/fronts';
    var dims = ['day', 'wee', 'his'];
    var area = 'iqiyi';
    var len = 10;

    var tasks = {};
    for (var i = 0, l = dims.length; i < l; i++) {
        var dim = dims[i];
        tasks[dim] = function(cb) {
            fetch({
                url: url,
                params: {
                    len: len,
                    area: area,
                    cids: cids.join('_'),
                    dim: dim
                },
                expires: 3
            }, function(err, data) {
                data = format(data);
                cb(err, data);
            });
        };
    }
    async.parallel(tasks, function(err, data) {
        callback(err, data);
        allData = data;
    });
};
module.exports = getTopData;

// 一下为测试用例，直接执行node getTop即可
// getTopData({}, function(err, data) {
//     console.log('err: ' + JSON.stringify(err));
//     console.log('data.his: ' + JSON.stringify(data.his));
//     console.log('data.day: ' + JSON.stringify(data.day));
//     console.log('data.wee: ' + JSON.stringify(data.wee));
// });