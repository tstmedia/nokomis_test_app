
var nokomis = require('nokomis')
var Templating = nokomis.plugins.Templating
var Handlebars = require('handlebars')

var HBTmpl = module.exports = Templating.extend({

  initialize: function(config) {
    HBTmpl.__super__.initialize.apply(this, arguments)
    this.tmpl.engine = Handlebars
    tmpl.extension = 'hb'
    tmpl.preload()
  }

})
