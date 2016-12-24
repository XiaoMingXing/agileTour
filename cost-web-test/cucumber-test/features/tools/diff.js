'use strict';

var BlinkDiff = require('blink-diff');

var diff = new BlinkDiff({
    imageAPath: './cucumber-test/features/tools/expect.png',
       imageBPath: 'ebbba85b-1687-4bef-ab04-0e89e1d1461f.png',

    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    threshold: 0.01,
    delta: 50,
    outputMaskRed: 0,
    outputMaskBlue: 255,
    hideShift: true,
    imageOutputPath: './cucumber-test/features/tools/result.png'
});

diff.run(function (error, result) {
    if (error) {
        throw error;
    } else {
        console.log(diff.hasPassed(result.code) ? 'Passed' : 'Failed');
        console.log('Found ' + result.differences + ' differences.');
    }
});
