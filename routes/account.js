
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

});


//LOG IN
approuter.get('/login', (req, res) => {

//	res.render("signup");

});


//LOG OUT
approuter.get('/logout', (req, res) => {

	//	res.render("signup");
	
	});
	


//CREATE ACCOUNT
approuter.get('/profile', (req, res) => {

	//check for cookie 
	if(cookie){
		//get user from cookie and redirect user to page
		let question = `SELECT * FROM posts`;
		sqldb.query(question, (err, result)=>{
		if(err) throw err;
	
		res.redirect("/profile/"+cookieUser)

		})
	}
	//no cookie so we try to register new user
	else if(req.body != ""){

		if(req.body.bt != ""){
			console.log("Bot live")
		}
		else{
		//get user details from login form
		let newUser = {
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			bt: req.body.bt
		}
		//check if user never existed
		let question = `SELECT * FROM posts WHERE id = ` + sqldb.escape(newUser.name);
		sqldb.query(question, (err, result)=>{
		if(err) throw err;

		if(result.length == 0){
		//register new user
		let question = sqldb.format('UPDATE posts SET name = ?, username = ?, email = ? WHERE id = ?', [newUser.title, newUser.body, newUser.owner]); 

		sqldb.query(question, (err, result)=>{
			if(err) throw err;

			res.render("onboard", result)

		})
		}
		//user found in db, load profile
		else{
			console.log("User existed. Please go to profile page")
			res.redirect("/profile/"+newUser.username)

		}

		})

		}

	}	
	});




//LOAD ACCOUNT
approuter.get('/profile/:username', (req, res) => {


});




//close connection
//sqldb.end()


module.exports = approuter;
