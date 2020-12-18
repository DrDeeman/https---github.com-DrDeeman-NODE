const pathM = require('path');

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
                    'file-loader'
                ],
                options:{
                    name:'main.css',
                    outputPath:'src/public'
                }
             }
         ]
    }
}

