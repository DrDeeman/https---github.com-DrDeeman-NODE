const http = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const port = 3000;
const app = http();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(http.static(__dirname+'/src'));
const mainRouter = http.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mainController = require(__dirname + "/controllers.js");
mainRouter.use('/postcomics', mainController.appComics);
mainRouter.use('/deletecomics', mainController.deleteComics);
mainRouter.use('/form.html', mainController.loadComics);
mainRouter.use('/main.html', mainController.renderComics);
mainRouter.use('/postcomicsredact', mainController.editComics);
app.use('/', mainRouter);


//mainRouter.get('/form.html', (request, response) => {
// response.sendFile(__dirname+'/template/form.html')
//});




const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});