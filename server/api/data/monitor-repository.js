const mongoData = require('./mongo-data');

const _create = function (monitor, success, failure) {
    const model = {
        name: monitor.name,
        webRequestDetails: monitor.webRequestDetails,
        pingDetails: monitor.pingDetails,
        frequencyAmount: monitor.frequencyAmount,
        frequencyPeriod: monitor.frequencyPeriod
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

module.exports = {
    create: _create
};