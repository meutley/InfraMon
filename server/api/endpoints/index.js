const monitorApi = require('./monitor-api');
const monitorStatsApi = require('./monitor-stats-api');

module.exports = {
    endpoints: [
        monitorApi,
        monitorStatsApi
    ]
};