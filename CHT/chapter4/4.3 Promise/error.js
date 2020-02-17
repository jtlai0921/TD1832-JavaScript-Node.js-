/**
 * Created by likai on 2017/4/23.
 */
var fs = require("fs");

//Promise.resolve(function(){
//    throw new Error("error")
//})
//    //.catch(function(err){
////    console.log(err);
////})
//

//var p = new Promise(resolve =>{
//    resolve("Hello World");
//    throw new Error('test');
//});
//
//p.then(function(data){
//    console.log(data);
//})
//.catch(function(err){
//if(err){
//    console.log(err);
//}
//})

var promise = new Promise(function(resolve, reject) {
    resolve("Hello World");
    throw new Error("get error");//promise狀態確定後再拋出錯誤，無效
});

promise.catch(function(error) { console.log(error) });



