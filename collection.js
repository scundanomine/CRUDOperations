console.log("Collection works!!!!!!!!!!!!!!!!!!");
const mongoose = require('mongoose');
const { serialize } = require('v8');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String,
    lang: String,
    since: Number
})

const userX = mongoose.model("usersData2", usersSchema)

module.exports = userX;