/**
 * Created by likai on 2017/4/21.
 */
console.log(new Buffer('hello, world!').toString('base64'));
// 轉換成base64字串：aGVsbG8sIHdvcmxkIQ==

console.log(new Buffer('aGVsbG8sIHdvcmxkIQ==', 'base64').toString());
// 復原base64字串：hello, world!

console.log(new Buffer('hello, world!').toString('hex'));
// 轉換成十六進位字串：68656c6c6f2c20776f726c6421

console.log(new Buffer('68656c6c6f2c20776f726c6421', 'hex').toString());
// 復原十六進位字串：hello, world!

