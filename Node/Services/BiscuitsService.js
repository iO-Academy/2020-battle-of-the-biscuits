//gets all biscuits from from db
const getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).toArray((err, docs) => {
        callback(docs);
    })
};

//gets the top3 biscuits, sorted by the highest win ratios.
const getTop3Biscuits = (db, callback) => {
    let collection = db.collection('biscuits');
    //sorts by win ratio, and limits to 3 records. 
    collection.find({}).sort( { winratio: -1 } ).limit(3).toArray((err, docs) => {
        callback(docs);
    })
};

//gets the top4-10 biscuits, ordered by win ratios.
const getFourToTenBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');
    //sorts by win ratio, and limits to 7 records. 
    collection.find({}).sort( { winratio: -1 } ).skip(3).limit(7).toArray((err, docs) => {
        callback(docs);
    })
};

//update db with the winning biscuit (updates win ratio, win count and comparison count)
const putWinnerBiscuit = (db, biscuitName, winRatio, comparisonCount, winCount) => {
    let collection = db.collection('biscuits');
    //updates by biscuit winratio, comparisoncount and wincount by given name
    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount, wincount: winCount}})
};

//update db with the losing biscuit (updates win ratio and comparison count)
const putLoserBiscuit = (db, biscuitName, winRatio, comparisonCount) => {
    let collection = db.collection('biscuits');
    //updates by biscuit winratio and comparisoncount by given name
    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio, comparisoncount: comparisonCount}})
};

module.exports.getAllBiscuits = getAllBiscuits;
module.exports.getTop3Biscuits = getTop3Biscuits;
module.exports.getFourToTenBiscuits = getFourToTenBiscuits;
module.exports.putWinnerBiscuit = putWinnerBiscuit;
module.exports.putLoserBiscuit = putLoserBiscuit;
