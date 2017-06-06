const express = require('express');
const router = express.Router();

const httpStatusCodes = require('../../http-status-codes');
const responseUtility = require('../../utilities/response-utility');

router.get('/:id', (req, res) => {
    responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
});

module.exports = {
    path: '/api/monitor-data',
    router: router
};
