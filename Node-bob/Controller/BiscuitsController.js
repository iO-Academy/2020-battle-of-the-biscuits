const DbService = require('../Services/DbService')
const BiscuitsService = require('../Services/BiscuitsService')
var sanitize = require('mongo-sanitize')

//gets all biscuits
const getAllBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getAllBiscuits(db, (documentsReturned) => {
            res.json({data:documentsReturned})
        })
    })
}

//gets top 3 biscuits from db
const getTopThreeBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getTopThreeBiscuits(db, (documentsReturned) => {
            res.json({data:documentsReturned})
        })
    })
}

//gets 4th to tenth biscuit
const getFourToTenBiscuits = (req, res) => {

    DbService((db) => {
        BiscuitsService.getFourToTenBiscuits(db, (documentsReturned) => {
            res.json({data:documentsReturned})
        })
    })
}

//updates the url specified task with the status specified in the body
const putWinnerBiscuit = (req, res) => {
    const name = sanitize(req.body.name)
    const winCount = sanitize(req.body.wincount)
    const comparisonCount = sanitize(req.body.comparisoncount)
    const winRatio = sanitize(req.body.winratio)
    //needs checking
    DbService((db) => {
        BiscuitsService.putWinnerBiscuit(db, name, winRatio, comparisonCount, winCount, (documentsReturned) => {
            res.json({
                'data': documentsReturned, 
                'success': true,
                'message': 'it worked!',
                'status': 200
            })
        })
    })
}

const putLoserBiscuit = (req, res) => {
    const name = sanitize(req.body.name)
    const comparisonCount = sanitize(req.body.comparisoncount)
    const winRatio = sanitize(req.body.winratio)

    DbService((db) => {
        BiscuitsService.putLoserBiscuit(db, name, winRatio, comparisonCount, (documentsReturned) => {
            res.json({data:documentsReturned})
        })
    })
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.getTopThreeBiscuits = getTopThreeBiscuits
module.exports.getFourToTenBiscuits = getFourToTenBiscuits
module.exports.putWinnerBiscuit = putWinnerBiscuit
module.exports.putLoserBiscuit = putLoserBiscuit

