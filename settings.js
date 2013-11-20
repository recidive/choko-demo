/*
 * Demo application Settings.
 */

/**
 * Settings object.
 */
var settings = module.exports = {
  database: 'mongodb://localhost/demo',
  sessionSecret: 'some-secret',

  application: {
    name: 'Choko Demo',
  },

  extensions: {
    blog: {},
    demo: {}
  }

};
