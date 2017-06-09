const dataUtility = require('./mongo-data');
const dataProvider = require('./mongo-provider');
const ObjectID = require('mongodb').ObjectID;

const monitorMapping = require('./mapping/model-mapping').monitorMapping;

const _callbackWithData = function (action, data) {
    if (typeof action === 'function') {
        action(data);
    }
}

const _create = function (monitor, success, failure) {
    const model = monitorMapping.fromModel(monitor);

    try {
        dataUtility.doWithConnection((db) => {
            dataProvider.get(db, 'monitors')
                .insertOne(model, (data) => {
                    _callbackWithData(success, model);
                }, (err) => {
                    _callbackWithData(failure, err);
                });
        });
    } catch (ex) {
        _callbackWithData(failure, ex);
    }
}

const _getById = function (id, success, failure) {
    try {
        dataUtility.doWithConnection((db) => {
            dataProvider.get(db, 'monitors')
                .getById(id, (data) => {
                    _callbackWithData(success, data);
                }, (err) => {
                    _callbackWithData(failure, err);
                });
        });
    } catch (ex) {
        _callbackWithData(failure, data);
    }
}

const _getAll = function (success, failure) {
    try {
        dataUtility.doWithConnection((db) => {
            dataProvider.get(db, 'monitors')
                .getAll((data) => {
                    _callbackWithData(success, data);
                }, (err) => {
                    _callbackWithData(failure, err);
                });
        });
    } catch (ex) {
        _callbackWithData(failure, data);
    }
}

const _delete = function (id, success, failure) {
    try {
        dataUtility.doWithConnection((db) => {
            dataProvider.get(db, 'monitors')
                .delete(id, (data) => {
                    _callbackWithData(success, data);
                }, (err) => {
                    _callbackWithData(failure, data);
                });
        });
    } catch (ex) {
        _callbackWithData(failure, data);
    }
}

module.exports = {
    create: _create,
    getAll: _getAll,
    getById: _getById,
    delete: _delete
};