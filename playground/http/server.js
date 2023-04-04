const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello node</h1>');
    res.write('<p>hello server</p>');
    res.end('<p>hello</p>')
}).listen(8080, () =>{
    console.log('8080 port sert');
})

server.on('error', (error) => {
    console.error(error);
})