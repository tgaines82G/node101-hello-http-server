// write your code here
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
    }
    res.end();
});

server.listen(8080);
console.log(`The HTTP Server is running on port 8080`);