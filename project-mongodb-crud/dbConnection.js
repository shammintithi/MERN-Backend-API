const { MongoClient } = require('mongodb');

// Connection MongoDB URL
let dbConnectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbConnectionURL);


let dbConnection= async()=>{
    await client.connect();
    let db =client.db("mongodbProject")
    return db;
}

module.exports=dbConnection;