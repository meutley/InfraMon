const express = require('express');
const router = express.Router();

const httpStatusCodes = require('../../http-status-codes');
const responseUtility = require('../../utilities/response-utility');

router.get('/:id/:type', (req, res) => {
    const id = req.params.id;
    const type = req.params.type;

    if (!id || !type) {
        responseUtility.sendResponse(res, httpStatusCodes.BAD_REQUEST);
    }

    const response = {
        statsType: type,
        stats: [
            {
                date: new Date(),
                isAlive: true,
                responseTime: 33
            },
            {
                date: new Date(),
                isAlive: true,
                responseTime: 33
            }
        ]
    };
    
    responseUtility.sendResponse(res, httpStatusCodes.OK, response);
});

module.exports = {
    path: '/api/monitor-stats',
    router: router
};
