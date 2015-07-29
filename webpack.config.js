var path = require('path');

module.exports = {
    entry: {
        app: ['./client/app.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    }
};

