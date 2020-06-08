const TasksController = require('../Controllers/TasksController');
const LoginController = require('../Controllers/LoginController');

const expressjwt = require('express-jwt');

const jwtCheck = expressjwt({
    secret: 'mysupersecretkey'
});

const routes = (app) => {
    //gets tasks by defined status from param
    app.get('/tasks/:status', TasksController.getTasks);

    //update param defined task from body
    app.put('/tasks/:task', jwtCheck, TasksController.putTasks);

};

module.exports = routes;