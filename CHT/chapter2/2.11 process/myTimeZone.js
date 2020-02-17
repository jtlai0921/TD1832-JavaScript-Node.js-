/**
 * Created by likai on 2017/4/30.
 */

process.env.TZ = "Asia/Shanghai";


Date.prototype.TimeZone = new Map([
    //書籍出版時沒有注意到，這裡存在錯誤
    //原書程式碼中上海的時區寫成了-8，紐約則是寫成了+5
    //非常抱歉ߘ   ['Europe/London',0],
    ['Asia/Shanghai',8],
    ['America/New_York',-5]
])
Date.prototype.zoneDate = function(){
    if(process.env.TZ == undefined){
        return new Date();
    }else{
        for (let item of this.TimeZone.entries()) {
            if(item[0] == process.env.TZ){
                let d = new Date();
                d.setHours(d.getHours()+item[1]);
                return d;
            }
        }
        return new Date();
    }
}

var date = new Date().zoneDate();
console.log(date);

// Date物件的一些其他方法
// console.log(date.toLocaleString());//4/30/2017, 10:44:10 PM 本機時間
// console.log(date.toGMTString());//Sun, 30 Apr 2017 14:44:10 GMT  世界時間
// console.log(date.toUTCString());//推薦使用toUTCString進行代替toGMTString,二者傳回結果相同
//獲得目前時區
//console.log(date.getTimezoneOffset());


