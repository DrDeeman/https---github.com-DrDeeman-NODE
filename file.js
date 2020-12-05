exports.fileExists=(f)=>{
    f.stat('Products.json',function(err,stat){
        if(err){
        console.log("Файл не найден. Он будет создан.");
        f.writeFile('Products.json','{"Comics":"Batman","Count":"3"}',function(err){
            console.log("Файл создан.");
        });
    }  
    });
}