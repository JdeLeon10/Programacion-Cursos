import {createServer} from 'node:http';

const port = 3000;

const server = createServer((req, res) => {
    console.log('Received request:', req.method, req.url)
});

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});