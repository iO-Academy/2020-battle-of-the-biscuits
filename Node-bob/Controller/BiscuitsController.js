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
    console.log(typeof name)
    const comparisonCount = sanitize(req.body.comparisoncount)
    const winCount = sanitize(req.body.wincount)
    
    // const winRatio = sanitize(req.body.winratio)

    let newWinCount = updateScores (winCount)
    let newComparisonCount = updateScores (comparisonCount)
    let newWinRatio = winRatioCalculate(newWinCount, newComparisonCount)

    //needs checking
    return DbService((db) => {
        return BiscuitsService.putWinnerBiscuit(db, name, newWinRatio, newComparisonCount, newWinCount, () => {
            return res.json({
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

    return DbService((db) => {
        return BiscuitsService.putLoserBiscuit(db, name, winRatio, comparisonCount, () => {
            return res.json({
                'success': true,
                'message': 'it worked!',
                'status': 200
            })     
        })
    })
}

const updateScores = (count) => {
    return count++
}

const winRatioCalculate = (winCount, comparisonCount) => {
    let result = ((winCount/comparisonCount) * 100)
    return result.toFixed(1)
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.getTopThreeBiscuits = getTopThreeBiscuits
module.exports.getFourToTenBiscuits = getFourToTenBiscuits
module.exports.putWinnerBiscuit = putWinnerBiscuit
module.exports.putLoserBiscuit = putLoserBiscuit
