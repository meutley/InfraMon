const MongoClient = require('mongodb').MongoClient;

const _doWithConnection = function (action) {
    if (typeof action === 'function') {
        MongoClient.connect('mongodb://localhost', (err, db) => {
            action(db);
        });
    }
}

module.exports = {
    doWithConnection: _doWithConnection
};