const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>Welcome Home</body>')
        res.write('</html>');
        return res.end();
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>Welcome to About Us page</body>')
        res.write('</html>');
        return res.end();
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>Welcome to my Node Js project</body>')
        res.write('</html>');
        return res.end();
    } else if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            if (err) {
                console.log(err)
            }
            res.write('<html>');
            res.write('<head><title>Message</title></head>');
            res.write(`<body> ${data} </body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Submit"></form></body>')
            res.write('</html>');
            return res.end();

        })

    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })

        });

    }
});

server.listen(4000);
