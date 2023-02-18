let options = [
  '--require-module ts-node/register',
  '--require ./stepDefinitions/*.ts',
  '--publish-quiet',
].join(' ');

let run_features = ['./features/', options].join(' ');

module.exports = { test_runner: run_features };
