const fileModule= require('fs');
const pathModule = require('path');
const { request, response } = require('express');
let massiveJSON;


 function readF(request,response,type){
    const fileProduct = pathModule.resolve(__dirname,'Products.json');
    let promise = new Promise((resolve,reject)=>{
        fileModule.readFile( fileProduct ,'utf-8',
        (error, data) => {
            if (error) {
              reject(new Error(error.stack));
            } else resolve(JSON.parse(data));
        });
    });
    promise.then(
        resolve=(massiveParseJSON)=>{
            switch(type){
            case 'create':
                massiveParseJSON.push({"Comics":request.body.comicsname,"Count":request.body.countcomics});
            fileModule.writeFile( fileProduct ,JSON.stringify(massiveParseJSON),function(error){if(error)console.log(error);});
            break;
            case 'redact':
                massiveParseJSON[request.body.numbercomics-1].Comics = request.body.comicsname;
                massiveParseJSON[request.body.numbercomics-1].Count = request.body.countcomics;
                fileModule.writeFile( fileProduct ,JSON.stringify(massiveParseJSON),function(error){if(error)console.log(error);});
                break;
        }
        massiveJSON=Array.from(massiveParseJSON);
        response.render(__dirname+'/main/main.ejs',{massiveJSON});
           
        }

    )
    .catch(
        reject=(err)=>{
            console.log("Ошибка чтения файла."+ err.toString());
        }
    )
    
}
exports.appComics = function(request,response){
    if(request.body){
        readF(request,response,'create');
    }

}

exports.redactComics=function(request,response){
    if(request.body){
        readF(request,response,'redact');
    }
}

exports.renderMain = function(request,response){
    response.sendFile(__dirname+'/main/form.html');
}
exports.renderMainRedact = function(request,response){
    response.sendFile(__dirname+'/main/form_redact.html');
}
exports.renderComics = function(request,response){
    readF(request,response,'read');  
}