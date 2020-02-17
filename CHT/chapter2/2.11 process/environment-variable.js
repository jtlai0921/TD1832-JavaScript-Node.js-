/**
 * Created by likai on 17/1/19.
 */
//環境變數
console.log(process.env)
console.log(process.getuid());//使用者ID
console.log(process.argv);//node 的指令行參數清單，argv[0]表示node，argv[1]表示目前檔案路徑
console.log(process.pid);//執行緒ID
console.log(process.cwd());//目前目錄
console.log(process.version);//Node版本


//判斷版本
var version  = process.version;
if(version > "v6.0.0"){
    console.log("Higher version than v6.0.0");
    //then......
}

//監聽事件
process.on("exit",function(){
    console.log("process exit");
    //then.......
})

process.exit();