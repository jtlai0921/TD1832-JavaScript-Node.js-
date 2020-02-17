﻿var Iter ={

    [Symbol.iterator] : function () {
        var i=0;
        return {
            next: function () {
                return ++i;
            }
        };
    }
};

var obj = new Iter[Symbol.iterator]();
obj.next();//1
obj.next();//2
