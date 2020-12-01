//account settings only
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
      console.log(`Connected to Account ${process.env.fhserver} on thread: ${sqldb.threadId}`)
})


//Get user
approuter.post('/login', (req, res) => {

	//do some sanitisation
	let newUser = {
		request: req.body.request,
		username: req.body.username,
		email: req.body.email,
		bt: req.body.bt
    }
	
//log user in and send user to profile page
let getUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(newUser.username) + `LIMIT 1` 
sqldb.query(getUser, (err, result)=>{
	if (err) throw err;
	if(Object.keys(result).length != 0){
		console.log("Login User found")
		//export user
		let user = Object.assign(result[0],['name','username','','','cookie'])
		result.purpose = "login" //set pupose to login as opposed to updating account...
		//delete old cookie if available
		res.clearCookie("user")

		//create new cookie
		res.cookie("user", user.cookie)
		res.redirect('/' + user.username)
	} 
	else{
		console.log("User not found")
		res.redirect("/login?message=userNotFound")
	}
})


});


//LOG OUT
approuter.post('/logout', (req, res) => {
	//do some sanitisation
	let newUser = {
		request: req.body.request,
		username: req.body.username,
		bt: req.body.bt
	}
	if(newUser.bt != ""){
		console.log("bot log out or something")
	}
	else{
		console.log("can log user out")
		res.clearCookie("user")
		res.redirect("/?act=logout")
	}	
});

//EDIT PROFILE
approuter.get('/edit', (req, res) => {
	var userCookie = req.cookies.user

/* 	let getUser = `SELECT * FROM posts WHERE cookie = ${userCookie} LIMIT 1`
	sqldb.query(getUser, (err, result)=>{
		if (err) throw err
		if(Object.keys(result).length != 0){
			console.log("User not found")
			//what to do?
			res.render("account/edit", result)
		}
		else{
			console.log("User found")
			res.render("account/edit", result)
		}
	})
 */
	let userData={user:userCookie}
	//res.send("Edit profile")
	res.render("account/edit", userData);

});


//EDIT ACCOUNT
approuter.get('/account', (req, res) => {

	//res.render("editAccount");

});


//recovery, just incase anyone wants to rest their passowrd from a link
approuter.get('/recovery', (req, res) => {

	//password reset
	//res.render("recovery");
	
});

//recovery, collect user code and verify that token was correct the reset passowrd and ask user to login 
approuter.post('/recovery', (req, res) => {

	//password reset
	//	res.render("recovery");
	
});


// sign up .. CREATE ACCOUNT QUERY BASED
approuter.post('/create', (req, res) => {
	const {cookies} = req

	//create random id
	var ranId = ""
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for(var i = 0; i < 8; i++){
		ranId += characters.charAt(Math.floor(Math.random) * characters.length)
	}

	//get user details from login form
	let newUser = {
		request: req.body.request,
		name: req.body.name,
		username: req.body.username,
		id: ranId,
		email: req.body.email,
		bt: req.body.bt
	}

	//check for cookie 
	if("user" in cookies){
		//get user from cookie and redirect user to page
		let question = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user);
		sqldb.query(question, (err, result)=>{
		if(err) throw err; 
		console.log("user cookie provided")
	//check if cookie matches db
	//check if cookie matches broser setup

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
					//prevent signup with protected usernames again
					let checkProtectedUsernames = `SELECT * FROM protectedUsernames WHERE username =` + sqldb.escape(newUser.username) + `OR id =` + sqldb.escape(newUser.id)
					sqldb.escape(newUser.username)	
					sqldb.query(checkProtectedUsernames, (err, protected)=>{
						if (err) throw err;

							if(Object.keys(protected).length == 0){
								console.log("Username or ID is allowed")

								//check if user never existed
								let question = `SELECT * FROM profiles WHERE email = ` + sqldb.escape(newUser.email) + `OR username = ` + sqldb.escape(newUser.username) + `OR ID = ` + sqldb.escape(newUser.id);
								sqldb.query(question, (err, result)=>{
									if(err) throw err;
				
										if(Object.keys(result).length == 0){
										//register new user
										let question = 'INSERT INTO profiles SET ?'
										sqldb.query(question, newUser, (failed, returnedUser, fields)=>{
											if(failed) throw failed;
											newUser.id = returnedUser.insertId
											res.render("account/onboard", newUser)
				
										})
										}
										//user found in db, should never happen if we prewarn usernames, send to profile. 
										else{
											console.log("User existed. Please go to profile page and load public or private view")
											res.redirect("/"+newUser.username)
										}
				
									})
							}
						else{
							console.log("Username is part of restricted names")
							let faqref = {
							reason: "protectedUsername",
							user: newUser.username
							}
							res.render("faq", faqref);
							return false;
						}
					})
				}
				console.log("User signing up, but not but and still did not sign up?")
		}
			else{
				console.log("Page hit with minimal post params and cookie. Ask for sign up")
				res.send("register please")
			}
	}
})




module.exports = approuter;
