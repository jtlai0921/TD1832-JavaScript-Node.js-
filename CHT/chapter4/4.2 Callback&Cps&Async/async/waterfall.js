/**
 * Created by likai on 2017/5/24.
 */
var async = require("async");
var fs= require("fs");
function func1 (callback){
    fs.readFile("1.txt","utf-8",callback);
}

function func2(value,callback){
    console.log("上一個動作傳入的值",value);
    fs.readFile("2.txt","utf-8",callback);
}

function func3(value,callback){
    console.log("上一個動作傳入的值",value);
    fs.readFile("3.txt","utf-8",callback);
}

async.waterfall([func1,func2,func3],function(err,data){
    console.log(data);
})
//輸出結果
// 上一個動作傳入的值 1.txt
// 上一個動作傳入的值 2.txt
// 3.txt