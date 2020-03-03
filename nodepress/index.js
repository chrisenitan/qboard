//require and initialise the server engine
const express = require("express");
const app = express();

//set env file
require("dotenv").config();

//setup views dir. 
//import built in path module
const path = require("path")

//initialise the view path
app.set('views', path.join(__dirname, 'views'))

//initialise the view templeting engine
app.set('view engine', 'mustache')

//get the view engine
const hoganMiddleware = require("hogan-middleware")

//initialize view engine as middleware
app.engine('mustache', hoganMiddleware.__express)
//or app.engine('mustache', require("hogan-middleware").__express)

//set status assets 
app.use(express.static(path.join(__dirname, "public")))

//set and import routes 
const routerIndex = require("./routes/routerIndex")
app.use("/", routerIndex);








const bodyParser = require('body-parser');


//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))





const port = process.env.port || 3000;
//app.listen(port);
app.listen(port, () =>{
console.log(`Server Started at port ${port}...`)
})


//installed templating engine mustache as hjn
//installed mustach as hogan-middleware 