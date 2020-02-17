/**
 * Created by likai on 2017/5/9.
 */

function auto(Generator){
    var gen = Generator();

    function next(data){
        var result = gen.next(data);
        //判斷執行是否結束
        if(result.done) return result.value;
        result.value.then(function(data){
            next(data)
        })
    }
    next();
}