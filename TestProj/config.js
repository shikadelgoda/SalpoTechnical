// conf.js
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Assessment/TestOnee.js'],

onPrepare: function() {
   
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
 }
};