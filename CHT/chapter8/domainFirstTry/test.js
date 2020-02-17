/**
 * Created by likai on 2017/4/18.
 */
var http = require("http");

//首先啟動domain.js
//短時間內發起大量http請求，可以在執行緒管理器中監測到明顯的記憶體上升
for(var i=0;i<10000;i++){
    http.get("http://localhost:3000",function(err,result){

    });
}
process.on("uncaughtException",function(err){
    console.log(err)
});



