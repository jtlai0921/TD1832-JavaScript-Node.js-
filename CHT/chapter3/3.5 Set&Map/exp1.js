/**
 * Created by likai on 17/3/14.
 */
var set = new Set([1,2,3,4,4,5]);//使用建構函數起始化一個set
console.log(set);//Set { 1, 2, 3, 4, 5 }
set.add(6);//向set加入一個值
set.delete(5);//從set移除一個值
set.has(6);//true
for(var i of set){
    console.log(i);//1 2 3 4 6
}
set.clear();//清除所有元素