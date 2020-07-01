const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbname = 'battle-of-the-biscuits'

const Client = new MongoClient(url, {userNewUrlParser: true, useUnifiedTopology: true})

const connectToDb = (callback) => {
    return Client.connect(() => {
        let db = Client.db(dbname)
        return callback(db)
    })
}

module.exports = connectToDb
