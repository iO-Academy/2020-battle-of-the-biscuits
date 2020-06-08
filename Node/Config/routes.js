const BiscuitsController = require('../Controller/BiscuitsController');

const routes = (app) => {
    app.get('/biscuits/', BiscuitsController.getAllBiscuits);

    app.get('/biscuits/top3', BiscuitsController.getTop3Biscuits);

    app.get('/biscuits/4-10', BiscuitsController.getFourToTenBiscuits);

    app.put('/biscuits/', BiscuitsController.putBiscuits);

};

module.exports = routes;