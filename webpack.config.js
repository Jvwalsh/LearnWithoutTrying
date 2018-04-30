var path = require("path");
const json = require('json-loader');


var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },


        ]
    },
    node: {
        fs: 'empty',
        child_process:'empty',
        net: 'empty',
        tls: 'empty'
      }
    
};

module.exports = env => {
    // Use env.<YOUR VARIABLE> here:
    process.env.GOOGLE_APPLICATION_CREDENTIALS = './FullstackStudent1802-935059315272.json'

    console.log('NODE_ENV: ', process.env.GOOGLE_APPLICATION_CREDENTIALS) // 'local'
    console.log('Production: ', process.env.production) // true
    

    return config
    
    
    
    
    
};