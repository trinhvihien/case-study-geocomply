let options = [
  '--require-module ts-node/register',
  '--require stepDefinitions/*.ts',
  '--require hooks/commonHooks.ts',
  '--require pages/*.ts',
  '-f json:reports/cucumber_report.json',
  '--publish-quiet',
].join(' ');

let run_features = ['./features/', options].join(' ');

module.exports = { test_runner: run_features };
