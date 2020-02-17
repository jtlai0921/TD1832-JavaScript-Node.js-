/**
 * Created by likai on 2017/4/10.
 */
//function* Generator() {
//    yield console.log("Hello Node");
//    yield console.log("From Lear");
//    return "end"
//}
//var gen = Generator();
//gen.next();//"Hello Node"
//gen.return();
////return()方法後面的next不會被執行
//gen.next();


//function func1(x="Hello", y = 'Node') {
//    console.log(x, y);
//    let x = "hello"//SyntaxError: Identifier 'x' has already been declared
//    var y = "node"// 標準
//}
//func1();


function func(...args){
    for(let val of args){
        console.log(val);
    }
}
var args = [1,2,3]
func(...args);

console.log(process.EventEmitter)