/**
 * Created by likai on 2017/4/30.
 */
var fs = require("fs");

fs.readFile("foo.txt",function(err,data){
   console.log(data);
   while(true){}//無窮迴圈阻塞了事件循環,後面所有的程式碼都不會執行
});

setTimeout(function(){
    console.log("done");
},1000);

