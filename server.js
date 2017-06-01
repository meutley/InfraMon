const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const services = require('./server/services');
const apiService = services.api;

const api = require('./server/api/endpoints');

app.use(express.static(path.join(__dirname, 'dist')));

apiService.initializeRoutes(app, api.endpoints);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = 3000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port localhost:${PORT}`);
});