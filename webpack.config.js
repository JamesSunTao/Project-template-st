const path = require('path');


const entryDir = path.resolve(__dirname,'src');
const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
    // mode: 'development',
    entry: path.resolve(entryDir,'index.js'),
    output: {
        path: outputDir,
        filename: '[name].js'
    },

};