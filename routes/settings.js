
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
      console.log("Free DB 'Settings' Connected..." + sqldb.threadId)
})


//EDIT PROFILE
approuter.get('/profile', (req, res) => {

	res.render("editProfile");

});




//EDIT ACCOUNT
approuter.get('/account', (req, res) => {

	res.render("editAccount");

});



//EDIT APP SETTINGS
approuter.get('/account', (req, res) => {

	res.render("appSettings");

});

module.exports = approuter;
