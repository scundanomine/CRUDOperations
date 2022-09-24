console.log("it works!!!!!!!!!!!!!!!!!!");
const mongoose = require("mongoose");
//const contentX = require('../models/content.js')

async function getConnection() {
    let db_link = "mongodb+srv://scundanomine:System%402021~%21@cluster0.oy6ccgq.mongodb.net/jusers?retryWrites=true&w=majority"
    // let db_link = "mongodb://localhost:27017/users"
    await mongoose.connect(db_link,
        (err) => {
            if (err) console.log(err)
            else console.log("mongdb is connected");
        }
    );

    await mongoose.connection.once('open', function () {
        console.log("Connection is establish")
    }).on('error', function (error) {
        console.log("error is " + error);
    })
}
let createConnection = { getConnection: getConnection() };

module.exports = createConnection;