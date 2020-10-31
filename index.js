const { urlencoded } = require('express');
const express = require('express');
const PORT = 3030;


const db = require('./config/mongoose');
const todoList  =   require('./models/list');

const   app     = express();

app.use(express.static('./assets'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(urlencoded());

// router the controller to home router for incoming reuests
app.use('/',    require('./routes'));


app.listen(PORT,    (err)=>{
    if(err){
        console.log(`error in running the server : ${err}`);
    }
    console.log(`Server is running on port ${PORT}`);
});