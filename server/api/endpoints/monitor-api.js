const express = require('express');
const router = express.Router();

const mockMonitors = [];

for (var x = 1; x <= 15; ++x) {
    mockMonitors.push({
        name: 'Monitor ' + x
    });
}

router.get('/', (req, res) => {
    res.send(mockMonitors).status(200);
});

module.exports = {
    path: '/api/monitor',
    router: router
};