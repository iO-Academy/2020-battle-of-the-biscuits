const DbService = require('../Services/DbService');
const BiscuitsService = require('../Services/BiscuitsService');

//gets completed/uncompleted Biscuits depending on what the user specifies in the URL
const getAllBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getAllBiscuits(db, (documentsReturned) => {
            console.log(documentsReturned);
            res.json(documentsReturned);
        });
    });
};

const getTop3Biscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getTop3Biscuits(db, (documentsReturned) => {
            console.log(documentsReturned);
            res.json(documentsReturned);
        });
    });
};

const getFourToTenBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getFourToTenBiscuits(db, (documentsReturned) => {
            console.log(documentsReturned);
            res.json(documentsReturned);
        });
    });
};

//updates the url specified task with the status specified in the body
const putBiscuits = (req, res) => {
    const winRatio = req.body.winRatio;

    DbService((db) => {
        BiscuitsService.putBiscuits(db, winRatio);
    });
};


module.exports.getAllBiscuits = getAllBiscuits;
module.exports.getTop3Biscuits = getTop3Biscuits;
module.exports.getFourToTenBiscuits = getFourToTenBiscuits;
module.exports.putBiscuits = putBiscuits;

