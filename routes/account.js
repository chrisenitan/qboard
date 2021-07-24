//account settings only
const express = require('express'); //param body query
const mysql = require('mysql')
//const nodemailer = require('nodemailer');
const {processMail} = require('../cModules/qMail');
const { response } = require('./main');


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

/* const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
}); */

const sqldb = mysql.createConnection({
	host: process.env.awsserver,
	user: process.env.awsuser,
	password: process.env.awspass,
	database: process.env.awsdb,
  })

sqldb.connect((err) => {
    if(err){ throw err }
      console.log(`Connected to Account ${process.env.awsserver} on thread: ${sqldb.threadId}`)
})

//quick delete user. not part of code 
approuter.get("/delete/:username", (req, res)=>{
	let userToDelete = req.params.username
	let deleteUser = `DELETE FROM profiles WHERE username = ` + sqldb.escape(userToDelete)
	sqldb.query(deleteUser, (err, result)=>{
		if (err) throw err
		res.clearCookie("user")
		res.send(`${userToDelete} Deleted: Confirm ${result.affectedRows}`)
	})
})

//get all users 
approuter.get("/all", (req, res)=>{
	let deleteUser = `SELECT * FROM profiles WHERE username != '' `
	sqldb.query(deleteUser, (err, result)=>{
		if (err) throw err
		
		if(Object.keys(result).length != 0){
			res.json({result})
		}
		else{
			res.json("No user found")
		}

	})
})


//Get user
approuter.post('/login', (req, res) => {

	//do some sanitisation
	let newUser = {
		request: req.body.request,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		bt: req.body.bt
    }
//log user in and send user to profile page
let getUser = `SELECT * FROM profiles WHERE username = ` + sqldb.escape(newUser.username) + ` AND password = ` + sqldb.escape(newUser.password) + `LIMIT 1` 
sqldb.query(getUser, (err, result)=>{
	if (err) throw err;
	if(Object.keys(result).length != 0){
		console.log("Login User found")
		//export user
		let user = result[0]
		result.purpose = "login" //set pupose to login as opposed to updating account...
		//delete old cookie if available
		res.clearCookie("user")

		//create new cookie
		res.cookie("user", user.cookie, {maxAge: 2592000000, httpOnly: false})
		res.redirect('/' + user.username)
	} 
	else{
		console.log("User not found: accounts")
		res.redirect("/login?a=userNotFound")
	}
})


});


