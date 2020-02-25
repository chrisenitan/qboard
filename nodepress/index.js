const express = require("express");
//path to views
const path = require("path")
const hoganMiddleware = require("hogan-middleware")
const bodyParser = require('body-parser');

const app = express();


//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//import routes 
const routerIndex = require("./routes/routerIndex")
app.use("/", routerIndex);

//tell node where to set views for template
app.set('views', path.join(__dirname, 'views'))

//set the view engine
app.set('view engine', 'mustache')

//initialize view engine as middleware
app.engine('mustache', hoganMiddleware.__express)

//set statis assets 
app.use(express.static(path.join(__dirname, "public")))

const port = 3000;
//app.listen(port);
app.listen(port, () =>{
console.log(`Server Started at port ${port}...`)
})


//installed templating engine mustache as hjn
//installed mustach as hogan-middleware 