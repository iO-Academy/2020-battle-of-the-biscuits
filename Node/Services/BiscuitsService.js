//gets a task from db
const getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).sort( { winratio: -1 } ).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets a task from db
const getTop3Biscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).sort( { winratio: -1 } ).limit(3).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets a task from db
const getFourToTenBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).sort( { winratio: -1 } ).skip(3).limit(7).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//update task in db
const putBiscuits = (db, biscuitName, winRatio) => {
    let collection = db.collection('biscuits');

    collection.updateOne({name: biscuitName}, {$set: {winratio: winRatio}})
};


module.exports.getAllBiscuits = getAllBiscuits;
module.exports.getTop3Biscuits = getTop3Biscuits;
module.exports.getFourToTenBiscuits = getFourToTenBiscuits;
module.exports.putBiscuits = putBiscuits;
