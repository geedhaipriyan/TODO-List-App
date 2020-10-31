const todo_list = require('../models/list');
// const utilityScripts =   require('../assets/js/utility');
console.log(todo_list);

module.exports.home = (req,  res)=>{
    
    todo_list.find({}).sort({'date': 1}).exec((err, todolist)=>{
        if(err){
            console.log('error in connecting to db');
            return;
        }
        res.render('todo-list', {
            title   :   "TODO-LIST",
            todolist    :   todolist,
            upcoming    :   todolist[0],
            // utils: utilityScripts,
        });
    })
}

module.exports.create   =   (req, res)=>{
    // console.log(req.body);
    todo_list.create({
        description: req.body.description,
        tag: req.body.tag,
        date: req.body.duedate
    }, function(err, newTask){
        if(err)
        {
            console.log('error in creating contact',err);
            return;
        }
        console.log('*******', newTask);
        return res.redirect('/');
     });
}


module.exports.remove = (req,   res)=>{
    console.log(req.body);
    for(i in req.body){
        todo_list.findByIdAndDelete(i,  (err)=>{
            if(err){
                console.log('error in deleting a task');
            }
        });
    }
    return res.redirect('/');
}