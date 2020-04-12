//require and initialise the server engine
const express = require("express");
const app = express();

//set env file
require("dotenv").config();

//setup views dir
//import built in path module
const path = require("path")

//initialise a view path
app.set('views', path.join(__dirname, 'views'))

//initialise the view templeting engine
app.set('view engine', 'mustache')

//initialize view engine as middleware
app.engine('mustache', require("hogan-middleware").__express)
/* 
OR 
let hogan = require("hogan-middleware")
app.engine('mustache', hogan.__express) 
*/


//set static assets 
app.use(express.static(path.join(__dirname, "public")))


//use body parser. Required to be used before sending Form Posts 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



//set and import routes 
const routerIndex = require("./routes/routerIndex")
app.use("/", routerIndex);

/* 
//use middleware for sqlRoute DB login
app.use((req, res, next) =>{

const sqldbip = process.env.SQLServer 

const sqldb = mysql.createConnection({
    host     : sqldbip,
    user     : 'admin_chris',
    password : 'staging123',
    database : 'nodepress'
});

sqldb.connect((err) => {
    if(err){ throw err }
    
console.log("MySQL Database Connected...")
    
    next()
}) 
*/

//set and imoort router for sql links
const sqlRoute = require("./routes/sqlRoute")
app.use("/sql", sqlRoute);


//DATABASE
//get mongoose
const mongoose = require("mongoose")

//connect to db
mongoose.connect(
    process.env.Server,
    {userNewUrlParser: true, useUnifiedTopology: true},//require by mongo  
).then(() => console.log("Mongo Database Connected..."))

//confirm connection
mongoose.connection.on("error", err => {
    console.log(`Error connecting to Mongo Database: ${err.message}`)
})




//SERVER
//create a port and start server
const port = process.env.Port || 3000;
app.listen(port, () =>{
console.log(`Server Started at port ${port}...`)
})



/*
installed templating engine mustache as hjn
installed mustach as hogan-middleware
to start importing mysql code
 */