const fileModule = require('fs');
const pathModule = require('path');
const { request, response } = require('express');
let arrayJSON;


function readF(request, response, type) {
    const fileProduct = pathModule.resolve(__dirname, 'Products.json');
    let promise = new Promise((resolve, reject) => {
        fileModule.readFile(fileProduct, 'utf-8',
            (error, data) => {
                if (error) {
                    reject(new Error(error.stack));
                } else {
                    if (type == 'add' || type == 'edit' || type == 'delete') {
                        resolve(JSON.parse(data));
                    }
                    if (type == 'load') {
                        resolve(data);
                    }
                }
            });
    });
    promise.then(
        resolve = (data) => {
            switch (type) {
                case 'add':
                    data.push(request.body);
                    fileModule.writeFile(fileProduct, JSON.stringify(data),
                        function (error) {
                            if (error) {
                                console.log(error);
                                response.sendStatus(500);
                            }
                        });
                    response.sendStatus(200);
                    break;
                case 'edit':
                    data[request.body.Number - 1].Comics = request.body.Comics;
                    if (Object.keys(request.body).length == 3) {
                        data[request.body.Number - 1].Count = request.body.Count;
                    }
                    fileModule.writeFile(fileProduct, JSON.stringify(data),
                        function (error) {
                            if (error) {
                                console.log(error);
                                response.sendStatus(500);
                            }
                        });
                    response.sendStatus(200);
                    break;
                case 'delete':
                    data.splice(request.body.Number - 1, 1);
                    fileModule.writeFile(fileProduct, JSON.stringify(data),
                        function (error) {
                            if (error) {
                                console.log(error);
                                response.sendStatus(500);
                            }
                        });
                    response.sendStatus(200);
                    break;
                case 'load':
                    response.send(data);
                    break;
            }
        }
    )
}
exports.appComics = function (request, response) {
    if (request.body) {
        readF(request, response, 'add');
    }
}

exports.editComics = function (request, response) {
    if (request.body) {
        readF(request, response, 'edit');
    }
}

exports.deleteComics = function (request, response) {
    if (request.body.Number != '') {
        readF(request, response, 'delete');
    }
}
exports.renderComics = function (request, response) {
    response.render(__dirname + '/src/scripts/main.ejs');
}

exports.loadComics = function (request, response) {
    readF(request, response, 'load');
}