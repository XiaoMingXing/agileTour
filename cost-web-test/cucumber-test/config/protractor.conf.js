exports.config = {
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: ['../features/step_definitions/*.js','../features/support/*.js']
    },
    specs: [
        '../features/*.feature'
    ],
    // directConnect: true,
    capabilities: {'browserName': 'firefox'}
};
