const f= require('fs');
const fp = require('path');
const { request, response } = require('express');
let mas;


 function readF(request,response,type){
    const fr = fp.resolve(__dirname,'Products.json');
    let pr = new Promise((resolve,reject)=>{
        f.readFile(fr,'utf-8',
        (err, data2) => {
            if (err) {
              reject(new Error(err.stack));
            } else resolve(JSON.parse(data2));
        });
    });
    pr.then(
        resolve=(mas_parse)=>{
            switch(type){
            case 'create':
            mas_parse.push({"Comics":request.body.comicsname,"Count":request.body.countcomics});
            f.writeFile(fr,JSON.stringify(mas_parse),function(err){if(err)console.log(err);});
            break;
            case 'redact':
                mas_parse[request.body.numbercomics-1].Comics = request.body.comicsname;
                mas_parse[request.body.numbercomics-1].Count = request.body.countcomics;
                f.writeFile(fr,JSON.stringify(mas_parse),function(err){if(err)console.log(err);});
                break;
        }
        mas=Array.from(mas_parse);
        response.render(__dirname+'/main/main.ejs',{mas});
           
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