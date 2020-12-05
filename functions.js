exports.pushProduct=(c,f,fr,content)=>{
    c.question("Введите название товара.\n",(str)=>{
       c.question("Введите цену товара.\n",(str2)=>{
        content.push({"Comics":str,"Count":str2});
        f.writeFile(fr,JSON.stringify(content),function(err){if(err)console.log(err);});
        console.log("Товар создан.\n");
        res();
        });
        });
}

exports.changeProduct=(c,f,fr,content)=>{
    c.question("Введите название товара, которое хотите изменить.\n",(str)=>{
        let index=content.findIndex(ob=>ob.Comics==str);
        if(index!=-1){
            c.question("Введите новую цену товара.\n",(str2)=>{
                content[index].Count=str2;
                f.writeFile(fr,JSON.stringify(content),function(err){if(err)console.log(err);});
                console.log("Цена товара изменена.");
            });
        }else console.log("Элемент не найден.\n");
        res();
       })
}

exports.deleteProduct=(c,f,fr,content)=>{
    c.question("Введите название товара, которое хотит удалить.\n",(str)=>{
        let index=content.findIndex(ob=>ob.Comics==str);
        if(index!=-1){
            content.splice(index,1);
            f.writeFile(fr,JSON.stringify(content),function(err){if(err)console.log(err);});
            console.log("Элемент удален.\n");
        }else console.log("Элемент не найден.\n");
        res();
    });
}