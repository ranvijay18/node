const http = require('http');



const server = http.createServer((req,res) => {
    const url = req.url;

    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>Welcome Home</body>')
        res.write('</html>');
        return res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>Welcome to About Us page</body>')
        res.write('</html>');
        return res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>Welcome to my Node Js project</body>')
        res.write('</html>');
        return res.end();
    }
});

server.listen(4000);
