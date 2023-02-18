let worldOptions = {
    browserName: browser,
    environment: env,
    partition: partition,
    project: project,
    timestamp: global.timestamp,
    reportDir: global.reportDir,
    headless: headless,
    slowMotion: slowMotion,
    partition: partition,
    target: target,
    browserVersion: browserVersion,
    os: os,
    osVersion: osVersion,
    device: device,
};
console.log('cucumber js world options: ' + JSON.stringify(worldOptions));

let options = [
    '--require-module ts-node/register',
    '--require features/stepDefinitions/*.ts',
    '--require hooks/commonHooks.ts',
    '--require pages/*.ts',
    '-f json:reports/cucumber_report.json',
    '--publish-quiet',
].join(' ');

let run_features = ['./features/', options].join(' ');

module.exports = { test_runner: run_features };
