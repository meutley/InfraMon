const express = require('express');
const router = express.Router();

const httpStatusCodes = require('../../http-status-codes');
const responseUtility = require('../../utilities/response-utility');

const monitorRepository = require('../../data/monitor-repository');

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {    // No id specified; return all data
        monitorRepository.getAll((data) => {
            responseUtility.sendResponse(res, httpStatusCodes.OK, data);
        }, (err) => {
            responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
        });
    } else {    // Return a monitor by id
        monitorRepository.getById(id,
            (data) => {
                responseUtility.sendResponse(res, httpStatusCodes.OK, data);
            }, (err) => {
                responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
            });
    }
});

router.post('/create', (req, res) => {
    const monitor = req.body;
    monitorRepository.create(monitor,
        (id) => {
            responseUtility.sendResponse(res, httpStatusCodes.OK, id);
        }, (err) => {
            responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
        });
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const monitor = req.body;
    monitorRepository.update(id, monitor,
        () => {
            responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
        }, (err) => {
            responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
        });
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        responseUtility.sendResponse(res, httpStatusCodes.BAD_REQUEST);
    } else {
        try {
            monitorRepository.delete(id, (data) => {
                responseUtility.sendResponse(res, httpStatusCodes.OK_NO_CONTENT);
            }, (err) => {
                responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
            });
        } catch (ex) {
            responseUtility.sendResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
});

module.exports = {
    path: '/api/monitor',
    router: router
};
