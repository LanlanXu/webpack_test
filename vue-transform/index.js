var config = require('./webpack.config');
var webpack = require('webpack');

webpack(config).run((err, stats)=>{
    if(err){
        console.error(err);
        return;
    }

    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});