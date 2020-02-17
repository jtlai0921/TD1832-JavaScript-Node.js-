/**
 * Created by likai on 2017/5/6.
 */
var fs = require('fs');
var https = require('https');


var options = {
    key:fs.readFileSync('client.pem'), //載入用戶端公鑰
    cert :fs.readFileSync('client-cert.pem'), //載入用戶端私鑰
    ca : [fs.readFileSync('server-cert.pem')],//載入伺服器憑證
    hostname:"localhost",
    port:3001,
    path:'/',
    method:'GET'
}

var req = https.request(options,function(res){
    res.on('data',function(data){
        process.stdout.write(data);
    })
});
req.end();

req.on('error',function(err){
    console.log(err);
})