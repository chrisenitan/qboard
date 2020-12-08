//app settings only
const express = require('express'); //param body query
const mysql = require('mysql')

//initislaize express
const approuter = express();


/* GCP
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
*/


const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});

sqldb.connect((err) => {
    if(err){ throw err }
    console.log(`Connected to Settings ${process.env.fhserver} on thread: ${sqldb.threadId}`)
})



//EDIT App account SETTINGS... deactivate etc
approuter.get('/account', (req, res) => {

	res.render("appSettings");

});


//app settings 
approuter.get("/notifications", (req, res)=>{
    //res.render("appSettings");
})


//app settings 
approuter.get("/privacy_and_safety", (req, res)=>{
    //res.render("appSettings");
})





module.exports = approuter;
