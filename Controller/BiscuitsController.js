const DbService = require('../Services/DbService');
const TasksService = require('../Services/TasksService');

//gets completed/uncompleted tasks depending on what the user specifies in the URL
const getTasks = (req, res) => {
    const taskStatus = req.params.status;

    DbService((db) => {
        TasksService.getTasks(db,  taskStatus, (documentsReturned) => {
            console.log(documentsReturned);
            res.render('tasks', {documentsReturned: documentsReturned});
        });
    });
};

//adds a task to the db
const postTasks = (req, res) => {
    const newTask = req.body.task;
    const newStatus = req.body.status;
    
    const dataToSend = {
        task: newTask,
        status: newStatus,
    };

    DbService((db) => {
        TasksService.postTasks(db, dataToSend)
    });

    res.redirect('/tasks')
};

//updates the url specified task with the status specified in the body
const putTasks = (req, res) => {
    const task = req.params.task;
    const updateStatus = req.body.status;

    DbService((db) => {
        TasksService.putTasks(db, task, updateStatus);
    });
};

//deletes task when specified in the body
const deleteTasks = (req, res) => {
    const task = req.body.task
    const status = req.body.status
    let deleted = 'deleted'

    DbService((db) => { 
        console.log (deleted, task);
        TasksService.deleteTasks(db,  task, status);
    });
};

module.exports.getTasks = getTasks;
module.exports.postTasks = postTasks;
module.exports.putTasks = putTasks;
module.exports.deleteTasks = deleteTasks;