var nokomis = require('nokomis')
var Controller = nokomis.Controller
var plugins = nokomis.plugins

var config = require('../config')

var BaseController = module.exports = Controller.extend({

  initialize: function(options) {
    this.model = {
      text: 'Hello World'
    }
    options.done()
  }

})

BaseController.addPlugin(plugins.Logging, config.logging)
BaseController.addPlugin(plugins.ContentNegotiator)
BaseController.addPlugin(plugins.Cookies, config.cookies)
BaseController.addPlugin(plugins.Session, config.session)
BaseController.addPlugin(plugins.Errors, config.errorPage)
BaseController.addPlugin(plugins.Timeout, config.timeout)
BaseController.addPlugin(plugins.Respond)
BaseController.addPlugin(plugins.PostData)

BaseController.addPlugin(require('../plugins/hbtmpl'), config.templating)