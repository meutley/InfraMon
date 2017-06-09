module.exports = {
    initializeRoutes: function (app, endpoints) {
        for (var x = 0; x < endpoints.length; x++) {
            var endpoint = endpoints[x];
            app.use(endpoint.path, endpoint.router);
        }
    }
};