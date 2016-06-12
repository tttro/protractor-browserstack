exports.config = {

    capabilities: {

        // BrowserStack - Access for API
        'browserstack.user' : 'username', // Username
        'browserstack.key' : 'accesskey', // Access Key
        'browserstack.debug': true, // Steps with screenshots

        // Browser
        'browserName' : 'Safari',
        'browser_version' : '9.1',
        'os' : 'OS X',
        'os_version' : 'El Capitan',
        'resolution' : '1024x768',

        'browserstack.local' : 'true', // Needed for testing localhost

        // Test session description
        'build': 'Sample Protractor Tests',
        'name': 'Sample Live Protractor Tests'

    },

    // Pattern for finding test spec files
    specs: [ 'test/*.spec.js'],

    //baseUrl: 'http://localhost:8080/', // if the app is run locally against the browserstack

    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

};