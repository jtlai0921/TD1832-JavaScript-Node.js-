/**
 * Created by likai on 2017/4/18.
 */
const  fs = require("fs");
const d = require('domain').create();
d.on('error', (er) => {
    //由於我們手動捕捉了錯誤，因此執行緒不會離開，但這可能會引起嚴重的記憶體洩露
    //測試程式碼見test.js
    console.log('error, but oh well ${er.message}');
});
d.run(() => {
    require('http').createServer((req, res) => {
        console.log(undefinedObject.undefined);
    }).listen(3000);
});