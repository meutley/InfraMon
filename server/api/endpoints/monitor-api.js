const express = require('express');
const router = express.Router();

const httpStatusCodes = require('../../http-status-codes');
const responseUtility = require('../../utilities/response-utility');

const mockData = require('../data/mock-data');

const getMonitorById = function (monitors, id, callback) {
    const results = monitors.filter((monitor) => {
        return monitor.id == id;
    });
    
    const monitor =
        results.length > 0
        ? results[0]
        : null;

    if (typeof callback === 'function') {
        callback(monitor);
    }
}

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {    // No id specified; return all data
        responseUtility.sendResponse(res, httpStatusCodes.OK, mockData.monitors);
    } else {    // Return a monitor by id
        getMonitorById(
            mockData.monitors,
            id,
            (monitor) => {
                if (monitor) {
                    responseUtility.sendResponse(res, httpStatusCodes.OK, monitor);
                } else {
                    responseUtility.sendResponse(res, httpStatusCodes.NOT_FOUND);
                }
            });
    }
});

router.post('/create', (req, res) => {
    mockData.monitors.push(req.body);
    responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
});

router.post('/update/:id', (req, res) => {
    responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        responseUtility.sendResponse(res, httpStatusCodes.BAD_REQUEST);
    } else {
        const removeIndex = mockData.monitors.map((item) => { return item.id; }).indexOf(id);
        if (removeIndex && removeIndex >= 0) {
            mockData.monitors.splice(removeIndex, 1);
            responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
        } else {
            responseUtility.sendResponse(res, httpStatusCodes.NOT_FOUND);
        }
    }
});

module.exports = {
    path: '/api/monitor',
    router: router
};
