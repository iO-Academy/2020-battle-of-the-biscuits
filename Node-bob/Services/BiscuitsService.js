var shuffle = require('shuffle-array')

//gets all biscuits from from db
const getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits')

    collection.find({}).toArray((err, docs) => {
        let random = shuffle(docs)
        callback(random)
    })
}

//gets the top 3 biscuits, sorted by the highest win ratios.
const getTopThreeBiscuits = (db, callback) => {
    let collection = db.collection('biscuits')
    //sorts by win ratio, and limits to 3 records. 
    collection.find({}).sort( { winratio: -1 } ).limit(3).toArray((err, docs) => {
        callback(docs)
    })
}

//gets the top 4-10 biscuits, ordered by win ratios.
const getFourToTenBiscuits = (db, callback) => {
    let collection = db.collection('biscuits')
    //sorts by win ratio, and limits to 7 records. 
    collection.find({}).sort( { winratio: -1 } ).skip(3).limit(7).toArray((err, docs) => {
        callback(docs)
    })
}

//update db with the winning biscuit (updates win ratio, win count and comparison count)
const putWinnerBiscuit = (db, biscuitName, winRatio, comparisonCount, winCount, cb) => {
    let collection = db.collection('biscuits')
    //updates by biscuit winratio, comparisoncount and wincount by given name
    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount, wincount: winCount}})
    return cb()
}

//update db with the losing biscuit (updates win ratio and comparison count)
const putLoserBiscuit = (db, biscuitName, winRatio, comparisonCount, cb) => {
    let collection = db.collection('biscuits')
    //updates by biscuit winratio and comparisoncount by given name
    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount}})
    return cb()
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.getTopThreeBiscuits = getTopThreeBiscuits
module.exports.getFourToTenBiscuits = getFourToTenBiscuits
module.exports.putWinnerBiscuit = putWinnerBiscuit
module.exports.putLoserBiscuit = putLoserBiscuit
