const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const {ExpressPeerServer} = require('peer');
const port = process.env.PORT || '8000';

const peerServer = ExpressPeerServer(server, {
	proxied: true,
	debug: true,
	path: '/myapp',
	ssl: {},
});

app.use(peerServer);

app.use(express.static(path.join(__dirname)));

server.listen(port);
console.log(`Listening on: ${port}`);
