console.log("It works!!!!!!");
const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose');
const { serialize } = require('v8');
const Schema = mongoose.Schema;

//const mongoose= require("mongoose");
const createConnection = require("./databaseConnection");

// Connection to database
createConnection.getConnection

//Creation of schema and collection (model)
const usersSchema = new Schema({
    name: String,
    lang: String,
    since: Number
})
const usersX = mongoose.model("usersData", usersSchema)

//Entry in database
// for (let i = 0; i < 5; i++) {
//     usersX.create({
//         name: "Jeeshan" + i,
//         lang: "JS" + i,
//         since: i
//     });
// }

//For Mini App
const userRouter = express.Router();
app.use("/user", userRouter);

userRouter
    .route('/')
    .get(getUser)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser)

userRouter
    .route('/:id')
    .get(getUserById)


let userData = [
    {
        id: 1,
        userName: "Amit"
    },
    {
        id: 2,
        userName: "Prashant"
    },
    {
        id: 3,
        userName: "Dhiraj"
    }
];

async function getUser(req, res) {
    let allData = await usersX.find({name:"Jeeshan2"})
    res.json({
        mess: "Data has been sent successfully",
        data:allData})
}

function postUser(req, res) {
    console.log(req.body);
    userData = req.body;
    res.json({
        mess: "Data has been sent successfully"
    });
}

function patchUser(req, res) {
    let updatedData = req.body;
    for (key in updatedData) {
        userData[key] = updatedData[key];
    }
    res.json({
        mess: "Data has been sent successfully"
    });
}

function deleteUser(req, res) {
    userData = {};
    res.json({
        mess: "Data has been deleted successfully"
    });
}

function getUserById(req, res) {
    console.log(req.params.id)
    let flag = false;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].id == req.params.id) {
            res.send("UserName:" + userData[i].userName)
            flag = true;
            break;
        }
    }
    if (flag == false)
        res.send('Requested Data not found')
}

app.listen(3000, function jee() {
    console.log("The server has been startd");
})
