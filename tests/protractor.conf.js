exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/features/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    require: [
      'e2e/helpers/world.js',
      'e2e/step_definitions/*.js'
    ]
  }
};