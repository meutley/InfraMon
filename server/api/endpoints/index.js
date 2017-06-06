const monitorApi = require('./monitor-api');
const monitorDataApi = require('./monitor-data-api');

module.exports = {
    endpoints: [
        monitorApi,
        monitorDataApi
    ]
};