const pathM = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports={
    mode:'development',
    entry:pathM.resolve(__dirname+'/src/scripts/scripts.js'),
    output:{
        path:pathM.resolve(__dirname,'src/public'),
        filename:'main.js'
    },
    
    
    module:{
         rules:[
             {
                test: /\.css$/,
                use: [
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
        new CleanWebpackPlugin()
    ]
}

