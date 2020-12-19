const pathM = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports={
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    entry:pathM.resolve(__dirname+'/src/scripts/scripts.js'),
    output:{
        path:pathM.resolve(__dirname,'src/public'),
        publicPath:__dirname+'/src/public',
        filename:'main.js'
    },
    
    
    module:{
         rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                },
              },
               {
                test: /\.css$/,
                use: [
                  'postcss-loader',
                    {
                    loader:'file-loader',
                    options:{
                        name:'main.css'
                    }
                }
                ]
             }
         ]

    },
    plugins:[
        new CopyPlugin({
            patterns: [
              {
                from: pathM.resolve(__dirname +"/src/scripts/styles.css"),
                to: pathM.resolve(__dirname+'/src/public')
              }
            ]
        }),
        new CleanWebpackPlugin({ exclude:[".gitkeep"]}),
        new HtmlWebpackPlugin()
    ],
    devServer: {  // configuration for webpack-dev-server
     contentBase:pathM.resolve(__dirname+'/src/scripts'),  //source of static assets
     publicPath:pathM.resolve(__dirname+'/src/public'),
      open: true,
      port: 3000, // port to run dev-server
  } 
}

