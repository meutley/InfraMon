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

router.post('/create', (req, res) => {
    mockData.monitors.push(req.body);
    responseUtility.sendResponse(res, 200);
});

router.post('/update/:id', (req, res) => {
    responseUtility.sendResponse(res, 200);
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        responseUtility.sendResponse(res, 400);
    } else {
        const removeIndex = mockData.monitors.map((item) => { return item.id; }).indexOf(id);
        mockData.monitors.splice(removeIndex, 1);

        responseUtility.sendResponse(res, 200);
    }
});

module.exports = {
    path: '/api/monitor',
    router: router
};
