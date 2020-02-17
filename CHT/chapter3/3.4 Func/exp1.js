/**
 * Created by likai on 17/3/14.
 */
function func(...args){
  for(let val of args){
      console.log(val);
  }
}
func(1,2,3);

//合並陣列
var arr = [1,2,3];
var arr2 = [4,5];
console.log([...arr,...arr2]);//[ 1, 2, 3, 4, 5 ]
//將字串轉為陣列
var name = [..."Lear"];
console.log(name);//[ 'L', 'e', 'a', 'r' ]
//將多個參數傳入函數，見上面的實例