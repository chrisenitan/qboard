
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
      console.log("Free DB 'Main' Connected..." + sqldb.threadId)
})


//LOG IN
approuter.get('/login', (req, res) => {

	res.render("login");

});



//LOAD PROFILE DEFAULT FOR ALL ROOT LINKS EXPECT DEFINED
approuter.get('/', (req, res) => {
let userName = req.params.username
/* 		let question = `SELECT * FROM posts WHERE username =` + sqldb.escape(userName)

	sqldb.query(question, (err, result)=>{
		if(err) throw err;
		//populate user data
		let user = Object.assign(result[0], ["name","email","username"]);
	    res.render("profile", user); 

    }) */
    res.send("profile page reached")
    console.log("reached profile page")

});








module.exports = approuter;
