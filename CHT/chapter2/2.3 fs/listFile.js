/**
 * Created by likai on 17/3/4.
 */
var fs = require("fs");
function getAllFileFromPath(path) {
    fs.readdir(path, function (err, res) {
        for (var subPath of res) {
            var statObj = fs.statSync(path + "/" + subPath); //這裡使用了同步方法而非異步
            if (statObj.isDirectory()) {//判斷是否為資料夾
                console.log("Dir:", subPath);
                getAllFileFromPath(path + "/" + subPath)//若果是資料夾，遞歸取得子資料夾中的檔案清單
            } else {
                console.log("File:", subPath);
            }
        }
    })
}
getAllFileFromPath(__dirname);