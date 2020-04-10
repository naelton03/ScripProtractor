'use strict';

require('babel-core/register');
const SpecReporter = require('jasmine-spec-reporter');

module.exports.config = {
    allScriptsTimeout: 50000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
        },
        shardTestFiles: true,
        maxInstances: 2
    },
    params: {
        ambiente: '',
        base: '',
        natureza: 'CAPEX',
        condicionamento : 'NAO'
    },
    specs: ['specs/*.spec.js'],
    onPrepare() {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));
    },
    jasmineNodeOpts: {
        stopSpecOnExpectationFailure: true,
        showColors: true,
        defaultTimeoutInterval: 250000,
        includeStackTrace: false,
    }
};