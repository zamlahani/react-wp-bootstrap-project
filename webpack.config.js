var path = require('path');

module.exports = {
    //...
    entry: './react/index.js',
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        filename: 'react-main.js',
        path: path.resolve(__dirname, 'assets/js')
    },
};