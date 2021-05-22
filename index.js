//require and initialise the server engine
const express = require("express");
const app = express();

var cookieParser = require('cookie-parser')
app.use(cookieParser())

//set env file
require("dotenv").config();

//setup views dir
//import built in path module
const path = require("path")

//initialise a view path. full d
app.set('views', path.join(__dirname, 'views'))

//initialise the view templeting engine
app.set('view engine', 'mustache')

//initialize view engine as middleware
app.engine('mustache', require("hogan-middleware").__express)

//custom midlewares
let middle = require("./cModules/middle.js")

let validateCookie = require("./cModules/validateCookie.js")

/* 
incase template hogan becoms hard to dig: 
https://www.udemy.com/course/intro-to-node-js-express/learn/lecture/12546954?start=313#bookmarks
OR 
let hogan = require("hogan-middleware")
app.engine('mustache', hogan.__express) 
*/

//set static assets 
app.use(express.static(path.join(__dirname, "public")))

//use express for form handling
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//main route for everything that ends up on home
const main = require("./routes/main")
app.use("/", middle, validateCookie, main);

//app settings mostly, notificatons, privacy...
const settings = require("./routes/settings")
app.use("/settings", settings); 

//account related actions, create edit...
const account = require("./routes/account")
app.use("/account", account);

//questions routes
const question = require("./routes/q")
app.use("/q", question);

//sql test routes
const sqlDB = require("./routes/sqlTest")
app.use("/sql", validateCookie, sqlDB);


//connect mongoose DB
const mongoose = require("mongoose")
mongoose.connect(
    process.env.Server,
    {useNewUrlParser: true, useUnifiedTopology: true},//require by mongo  
).then(() => {console.log("Mongo Database Connected..."); console.log("\x1b[32m...Qboard ready... \x1b[0m  \n")})

//confirm connection
mongoose.connection.on("error", err => {
    console.log(`Error connecting to Mongo Database: ${err.message}`)
})


//create a port and start server
const port = process.env.Port || 4000;
app.listen(port, () =>{
console.log(`Server Started at port ${port}...`)
})

