/**
 * Created by likai on 2017/5/4.
 */
const exec = require('child_process').exec;

//example是使用C語系撰寫的一個hello world程式，在mac平台下使用GCC編譯，在windows上執行下面的程式碼可能會出現錯誤
const child = exec('example', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

