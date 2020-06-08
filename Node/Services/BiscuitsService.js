//gets a task from db
const getBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets a task from db
const getTop3Biscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//gets a task from db
const getFourToSevenBiscuits = (db, callback) => {
    let collection = db.collection('biscuits');

    collection.find({}).toArray((err, docs) => {
        console.log('Found the following records');
        callback(docs);
    })
};

//update task in db
const putBiscuits = (db, task, updateStatus) => {
    let collection = db.collection('Biscuits');

    collection.updateOne({task: task}, {$set: {status: updateStatus}})
};


module.exports.getBiscuits = getBiscuits;
module.exports.putBiscuits = putBiscuits;
