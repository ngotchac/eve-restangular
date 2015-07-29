var config = require('./global-config.json');

console.log('Go to: http://' + config.client.host + ':' + config.client.port + '/\n');

/********* PYTHON EVE ***************/
var spawn = require('child_process').spawn;

var env = Object.create( process.env );
env.EVE_PORT = config.server.port;
env.EVE_HOST = config.server.host;

// Create a child process
var child = spawn(
        'api/env/bin/python',
        ['api/run.py'],
        {
            env: env
        }
    );

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

 server.listen(config.client.port, config.client.host, function() {});

