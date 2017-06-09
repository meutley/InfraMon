module.exports = {
    fromModel: function (model) {
        return {
            name: model.name,
            type: model.type,
            webRequestDetails: model.webRequestDetails,
            pingDetails: model.pingDetails,
            frequencyAmount: model.frequencyAmount,
            frequencyPeriod: model.frequencyPeriod,
            isActive: model.isActive
        };
    }
}