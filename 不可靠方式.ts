import net from 'net';

let port = 3000;

function listen() {
    const server = net.createServer().listen(port);
    server.on('listening', () => {
        server.close();
        console.log(`可用端口：${port}`);
    });
    server.on('error', err => {
        console.log(err);
    });
}
listen();
