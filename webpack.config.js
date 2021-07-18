var path = require('path');
module.exports = {
    mode: 'production',
    entry: './after/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};