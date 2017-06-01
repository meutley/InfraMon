const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET /api/monitor');
    res.end();
});

module.exports = {
    path: '/api/monitor',
    router: router
};