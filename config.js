
var conf = module.exports = {}

conf.config = __filename

conf.server = {
  port: 8888,
  host: 'localhost',
  cluster: { size: 1 /*require('os').cpus().length*/ }
}

conf.templating = {
  templatePath: __dirname + '/templates'
}

conf.cookies = {
  secrets: ['some kind', 'of secret']
}

conf.logging = {
  name: 'Nokomis Test App'
}

