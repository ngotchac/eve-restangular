console.log('Go to: http://localhost:8080/\n');

/********* PYTHON EVE ***************/
var spawn = require('child_process').spawn;

// Create a child process
var child = spawn('api/env/bin/python', ['api/run.py']);

child.stdout.on('data', function (data) {
    process.stdout.write('[EVE] ' + data);
});

child.stderr.on('data', function (data) {
    process.stderr.write('[EVE] ' + data);
});

/******* WEBPACK DEV SERVER **************/
 var WebpackDevServer = require('webpack-dev-server'),
     webpack = require('webpack');

 var compiler = webpack(require('./webpack.config'));

 var server = new WebpackDevServer(compiler, {
     stats: { colors: true }
 });

 server.listen(8080, 'localhost', function() {});

