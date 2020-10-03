
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
? query
: params
form body
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
    const act = req.query.r

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

	res.render("login");

});


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");

});


//LOAD PROFILE DEFAULT FOR ALL ROOT LINKS EXPECT DEFINED
approuter.get('/:username', (req, res) => {

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




module.exports = approuter;
