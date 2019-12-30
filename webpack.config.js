const path = require('path');
module.exports = {
    entry:'./app/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000,
        contentBase:path.resolve(__dirname,'build')
    }
};