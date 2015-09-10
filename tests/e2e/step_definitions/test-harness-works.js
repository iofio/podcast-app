function TestHarnessWorks () {
  this.World = require('../helpers/world.js').World;
  
  this.When(/^the test runs$/, function (callback) {
    callback();
  });

  this.Then(/^I am happy$/, function (callback) {
    if (true === true) {
      callback();
    } else {
      callback.fail(new Error("Something's wrong here..."));
    }
  });
}

module.exports = TestHarnessWorks;