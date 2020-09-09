
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
	


//CREATE ACCOUNT query base
approuter.get('/account', (req, res) => {
	let signUp = req.query.signup
	let login = req.query.login


	//check for cookie 
	if(cookie){
		//get user from cookie and redirect user to page
		let question = `SELECT * FROM posts`;
		sqldb.query(question, (err, result)=>{
		if(err) throw err;
	
		res.redirect("/profile/"+cookieUser)

		})
	}
	//no cookie found, check if user is loggin in or signing up
	else{
	//sign up
	if(signUp != "" && login == ""){
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
			let question = 'INSERT INTO posts SET ?'
	
			sqldb.query(question, newUser, (err, result, fields)=>{
				if(err) throw err;
				newUser.id = result.insertId
				res.render("onboard", newUser)
	
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
		else if (login != "" && signUp == ""){

			//user login
		}

		else{
			//not handled
		}
	}
	
	
		
	});




//LOAD PROFILE
approuter.get('/profile/:username', (req, res) => {
	let userName = req.params.username
	let question = `SELECT * FROM posts WHERE username =` + sqldb.escape(userName)

	sqldb.query(question, (err, result)=>{
		if(err) throw err;
		//populate user data
		let user = Object.assign(result[0], ["name","email","username"]);
	    res.render("profile", user); 



	})


});

module.exports = approuter;
