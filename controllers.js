const fileModule= require('fs');
const pathModule = require('path');
const { request, response } = require('express');
let arrayJSON;


function readF(request,response,type){
    const fileProduct = pathModule.resolve(__dirname,'Products.json');
    let promise = new Promise((resolve,reject)=>{
        fileModule.readFile( fileProduct ,'utf-8',
        (error, data) => {
            if (error) {
              reject(new Error(error.stack));
            } else {
                if(type=='add')resolve(JSON.parse(data));
                if(type=='load') resolve(data);
            }
        });
    });
    promise.then(
        resolve=(data)=>{
            switch(type){
                case 'add':
                    console.log(request.body);
         data.push(request.body);
        fileModule.writeFile( fileProduct ,JSON.stringify(data),function(error){if(error)console.log(error);});
     break;
     case 'load':
        response.send(data);
        break;
            }
    }
    )
}
exports.appComics = function(request,response){
    if(request.body){
      readF(request,response,'add');
    }

}

exports.editComics=function(request,response){
    if(request.body){
        readF(request,response,'edit');
    }
}

exports.renderMain = function(request,response){
 
}
exports.renderMainRedact = function(request,response){
    response.sendFile(__dirname+'/main/form_redact.html');
}
exports.renderComics = function(request,response){
 

        response.sendFile(__dirname+'/main/main.html');

}

exports.loadComics = function(request,response){
    readF(request,response,'load');
}