//LOG OUT
approuter.get('/logout', (req, res) => {
	//do some db update if needed

	if(req.cookies.user == ""){
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

	let getUser = `SELECT * FROM profiles WHERE cookie = "${userCookie}" LIMIT 1`
	sqldb.query(getUser, (err, result)=>{
		if (err) throw err
		if(Object.keys(result).length != 0){
			console.log("User found")
			res.render("account/edit", result[0])
		}
		else{
			console.log("User not found: edit account")
			//what to do?
			res.send("User not found")
		}
	})

});


//EDIT ACCOUNT or advanced edits
approuter.get('/account', (req, res) => {

	//res.render("editAccount");

});

//reset password gotten from token recovery
approuter.post("/reset", (req, res)=>{
	let resetRequest = req.body
	console.log(resetRequest)
	//get valid token from db
	let getValidDBToken = `SELECT * FROM profiles WHERE email = ` + sqldb.escape(resetRequest.email)
	sqldb.query(getValidDBToken, (err, validDBUser)=>{
		if (err) throw err
		if(Object.keys(validDBUser).length != 0){
			console.log(`We found ${validDBUser[0].username}`)
			let objValidDBUser = validDBUser[0]
			//check if token is valid with provided data
			if(objValidDBUser.token == resetRequest.token){
				console.log("We can reset")
				//update password
				let updatePassword = `UPDATE profiles SET password = ` + sqldb.escape(resetRequest.npassword) + `WHERE email = ` + sqldb.escape(resetRequest.email)
				sqldb.query(updatePassword, (err, updatedReturn)=>{
					if (err) throw err
					console.log(`affected rows ${updatedReturn.affectedRows}`)
				})
				console.log(objValidDBUser)
				res.redirect("recovery/completed")

			}
			else{
				console.log("We cannot reset")
				res.send("we cannot reset")
			}
		}
		else{
			
		}
	})
})


//recovery, just incase anyone wants to rest their passowrd from a link
approuter.get('/recovery/:token?', (req, res) => {
	if(req.params.token){
		//swicth cases
		switch(req.params.token){
			case "start":
				var data = {
					message: "Your account recovery has started."
				}
				res.render("account/recovery", data);
			break;

			case "confirm":
				var data = {
					message: "Your account recovery has started.",
					confirm: true
				}
				res.render("account/recovery", data);
				break;

				case "completed":
					var data = {
						message: "You have reset your account.",
						completed: true
					}
					res.render("account/recovery", data);
				break;

				default:
					res.render("account/recovery");
		}
	}
	else{
		res.render("account/recovery");
	}
});

//recovery, collect user code and verify that token was correct the reset passowrd and ask user to login 
approuter.post('/recovery', (req, res) => {
	let requestingUser = {
		email: req.body.email
	}	
	//send email to actual account if found
	if(req.cookies.user != undefined){
		var getAccount = `SELECT * FROM profiles WHERE email = ` + sqldb.escape(requestingUser.email) + `AND cookie = ${req.cookies.user}`
	}
	else{
		var getAccount = `SELECT * FROM profiles WHERE email = ` + sqldb.escape(requestingUser.email) 
	}
	sqldb.query(getAccount, (err, gotAccount)=>{
		if (err) throw err
		if(Object.keys(gotAccount).lenght != 0){
			//create a token
			var userToken = "ChrisToken"
			//save the token to db
			let holdToken = `UPDATE profiles set token = '${userToken}' WHERE username = '${gotAccount[0].username}'` 
			sqldb.query(holdToken, (err, held, fields)=>{
				if(err) throw err
				console.log(`Inserted one value ${held.insertId}`)
				res.send(`Inserted: ${held.affectedRows} into ${gotAccount[0].username}`)

				//send the email with token
				processMail({//need to bring this function back here... 
				to: "enitanchris@gmail.com",
				subject: "Account Recovery",
				body: `You requested a new password and we have a token as: ${userToken}`
				})
			//res.redirect("recovery/start")
			})
		}
	})

	
	//password reset
	//	res.render("recovery");
	
});

//page reload and stuff. should be handled with a 404
approuter.get("/create", (req, res)=>{
	res.redirect("/")
})


// sign up .. CREATE ACCOUNT QUERY BASED
approuter.post('/create', (req, res) => {

	//create random id
	var ranId = ""
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for(var i = 0; i < 8; i++){
		ranId += characters.charAt(Math.floor(Math.random() * characters.length))
	}

	//get user details from login form
	let newUser = {
		request: req.body.request,
		name: req.body.name,
		username: req.body.username,
		id: ranId,
		email: req.body.email,
		cookie: "testcookie",
		bt: req.body.bt
	}
	console.log(req.cookies.user)

	//check for cookie 
	if(req.cookies.user){
		//get user from cookie and redirect user to page
		let question = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user);
		sqldb.query(question, (err, fetchUserFromCookie)=>{
		if(err) throw err; 
		
		if(Object.keys(fetchUserFromCookie).length != 0){
			console.log("user cookie found")
			let gotUserFromCookie = fetchUserFromCookie[0]
			res.redirect(`/${gotUserFromCookie.username}`)
		}

		})
	}
	//no cookie found, check if user is loggin in or signing up. just do this
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
										let insertUser = 'INSERT INTO profiles SET ?'
										//sanitise newUser object 
										delete newUser.request; delete newUser.bt
										sqldb.query(insertUser, newUser, (failed, returnedUser, fields)=>{
											if(failed) throw failed;
											//user was registered
											if(returnedUser.insertId != undefined){
												res.cookie("user", newUser.cookie)
												newUser.id = returnedUser.insertId
												res.render("account/onboard", newUser)
											}
										})
										}
										//user found in db, should never happen if we prewarn usernames, send to profile. 
										else{
											console.log("User existed. Please go to profile page and load public or private view");
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
