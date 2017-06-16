const dataUtility = require('./mongo-data');
const dataProvider = require('./mongo-provider');
const ObjectID = require('mongodb').ObjectID;

const _callbackWithData = function (action, data) {
    if (typeof action === 'function') {
        action(data);
    }
}

const _getCollectionName = function (type) {
    switch (type) {
        case WebRequest:
            return 'webrequestresults';
        case Ping:
            return 'pingresults';
        default:
            return null;
    }
}

const WebRequest = 'Web Request';
const Ping = 'Ping';

const _getMonitorStats = function (id, type, success, failure) {
    var collectionName = _getCollectionName(type);

    const filter = { _id: new ObjectID(id) };
    
    try {
        dataUtility.doWithConnection((db) => {
            dataProvider.get(db, collectionName)
                .getAll((data) => {
                    _callbackWithData(success, data);
                }, (err) => {
                    _callbackWithData(failure, data);
                }, filter);

            if (db) {
                db.close();
            }
        });
    } catch (ex) {
        _callbackWithData(failure, ex);
    }
}

module.exports = {
    getMonitorStats: _getMonitorStats
}