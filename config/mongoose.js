//DB ODM
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-list');

//acquire the connection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connectingt to db'));


//db id up and running
db.once('open', function(){
    console.log('sucessfully connected to the database');
})