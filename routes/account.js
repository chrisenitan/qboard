
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
      console.log("Free DB 'Accounts' Connected..." + sqldb.threadId)
})


//Get user
approuter.post('/login', (req, res) => {

	//get user details from login form
	let newUser = {
		request: req.body.request,
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		bt: req.body.bt
	}
	
//log user in ans send user to profile page 
res.render(`/${newUser.username}`, newUser)
	
});


//LOG OUT
approuter.get('/logout', (req, res) => {

	//	res.render("logout");
	
});
	


//ACCOUNT RECOVERY
approuter.get('/recovery', (req, res) => {

	//	res.render("recovery");
	
});


// sign up .. CREATE ACCOUNT QUERY BASED
approuter.get('/create', (req, res) => {

	//get user details from login form
	let newUser = {
		request: req.body.request,
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		bt: req.body.bt
	}


	//check for cookie 
	if(cookie){
		//get user from cookie and redirect user to page
		let question = `SELECT * FROM posts`;
		sqldb.query(question, (err, result)=>{
		if(err) throw err;
	
		res.redirect("/"+cookieUser)

		})
	}

	//no cookie found, check if user is loggin in or signing up
	else{
	//sign up
	if(newUser.request == "signup"){
		//check for bot
			if(newUser.bt != ""){
				console.log("Bot live")
			}
			else{
			//check if user never existed
			let question = `SELECT * FROM posts WHERE email = ` + sqldb.escape(newUser.email) + `OR username = ` + sqldb.escape(newUser.username);
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
			//user found in db, should never happen if we prewarn usernames, send to profile. 
			else{
				console.log("User existed. Please go to profile page")
				res.redirect("/"+newUser.username)
			}
	
			})
	
			}
	
		}
		else{
			//not handled. might not be a signup
		}
	}
	
	
		
	});




module.exports = approuter;
