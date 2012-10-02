var Controller = require('./baseController')

var Main = module.exports = Controller.extend({

  template: 'main',

  initialize: function(options) {
    this.model = {
      text: 'Hello World'
    }
    options.done()
  }

})
