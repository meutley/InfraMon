const _monitors = [];

for (var x = 1; x <= 15; ++x) {
    _monitors.push({
        id: x,
        name: 'Monitor ' + x
    });
}

module.exports = {
    monitors: _monitors
}
