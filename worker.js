
var config = require('./config')
var routes = require('./routes')

// set the root directory for the app
config.appRoot = __dirname

var App = require('nokomis').App

var TestApp = App.extend({

  initialize: function(options) {

  },

  setupRoutes: routes,

  // setupTemplating: function(templating) {
  //   templating.extension = 'hb'
  //   templating.setPath(__dirname + '/templates')
  //   templating.preload('**/*.hb')
  // }

})

module.exports = TestApp
