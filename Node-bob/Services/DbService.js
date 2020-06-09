const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbname = 'battle-of-the-biscuits';

const Client = new MongoClient(url, {userNewUrlParser: true, useUnifiedTopology: true});

const connectToDb = (callback) => {
    Client.connect(() => {
        let db = Client.db(dbname);
        callback(db);
    })
}

module.exports = connectToDb;
