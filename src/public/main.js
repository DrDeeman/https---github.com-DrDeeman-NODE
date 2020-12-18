/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
eval("\r\n async function loadComics() {\r\n    let tableNode = document.getElementById('tableComics');\r\n    while (tableNode.childNodes[1])\r\n        tableNode.childNodes[1].remove();\r\n    document.getElementById('countcomics').value = document.getElementById('comicsname').value = document.getElementById('numbercomics').value = '';\r\n    let response = await fetch('/form.html');\r\n    let masJSON = await response.json();\r\n    masJSON.forEach((ob, i) => {\r\n        let tr = document.createElement('tr');\r\n        let th1 = document.createElement('th');\r\n        let th2 = document.createElement('th');\r\n        let th3 = document.createElement('th');\r\n        th1.innerText = i + 1;\r\n        th2.innerText = ob.Comics;\r\n        th3.innerText = ob.Count;\r\n        tr.appendChild(th1);\r\n        tr.appendChild(th2);\r\n        tr.appendChild(th3);\r\n        document.getElementById('tableComics').appendChild(tr);\r\n    });\r\n}\r\nloadComics();\r\n\r\n async function createProduct() {\r\n    let response = await fetch('/postcomics', {\r\n        method: \"POST\",\r\n        headers: {\r\n            'Content-type': 'application/json;charset=utf-8'\r\n        },\r\n        body: JSON.stringify({\r\n            Comics: document.getElementById('comicsname').value,\r\n            Count: document.getElementById('countcomics').value\r\n        })\r\n    });\r\n    if (response.ok) {\r\n        loadComics();\r\n    }\r\n     else if(response.status==500){\r\n         alert(\"Ошибка сервера. Попробуйте позже.\");\r\n     }\r\n}\r\n\r\n async function redactProduct() {\r\n    let name = document.getElementById('comicsname').value;\r\n    let number = document.getElementById('numbercomics').value;\r\n    let count = document.getElementById('countcomics').value;\r\n    let response;\r\n    if (name == '' || number == '' || count == '') {\r\n        response = await fetch('/postcomicsredact', {\r\n            method: \"PATCH\",\r\n            headers: {\r\n                'Content-type': 'application/json;charset=utf-8'\r\n            },\r\n            body: JSON.stringify({\r\n                Number: number,\r\n                Comics: name\r\n            })\r\n        });\r\n    } else {\r\n        response = await fetch('/postcomicsredact', {\r\n            method: \"PUT\",\r\n            headers: {\r\n                'Content-type': 'application/json;charset=utf-8'\r\n            },\r\n            body: JSON.stringify({\r\n                Number: number,\r\n                Comics: name,\r\n                Count: count\r\n            })\r\n        });\r\n    }\r\n    if (response.ok) {\r\n        loadComics();\r\n    }\r\n     else if(response.status==500){\r\n         alert(\"Ошибка сервера. Попробуйте позже.\");\r\n     }\r\n\r\n}\r\n\r\n\r\n async function deleteProduct() {\r\n    let response = await fetch('/deletecomics', {\r\n        method: \"DELETE\",\r\n        headers: {\r\n            'Content-type': 'application/json;charset=utf-8'\r\n        },\r\n        body: JSON.stringify({\r\n            Comics: document.getElementById('numbercomics').value\r\n        })\r\n    });\r\n    if (response.ok) {\r\n        loadComics();\r\n    }\r\n     else if(response.status==500){\r\n         alert(\"Ошибка сервера. Попробуйте позже.\");\r\n     }\r\n}\n\n//# sourceURL=webpack://npm-tutorial/./src/scripts/scripts.js?");
/******/ })()
;