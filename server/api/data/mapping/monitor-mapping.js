module.exports = {
    fromModel: function (model) {
        return {
            name: monitor.name,
            type: monitor.type,
            webRequestDetails: monitor.webRequestDetails,
            pingDetails: monitor.pingDetails,
            frequencyAmount: monitor.frequencyAmount,
            frequencyPeriod: monitor.frequencyPeriod,
            isActive: monitor.isActive
        };
    }
}