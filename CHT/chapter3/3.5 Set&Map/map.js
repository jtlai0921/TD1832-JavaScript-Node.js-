/**
 * Created by likai on 17/3/15.
 */
var obj = {"c":3};
var map = new Map([
    ["a",1],
    ["b",2],
    [obj,3]
]);
console.log(map.size);//map的元質數量
console.log(map.has("a"));//判斷是否存在鍵值對
console.log(map.get("b"));//取得某個鍵值對的值
map.set("d",4);//若果鍵值不存在，則增加新的鍵值對，否則覆蓋原有值
map.delete("d");//移除某個鍵值對，傳回一個布爾值
for(let key of map.keys()){
    console.log(key); //a b {c:3}
}
for(let value of map.values()){
    console.log(value);//1 2 3
}
for(let m of map.entries()){
    console.log(m);//[ 'a', 1 ] [ 'b', 2 ] [ { c: 3 }, 3 ]
}
map.clear();//清理map
