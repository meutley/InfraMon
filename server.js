const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Services
const services = require('./server/services');
const apiService = services.api;

// API
const api = require('./server/api/endpoints');

app.use(express.static(path.join(__dirname, 'dist')));

apiService.initializeRoutes(app, api.endpoints);

// Base route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Server
const PORT = 4200;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port localhost:${PORT}`);
});