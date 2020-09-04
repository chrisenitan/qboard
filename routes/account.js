
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
      console.log("MySQL FreeHost Database Connected..." + sqldb.threadId)
})


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");
	log("ggg")

});


//LOG IN
approuter.get('/signup', (req, res) => {

	res.render("signup");

});








//close connection
//sqldb.end()


module.exports = approuter;
