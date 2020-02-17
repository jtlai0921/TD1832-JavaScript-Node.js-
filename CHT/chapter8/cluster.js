/**
 * Created by likai on 2017/4/18.
 */

const cluster = require('cluster');
const domain = require('domain');
const http = require('http');

if (cluster.isMaster) {
    //新增兩個worker執行緒
    cluster.fork();
    cluster.fork();
    //當http存取出錯時，會有一個worker離開，再新增一個worker執行緒
    cluster.on('disconnect', (worker) => {
        console.error('disconnect!');
        cluster.fork();
    });
} else {
    const server = http.createServer((req, res) => {
        const d = domain.create();
        d.on('error', (er) => {
            console.error(`error ${er.stack}`);
            //停止接收新的請求
            server.close();
            //觸發cluster的disconnect事件
            cluster.worker.disconnect();

            res.statusCode = 500;
            res.setHeader('content-type', 'text/plain');
            res.end('Oops, there was a problem!\n');
            process.exit(1);
        });
        d.add(req);
        d.add(res);
        d.run(() => {
            handleRequest(req, res);
        });
    });
    server.listen(3000);
}


function handleRequest(req, res) {
    switch (req.url) {
        case '/error':
            //透過存取undefined的屬性，確保在異步回調時出錯
            setTimeout(() => {
                console.log(foo.bar)
            });
            break;
        default:
            res.end('ok');
    }
}


