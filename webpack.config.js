const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001,
      contentBase: "./build",
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                      
            
            options: {
               presets: ["@babel/preset-env"]
            }
             
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html',
         minify: false
      })
   ]
}