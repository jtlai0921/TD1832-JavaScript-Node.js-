/**
 * Created by likai on 2017/6/24.
 */
var fs = require("fs");

//try/catch無法捕捉錯誤，會出現Error: ENOENT: no such file or directory, open 'some file not exists.txt'
//應該使用監聽error事件的模式來處理
try{
    var readStream = fs.createReadStream("some file not exists.txt");
}catch(err){
    console.log(err);
}

readStream.on("error",function(err){
    console.log(err);
});
