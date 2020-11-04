const { urlencoded } = require('express');
const express = require('express');
const PORT = 3000;


//mvc setup
// database configuration
const db = require('./config/mongoose');
//model setup
const todoList  =   require('./models/list');

const   app     = express();

app.use(express.static('./assets'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(urlencoded());

// router the controller to home roAuter for incoming reuests
//controller setup linked in routes
app.use('/',    require('./routes'));


app.listen(PORT,    (err)=>{
    if(err){
        console.log(`error in running the server : ${err}`);
    }
    console.log(`Server is running on port ${PORT}`);
});