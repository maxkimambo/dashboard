/**
 * Created by max on 2/16/16.
 */
var request = require('request');
var q = require('q');

var httpClient = function(){};

/**
 * Executes get request for a given Url.
 * @param url
 */
httpClient.prototype.get = function(url){

    var defer = q.defer();

    request.get(url, function(err, res, html){
        if (!err){
              defer.resolve(html);
        }
        else{
            defer.reject(err);
        }

    });

    return defer.promise;
};

/**
 * Executes Post Request for a given url
 * @param url
 * @param data in JSON format
 */
httpClient.prototype.post = function(url, queryString, data){

    var defer = q.defer();

    request({url:url, qs:queryString, method:'POST', form:data}, function(err, res, html){
        if (!err){
            defer.resolve(html);
        }
    });

    return defer.promise;
};

/**
 * Executes Put request for a given Url
 * @param url
 * @param data
 */
httpClient.prototype.put = function(url, data){
    var defer = q.defer();

    request({url: url, method: 'PUT', json: data }, function(err, res, html){
        if (!err){
            defer.resolve(html);
        }
    });
    return defer.promise;
};

/**
 * Executes Delete request on a Url endpoint.
 * @param url
 * @param callback
 */
httpClient.prototype.delete = function(url, callback){
    var defer = q.defer();

    request({url: url, method: 'DELETE'}, function(err, res, html){
        if (!err){
            defer.resolve(html);
        }
    });

    return defer.promise;
};


module.exports = new httpClient();