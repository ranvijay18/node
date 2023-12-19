const http = require('http');



const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server alive and listening!');
  
    console.log(`Ranvijay Singh`);
});

server.listen(4000);
