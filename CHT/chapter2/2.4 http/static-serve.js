/**
 * Created by likai on 17/3/4.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        //若果存取路徑是localhost:3000,則顯示檔案清單
        var fileList = fs.readdirSync("./");
        res.writeHead(200,{"Content-type":"text/plain"});
        //將陣列轉為字串傳回
        res.end(fileList.toString());
    }
    else{
        var path = req.url;
        //在路徑字串前加.表示目前目錄,避免在*nix系統下存取”/“資料夾
        fs.readFile("."+path,function(err,data){
            if(err){
                //若果該檔案不存在，拋出例外
                res.end("Internal Error")
                throw err;
            }
            res.writeHead(200,{"Content-type":"text/plain"})
            res.end(data);
        })
    }
})
var port = 3000;
server.listen(port);
console.log("Listening on 3000");

//處理例外
process.on("uncaughtException",function(){
    console.log("got error");
})

