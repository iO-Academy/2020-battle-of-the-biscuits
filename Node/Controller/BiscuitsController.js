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
const putWinnerBiscuit = (req, res) => {
    const name = req.body.name;
    const winCount = req.body.wincount;
    const comparisonCount = req.body.comparisoncount;
    const winRatio = req.body.winratio;

    DbService((db) => {
        BiscuitsService.putWinnerBiscuit(db, name, winRatio, comparisonCount, winCount);
    });
};

const putLoserBiscuit = (req, res) => {
    const name = req.body.name;
    const comparisonCount = req.body.comparisoncount;
    const winRatio = req.body.winratio;

    DbService((db) => {
        BiscuitsService.putLoserBiscuit(db, name, winRatio, comparisonCount);
    });
};


module.exports.getAllBiscuits = getAllBiscuits;
module.exports.getTop3Biscuits = getTop3Biscuits;
module.exports.getFourToTenBiscuits = getFourToTenBiscuits;
module.exports.putWinnerBiscuit = putWinnerBiscuit;
module.exports.putLoserBiscuit = putLoserBiscuit;

