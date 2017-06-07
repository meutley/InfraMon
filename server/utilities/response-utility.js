module.exports = {
    sendResponse: function (res) {
        var statusCode = (arguments.length > 1) ? arguments[1] : null;
        var data = (arguments.length > 2) ? arguments[2] : null;
        console.log(res);
        if (!data) {
            res.status(statusCode).end();
        } else {
            res.status(statusCode).send(data);
        }
    }
}