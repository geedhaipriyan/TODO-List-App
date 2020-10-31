const mongoose = require('mongoose');

const ListSChema    =   new mongoose.Schema({
    description :   {
        type    :   String,
        required:   true
    },
    tag :   {
        type    :   String,
        required:   true
    },
    date    :   {
        type    :   Date,
        required:   true
    }
});

const TodoList  =   mongoose.model('TodoList',  ListSChema);

module.exports  =   TodoList;