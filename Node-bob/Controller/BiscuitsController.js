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
    console.log(req.body)
    let name = sanitize(req.body.name)
    let comparisonCount = parseFloat(sanitize(req.body.comparisoncount))
    let winCount = parseFloat(sanitize(req.body.wincount))
    
    winCount++
    comparisonCount++

    let newWinRatio = winRatioCalculate(winCount, comparisonCount)

    //needs checking
    return DbService((db) => {
        return BiscuitsService.putWinnerBiscuit(db, name, newWinRatio, comparisonCount, winCount, () => {
            return res.json({
                'success': true,
                'message': 'it worked!',
                'status': 200
            })
        })
    })
}

const putLoserBiscuit = (req, res) => {
    let name = sanitize(req.body.name)
    let comparisonCount = parseFloat(sanitize(req.body.comparisoncount))
    let winCount = parseFloat(sanitize(req.body.wincount))
    comparisonCount++
    let newWinRatio = winRatioCalculate(winCount, comparisonCount)

    return DbService((db) => {
        return BiscuitsService.putLoserBiscuit(db, name, newWinRatio, comparisonCount, winCount, () => {
            return res.json({
                'success': true,
                'message': 'it worked!',
                'status': 200
            })     
        })
    })
}

const winRatioCalculate = (winCount, comparisonCount) => {
    if (comparisonCount == 0) {
        let result = 0
        return result
    } else {
    let result = ((winCount/comparisonCount) * 100)
    return result.toFixed(1)
    }
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.getTopThreeBiscuits = getTopThreeBiscuits
module.exports.getFourToTenBiscuits = getFourToTenBiscuits
module.exports.putWinnerBiscuit = putWinnerBiscuit
module.exports.putLoserBiscuit = putLoserBiscuit
module.exports.winRatioCalculate = winRatioCalculate
