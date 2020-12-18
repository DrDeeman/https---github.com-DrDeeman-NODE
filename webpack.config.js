const pathM = require('path');

module.exports={
    mode:'development',
    entry:pathM.resolve(__dirname+'/main/static/scripts.js'),
    output:{
        path:pathM.resolve(__dirname,'public'),
        filename:'main.js'
    }

}