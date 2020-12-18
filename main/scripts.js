
 async function loadComics() {
    let tableNode = document.getElementById('tableComics');
    while (tableNode.childNodes[1])
        tableNode.childNodes[1].remove();
    document.getElementById('countcomics').value = document.getElementById('comicsname').value = document.getElementById('numbercomics').value = '';
    let response = await fetch('/form.html');
    let masJSON = await response.json();
    masJSON.forEach((ob, i) => {
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.innerText = i + 1;
        th2.innerText = ob.Comics;
        th3.innerText = ob.Count;
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        document.getElementById('tableComics').appendChild(tr);
    });
}
loadComics();

 async function createProduct() {
    let response = await fetch('/postcomics', {
        method: "POST",
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            Comics: document.getElementById('comicsname').value,
            Count: document.getElementById('countcomics').value
        })
    });
    if (response.ok) {
        loadComics();
    }
     else if(response.status==500){
         alert("Ошибка сервера. Попробуйте позже.");
     }
}

 async function redactProduct() {
    let name = document.getElementById('comicsname').value;
    let number = document.getElementById('numbercomics').value;
    let count = document.getElementById('countcomics').value;
    let response;
    if (name == '' || number == '' || count == '') {
        response = await fetch('/postcomicsredact', {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                Number: number,
                Comics: name
            })
        });
    } else {
        response = await fetch('/postcomicsredact', {
            method: "PUT",
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                Number: number,
                Comics: name,
                Count: count
            })
        });
    }
    if (response.ok) {
        loadComics();
    }
     else if(response.status==500){
         alert("Ошибка сервера. Попробуйте позже.");
     }

}


 async function deleteProduct() {
    let response = await fetch('/deletecomics', {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            Comics: document.getElementById('numbercomics').value
        })
    });
    if (response.ok) {
        loadComics();
    }
     else if(response.status==500){
         alert("Ошибка сервера. Попробуйте позже.");
     }
}