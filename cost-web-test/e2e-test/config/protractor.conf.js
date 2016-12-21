var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './e2e-test/target/screenshots',
    filename: 'my-report.html',
    cleanDestination: false,
    showConfiguration: false,
    reportTitle: null,
    captureOnlyFailedSpecs: true,
    showSummary: true
});
var port = process.env.EXPRESS_PORT || 9000;
exports.config = {
    framework: 'jasmine',

    // Capabilities to be passed to the webdriver instance.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['../../e2e-test/**/*.js'],

    baseUrl: 'http://localhost:' + port,
    rootElement: 'body',

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            browserName: 'chrome'
        }
    ],
    allScriptTimeout: 10000,//Sets the amount of time to wait for an asynchronous script to finish execution before throwing an error.
    getPageTimeout: 100000,
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
//        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(reporter);
    },

    // Assign the test reporter to each running instance


    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    // use this config to have a visual feedback of all tests


    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    }
}
