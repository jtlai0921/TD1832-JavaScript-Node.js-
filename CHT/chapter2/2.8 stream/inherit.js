﻿/**
 * Created by likai on 2017/7/4.
 */
var Readable = require('stream').Readable
var util = require('util')

util.inherits(MyReadable, Readable)

function MyReadable(array) {
    //若果objectMode設定成false在消耗資料時會轉為buffer
    Readable.call(this,{objectMode:true});
    this.array = array;
}

 MyReadable.prototype._read = function() {
    if(this.array.length){
        this.push(this.array.shift());
    }else{
        this.push(null);
    }
}


const array = ['a','b','c','d','e'];
const read = new MyReadable(array);

 read.on("data",function(data){
     console.log(data);
 })
read.on("end",function(){
    console.log("end");
})

process.env.TZ = "America/New_York";
var date = new Date();
console.log(date);
