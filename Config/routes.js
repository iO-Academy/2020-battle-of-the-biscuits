const BiscuitsController = require('../Controllers/biscuitsController');

const routes = (app) => {
    app.get('/biscuits/', BiscuitsController.getBiscuits);

    app.get('/biscuits/top3', BiscuitsController.getBiscuits);

    app.get('/biscuits/4-10', BiscuitsController.getBiscuits);

    app.put('/biscuits/', BiscuitsController.putBiscuits);

};

module.exports = routes;