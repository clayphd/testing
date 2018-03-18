const net = require('net');
const Console = require('./console');

const hostIp = '127.0.0.1';
const port = '6667';


const message = (data) => {
    Console.displayMessage(`DATA: ${data}`);
    sock.write(`You said "${data}"`);
};

const close = (data, socket) => {
    Console.displayMessage(`Closed: ${socket.remoteAddress}: ${socket.remotePort}`)
};

const serverFunctions = (sock) => {
    sock.on('data', message);
    sock.on('close', (data) => close(data, sock));
};

net.createServer(serverFunctions).listen(port, hostIp);
console.log(`Listening on Port: ${port}`);
Console.init();