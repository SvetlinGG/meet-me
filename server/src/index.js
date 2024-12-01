

import http from 'http'



const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running');
});



server.listen(3000, () => console.log('Server is listening on http://localhost:3000'))