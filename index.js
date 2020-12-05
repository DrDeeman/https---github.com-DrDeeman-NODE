
const readline = require('readline');
const c = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const f= require('fs');
const fp = require('path');
const { Console } = require('console');
const functions = require(fp.resolve(__dirname,'functions.js'));
const fileFunction = require(fp.resolve(__dirname,'file.js'));
fileFunction.fileExists(f);
const fr = fp.resolve(__dirname,'Products.json');

let data ;
let content;
let  pr;




    pr = new Promise((res,rej)=>{ f.readFile(fr,'utf-8',
    (err, data2) => {
        if (err) {
          console.log(err.stack);
          return;
        }
        
       res(data2);
    });
      });
     pr.then(
         res =str=>{data=str;content = JSON.parse(data); });

let pr2 = new Promise((res,rej)=>{
c.question('Приветствуем Вас. Введите номер желаемого действия.\n 1.Просмотреть каталог.\n 2.Добавить товар.\n 3.Изменить товар.\n 4.Удалить товар.',
(number)=>{
    switch(number){
       case '1':
            
            content.forEach((ob)=>{console.log("Комикс: "+ob.Comics+".Цена: "+ob.Count);});
            res();
           break;
       case '2':
       functions.pushProduct(c,f,fr,content);
           break;
       case '3':
          functions.changeProduct(c,f,fr,content);
           break;
       case '4':
       functions.deleteProduct(c,f,fr,content);
           break;
    }

}
)

});
pr2.then(
res=()=>{c.close();}
);



