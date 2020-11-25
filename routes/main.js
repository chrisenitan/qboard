
const express = require('express'); //param body query
const mysql   = require('mysql')



//initislaize express
const approuter = express();


/* GCP
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
? = query
: = params
form = body
*/


const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});

sqldb.connect((err) => {
    if(err){ throw err }
    console.log(`Connected to Main ${process.env.fhserver} on thread: ${sqldb.threadId}`)
})

//HOME
approuter.get('/', (req, res) => {
    const act = req.query.act
    if(act == "logout"){
        let data ={
            ref: act,
            message: `Successful ${act}`
        } 
        res.render("index", data)
    }
    else{
    res.render("index")
    }
});


//LOG IN
approuter.get('/login', (req, res) => {
    var request = req.query
    if(Object.keys(request).length != 0){
       console.log(`Redirected because ${request.message}`)
       res.render("login",request);
    }
    else{
        res.render("login");
    }

});


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");

});


//LOAD PROFILE DEFAULT FOR ALL ROOT LINKS EXPECT DEFINED
approuter.get('/:username', (req, res) => {
    /*
    let userUsername = req.params.username
    let userCookie = req.cookies.user
    console.log(userCookie + " cookie: " + userUsername)
    res.status(200).json({
        message: "User found",
        username: userUsername,
        cookie: userCookie
    })

    let checkForUser = `SELECT * FROM posts WHERE username =` + sqldb.escape(userUsername) + `AND WHERE cookie = ` + sqldb.escape(userCookie);
    sqldb.query(checkForUser, (err, result)=>{
        if (err) throw err;
        
        if(Object.keys(result) == 0){
            console.log("User not found")
        }
    })
 */
    //handle or check if user is loading or updating. 

/* 	let userName = req.params.username
	let question = `SELECT * FROM posts WHERE username =` + sqldb.escape(userName)

	sqldb.query(question, (err, result)=>{
		if(err) throw err;
		//populate user data
		let user = Object.assign(result[0], ["name","email","username"]);
	    res.render("profile", user); 

    }) */


    //dummy data
    //get user details from login form
	let newUser = {
		request: "login",
		username: req.params.username,
		email: req.params.email, //currently does not work as this is not sent from redrect cus the url only takes /username to check
		bt: "req.body.bt"
    }
    
    //show user logged in
    //res.send("profile page reached" + ` welcome ${newUser.username}, your email is ${newUser.email}`)

    res.render("profile", newUser)
 

});

//save new peofile...
approuter.post('/:username', (req, res) => {

})


//explore tags and other topics
approuter.get("/explore", (req, res)=>{

})



module.exports = approuter;
