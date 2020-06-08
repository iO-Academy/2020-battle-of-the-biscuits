const DbService = require('../Services/DbService');
const BiscuitsService = require('../Services/BiscuitsService');

//gets completed/uncompleted Biscuits depending on what the user specifies in the URL
const getBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getAllBiscuits(db, (documentsReturned) => {
            console.log(documentsReturned);
            res.json(documentsReturned);
        });
    });
};

const getBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getTop3Biscuits(db, (documentsReturned) => {
            console.log(documentsReturned);
            res.json(documentsReturned);
        });
    });
};

const getBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getFourToSevenBiscuits(db, (documentsReturned) => {
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


module.exports.getBiscuits = getBiscuits;
module.exports.putBiscuits = putBiscuits;
