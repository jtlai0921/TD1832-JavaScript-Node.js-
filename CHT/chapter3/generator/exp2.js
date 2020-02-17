
function* Generator() {
    yield "Hello Node";
    yield "From Lear"
    return "end"
}
var gen = Generator();
for(let i of gen){
    console.log(i);
    //輸出結果
    // Hello Node
    //From Lear
}

// //和for/of循環等值
// Array.from(Generator())