const express = require('express');
const router = express.Router();

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
        responseUtility.sendResponse(res, 200, mockData.monitors);
    } else {    // Return a monitor by id
        getMonitorById(
            mockData.monitors,
            id,
            (monitor) => {
                if (monitor) {
                    responseUtility.sendResponse(res, 200, monitor);
                } else {
                    responseUtility.sendResponse(res, 404);
                }
            });
    }
});

module.exports = {
    path: '/api/monitor',
    router: router
};
