//gets all biscuits from from db
const getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets the top3 biscuits, sorted by the highest win ratios.
const getTop3Biscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).sort( { winratio: -1 } ).limit(3).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets the top4-10 biscuits, ordered by win ratios.
const getFourToTenBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).sort( { winratio: -1 } ).skip(3).limit(7).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//update task in db
const putWinnerBiscuit = (db, biscuitName, winRatio, comparisonCount, winCount) => {
    let collection = db.collection('biscuits');

    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount, wincount: winCount}})
};

//update task in db
const putLoserBiscuit = (db, biscuitName, winRatio, comparisonCount) => {
    let collection = db.collection('biscuits');

    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount}})
};


module.exports.getAllBiscuits = getAllBiscuits;
module.exports.getTop3Biscuits = getTop3Biscuits;
module.exports.getFourToTenBiscuits = getFourToTenBiscuits;
module.exports.putWinnerBiscuit = putWinnerBiscuit;
module.exports.putLoserBiscuit = putLoserBiscuit;
