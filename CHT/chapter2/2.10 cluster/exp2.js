/**
 * Created by likai on 2017/8/4.
 */
var cluster = require('cluster');
var data = 0;//這裡定義資料不會被所有執行緒共享，各個執行緒有各自的記憶體區域
if (cluster.isMaster) { //主執行緒
    var numCPUs = require('os').cpus().length;
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }
    data=5;
    console.log('DATA VALUE in MainProcess: %d ' , data);
} else { //子執行緒,會被呼叫numCPUs次
   // data++;
    console.log('DATA VALUE in ChildProcess %d: %d ', cluster.worker.id, data);//
}
