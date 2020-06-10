const DbService = require('../Services/DbService')
const BiscuitsService = require('../Services/BiscuitsService')
var sanitize = require('mongo-sanitize')

//gets all biscuits
const getAllBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getAllBiscuits(db, (documentsReturned) => {
            console.log(documentsReturned)
            res.json(documentsReturned)
        })
    })
}

//gets top 3 biscuits from db
const getTop3Biscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getTop3Biscuits(db, (documentsReturned) => {
            console.log(documentsReturned)
            res.json(documentsReturned)
        })
    })
}

//gets 4th to tenth biscuit
const getFourToTenBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getFourToTenBiscuits(db, (documentsReturned) => {
            console.log(documentsReturned)
            res.json(documentsReturned)
        })
    })
}

//updates the url specified task with the status specified in the body
const putWinnerBiscuit = (req, res) => {
    const name = sanitize(req.body.name)
    const winCount = sanitize(req.body.wincount)
    const comparisonCount = sanitize(req.body.comparisoncount)
    const winRatio = sanitize(req.body.winratio)

    DbService((db) => {
        BiscuitsService.putWinnerBiscuit(db, name, winRatio, comparisonCount, winCount)
    })
}

const putLoserBiscuit = (req, res) => {
    const name = sanitize(req.body.name)
    const comparisonCount = sanitize(req.body.comparisoncount)
    const winRatio = sanitize(req.body.winratio)

    DbService((db) => {
        BiscuitsService.putLoserBiscuit(db, name, winRatio, comparisonCount)
    })
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.getTop3Biscuits = getTop3Biscuits
module.exports.getFourToTenBiscuits = getFourToTenBiscuits
module.exports.putWinnerBiscuit = putWinnerBiscuit
module.exports.putLoserBiscuit = putLoserBiscuit

