const http = require('express');
const bodyParser = require("body-parser");
const port = 3000;
const app = http();
const f= require('fs');
const fp = require('path');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const mainRouter = http.Router();
const mainController = require(__dirname+"/controllers.js");
mainRouter.use('/postcomics',mainController.appComics);
mainRouter.use('/form.html',mainController.renderMain);
mainRouter.use('/main.html',mainController.renderComics);
mainRouter.use('/form_redact.html', mainController.renderMainRedact);
mainRouter.use('/postcomicsredact',mainController.redactComics);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',mainRouter);


//mainRouter.get('/form.html', (request, response) => {
   // response.sendFile(__dirname+'/template/form.html')
//});




const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});