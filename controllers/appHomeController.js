const todo_list = require('../models/list');
// const utilityScripts =   require('../assets/js/utility');
console.log(todo_list);


//home route '/'
module.exports.home = (req,  res)=>{
    
    todo_list.find({}).sort({'date': 1}).exec((err, todolist)=>{
        if(err){
            console.log('error in connecting to db');
            return;
        }
        // task percentage is calculated and sent in locals for visualizer setup in ejs
        let work = todolist.filter((obj)=>obj.tag==="Work").length;
        let personal = todolist.filter((obj)=>obj.tag==="Personal").length;
        let school = todolist.filter((obj)=>obj.tag==="School").length;
        let other = todolist.filter((obj)=>obj.tag==="Other").length;
        let sum = work + personal + school + other;
        let chart = {
            work:   ((work/sum)*100),
            personal:   ((personal/sum)*100),
            school: ((school/sum)*100),
            other:  ((other/sum)*100)
        }
        return res.render('todo-list', {
            title   :   "TODO-LIST",
            todolist    :   todolist,
            upcoming    :   todolist[0],
            chart   :   chart,
            // utils: utilityScripts,
        });
    })
}

// adding todo list tasks
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


//deleting todolist tasks
module.exports.remove = (req,   res)=>{
    for(i in req.body){
        todo_list.findByIdAndDelete(i,  (err)=>{
            if(err){
                console.log('error in deleting a task');
            }
        });
    }
    return res.redirect('/');
}