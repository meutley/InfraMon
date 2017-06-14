const ObjectID = require('mongodb').ObjectID;

const _doWithTryCatch = function (action, failure) {
    try {
        if (typeof action === 'function') {
            action();
        }
    } catch (ex) {
        if (typeof action === 'function') {
            failure(ex);
        }
    }
}

const _get = function (db, collectionName) {
    return {
        insertOne: function (model, success, failure) {
            _doWithTryCatch(() => {
                db.collection(collectionName)
                    .insertOne(model)
                    .then((result) => {
                        if (typeof success === 'function') {
                            success(model);
                        }
                    });
            }, failure);
        },

        getById: function (id, success, failure) {
            _doWithTryCatch(() => {
                db.collection(collectionName)
                    .findOne({ _id: new ObjectID(id) }, (err, res) => {
                        if (err && typeof failure === 'function') {
                            failure(err);
                        } else if (!err && typeof success === 'function') {
                            success(res);
                        }
                    });
            }, failure);
        },

        getAll: function (success, failure) {
            _doWithTryCatch(() => {
                db.collection(collectionName)
                    .find({}).toArray((err, res) => {
                        if (err && typeof failure === 'function') {
                            failure(err);
                        } else if (!err) {
                            success(res);
                        }
                    });
            }, failure);
        },

        delete: function (id, success, failure) {
            _doWithTryCatch(() => {
                db.collection(collectionName)
                    .deleteOne({ _id: new ObjectID(id) })
                    .then((result) => {
                        if (typeof success === 'function') {
                            success(result);
                        }
                    });
            }, failure);
        },

        updateOne: function (id, monitor, success, failure) {
            _doWithTryCatch(() => {
                db.collection(collectionName)
                    .updateOne({ _id: new ObjectID(id) }, { $set: monitor })
                    .then((res) => {
                        if (typeof success === 'function') {
                            success();
                        }
                    });
            }, failure);
        }
    };
}

module.exports = {
    get: _get
}