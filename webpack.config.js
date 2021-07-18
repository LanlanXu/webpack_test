var path = require('path');
module.exports = {
    mode: 'production',
    entry: './after/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};