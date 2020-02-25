//https://git.heroku.com/ce-node-mongo.git | https://ce-node-mongo.herokuapp.com/

//require and intialize express
const express = require('express');
const app = express();

//express string validator. read more at https://express-validator.github.io/docs/
//had to install this version and not the new one
//const expressValidator = require("express-validator");
const { check, validationResult } = require('express-validator');

//require body parser so we can see post body raw
const bodyParser = require('body-parser');

//just a middleware
const morgan = require("morgan");

//make sure our own middle ware get the 3 parameer so code can continue when missle is done
const myOwnMiddleware = (req, res, next) =>{
	console.log("A Custom middleware");
	next();
}

//package to use the env file
const dotenv = require("dotenv").config();

//packeg to connect to db
const mongoose = require("mongoose");

//connect to db
mongoose.connect(
	process.env.MONGO_URI,
	{useNewUrlParser: true}
	).then(() => console.log("DB Connected"));


//check if dbconnected
mongoose.connection.on("error", err => {
	console.log(`Error connecting: ${err.message}`)
});
 

//fetch router from folder
const postRoutes = require("./route/post");

//morgan middleware. do something while a task is being done. kinda like a aysnc for node
app.use(morgan("dev"));

//use bodyParser for writing raw data to console
app.use(bodyParser.json());

//my own middle
app.use(myOwnMiddleware);


//MAIN SHIT

//initialize this validatr of content
//app.use(expressValidator());

//go to postRoutes, know if to send or get req
//then do either, if send, do it with validation
//wait for the user to enact one of them 2 things via controller...
app.use("/", postRoutes);



//listen
const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`A Node Js API is listening on port: ${port}`);
});






////HOW IT WORKS
/*
App is loaded
User sends data or reqest data. [sends]
Code loads route/post and first validates data with valdator at validator/index
Then sends response to controllers/posts
This then either saves data or gets list. in this case [saves]

*/