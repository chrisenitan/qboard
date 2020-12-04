
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
    //check if own profile or not

    let userUsername = req.params.username

    if(req.cookies.user != undefined){
        //login cookie user
        let userCookie = req.cookies.user
        console.log(userCookie + " cookie: " + userUsername)
        let checkForUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userUsername) + `AND cookie = ` + sqldb.escape(userCookie);
    sqldb.query(checkForUser, (err, result)=>{
        if (err) throw err;
        
        //all these are already done on main route. we should just collect the object or check if its a login or url vivist
        if(Object.keys(result).length == 0){
            console.log("User not found.")
            res.status(204).json({
                message:"no user found"
            })
        }
        //user found
        else{
           console.log(result)
           let foundUser = Object.assign(result[0], ["name","username","","hint","","","image",""])
           res.render("profile", foundUser)
        }
    })
    }
    
    //not a cookie user, must be public page visit?
    else{
        let checkForUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userUsername)
    sqldb.query(checkForUser, (err, result)=>{
        if (err) throw err;
        
        //all these are already done on main route. we should just collect the object or check if its a login or url vivist
        if(Object.keys(result).length == 0){
            console.log("User not found: main")
            res.redirect("/login?message=userNotFound")
        }
        //user found
        else{
           console.log(result)
           let foundUser = Object.assign(result[0], ["name","username","","hint","","","image",""])
           res.render("profile", foundUser)
        }
    })  
    }
    
    
   

    

});

//save new peofile...
approuter.post('/:username', (req, res) => {
 //handle or check if user is loading or updating. 

/* 	let userName = req.params.username
	let question = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userName)

	sqldb.query(question, (err, result)=>{
		if(err) throw err;
		//populate user data
		let user = Object.assign(result[0], ["name","email","username"]);
	    res.render("profile", user); 

    }) */

})


//explore tags and other topics
approuter.get("/explore", (req, res)=>{

})



module.exports = approuter;
