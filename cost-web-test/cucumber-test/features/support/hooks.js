var TakeScreenshot = function () {
    this.After(function (scenario, callback) {
        takeScreenshot(scenario, callback);
    });
    takeScreenshot = function (scenario, callback) {
        browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, 'base64').toString('binary');
            scenario.attach(decodedImage, 'image/png');
            var filename = writeScreenshot(png);
            var specScreenShots = [];
            specScreenShots.push(filename);
            callback();
        });
    }
    var writeScreenshot = function (png) {
        var fs = require('fs')
        var uuid = require('uuid');
        var id = uuid.v4();
        var filename = id + '.png';
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(png, 'base64'));
        stream.end();
        return filename;
    }
};

module.exports = TakeScreenshot;