/**
 * Created by likai on 17/3/5.
 */
var util = require('util');
var EventEmitter = require('events');

//宣告一個建構函數
function MyEventEmitter() {
    EventEmitter.call(this);//呼叫父類別建構函數
}
util.inherits(MyEventEmitter, EventEmitter);//繼承EventEmitter類別
MyEventEmitter.prototype.publish = function(data) {//實現自訂的publish方法
    this.emit('data', data);
};
const myEventEmitter = new MyEventEmitter();
myEventEmitter.on('data', function(data){
    console.log('Received data:',data);
});
myEventEmitter.publish('It works!');

console.log(myEventEmitter instanceof EventEmitter);
console.log(MyEventEmitter.super_ === EventEmitter);

