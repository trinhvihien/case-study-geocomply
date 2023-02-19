
# Project Structure
### data
- test data is located here

### features
- feature files and steps in the stepDefinitions folder
- world.ts: customize hooks functions for test

### pages
- base is a class for other page classes to extend, all common functions could be shared from the base
- uploadFile.pom.ts: a page class with built-in assertion class inside, splitting 2 classes for easy to maintain

### reports
- the cucumber_report.json is generated after run
- reporter.js exectuted and take the json file exports to html format
  
### cucumber.js
- a cucumber config file, to setup features, steps directories, define what kinds of report to use with cucumberJs 

### tests/uploadFile.spec.ts
- demo for using pure playwright for writing test. Traditional style for writing test (non BDD style)