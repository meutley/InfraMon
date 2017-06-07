const mongoData = require('./mongo-data');
const ObjectID = require('mongodb').ObjectID;

const _create = function (monitor, success, failure) {
    const model = {
        name: monitor.name,
        type: monitor.type,
        webRequestDetails: monitor.webRequestDetails,
        pingDetails: monitor.pingDetails,
        frequencyAmount: monitor.frequencyAmount,
        frequencyPeriod: monitor.frequencyPeriod,
        isActive: monitor.isActive
    };

    try {
        mongoData.doWithConnection((db) => {
            try {
                db.collection('monitors')
                    .insertOne(model)
                    .then((result) => {
                        if (typeof success === 'function') {
                            success(model);
                        }
                    });
            } catch (ex) {
                if (typeof failure === 'function') {
                    failure(ex);
                }
            }
        });
    } catch (ex) {
        if (typeof failure === 'function') {
            failure(ex);
        }
    }
}

const _getById = function (id, success, failure) {
    try {
        mongoData.doWithConnection((db) => {
            try {
                db.collection('monitors')
                    .findOne({ _id: new ObjectID(id) }, (err, res) => {
                        if (err && typeof failure === 'function') {
                            failure(err);
                        } else if (!err && typeof success === 'function') {
                            success(res);
                        }
                    });
            } catch (ex) {
                if (typeof failure === 'function') {
                    failure(ex);
                }
            }
        });
    } catch (ex) {
        if (typeof failure === 'function') {
            failure(ex);
        }
    }
}

const _getAll = function (success, failure) {
    try {
        mongoData.doWithConnection((db) => {
            try {
                db.collection('monitors')
                    .find({}).toArray((err, res) => {
                        if (err && typeof failure === 'function') {
                            failure(err);
                        } else if (!err) {
                            success(res);
                        }
                    });
            } catch (ex) {
                if (typeof failure === 'function') {
                    failure(ex);
                }
            }
        });
    } catch (ex) {
        if (typeof failure === 'function') {
            failure(ex);
        }
    }
}

const _delete = function (id, success, failure) {
    try {
        mongoData.doWithConnection((db) => {
            try {
                db.collection('monitors')
                    .deleteOne({ _id: id })
                    .then((result) => {
                        if (typeof success === 'function') {
                            success(result);
                        }
                    });
            } catch (ex) {
                if (typeof failure === 'function') {
                    failure(ex);
                }
            }
        });
    } catch (ex) {
        if (typeof failure === 'function') {
            failure(ex);
        }
    }
}

module.exports = {
    create: _create,
    getAll: _getAll,
    getById: _getById
};